---
title: "Building useReducer with logger"
description: If you've played with useReducer hook and are coming from Redux background, you are probably missing some of useful middleware like logging. 
date: '2019-03-26'
image: ''
---

If you've played with `useReducer` hook and are coming from Redux background, you are probably missing some of useful middleware like [logging](https://github.com/LogRocket/redux-logger). In this post we are going to build a custom `useReducerWithLogger` hook.

This is our starting point. 

```javascript
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
}
```

The first thing we need to do is to create a custom hook and use it instead of `useReducer`. Right now it does absolutely nothing though. 

```javascript
// highlight-start
function useReducerWithLogger(reducer, initialState) {
  return useReducer(reducer, initialState);
}
// highlight-end

function App() {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState);
}
```

Did you know that useReducer accepts a third optional parameter? We forgot it. To save us from potential headache we can use [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to accept and pass any number of arguments.

```javascript
// highlight-start
function useReducerWithLogger(...args) {
  return useReducer(...args);
}
// highlight-end

function App() {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState);
}
```

Now we can use the power of `useEffect` to log state every time it changes. 

```javascript
function useReducerWithLogger(...args) {
  const [state, dispatch] = useReducer(...args);

  // highlight-start
  useEffect(() => {
    console.log('Next state', state);
  }, [state]);
  // highlight-end

  return [state, dispatch];
}
```

**What about previous state?** If we open handy React documentation we will find the answer to our question: [`useRef`](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state). The object it returns won't be recreated after every render. It can be used similarly to class instance properties. 

```javascript

function useReducerWithLogger(...args) {
  // highlight-next-line
  let prevState = useRef(initialState);
  const [state, dispatch] = useReducer(...args);

  useEffect(() => {
    console.log('Prev state: ', prevState.current);
    console.log('Next state: ', state);
    // highlight-next-line
    prevState.current = state;
  }, [state]);

  return [state, dispatch];
}
```

We would also like to display the type of dispatched action. We are going to borrow a concept from functional programming called [higher order functions](https://egghead.io/lessons/javascript-modify-functions-with-higher-order-functions-in-javascript) and replace our `dispatch` function with a custom one.

```javascript
// highlight-start
function withLogger(dispatch) {
  return function (action) {
    console.log('Action Type:', action.type);
    return dispatch(action);
  }
}
// highlight-end

function useReducerWithLogger(...args) {
  let prevState = useRef(initialState);
  const [state, dispatch] = useReducer(...args);
  
  // highlight-next-line
  const dispatchWithLogger = withLogger(dispatch);

  useEffect(() => {
    console.log('Prev state: ', prevState.current);
    console.log('Next state: ', state);
    prevState.current = state;
  }, [state]);

  // highlight-next-line
  return [state, dispatchWithLogger];
}
```

If we don't want the function to be recreated on every render we can also memoize it. 

```javascript
const dispatchWithLogger = useMemo(() => {
  return withLogger(dispatch);
}, [dispatch]);
```

As a final touch we can use [console.groupCollapsed](https://developer.mozilla.org/en-US/docs/Web/API/Console/groupCollapsed) to keep our console output clean and readable.

```javascript
function enchanceDispatchWithLogger(dispatch) {
  return function (action) {
    // highlight-next-line
    console.groupCollapsed('Action Type:', action.type);
    return dispatch(action);
  }
}

function useReducerWithLogger(...args) {
  let prevState = useRef(initialState);
  const [state, dispatch] = useReducer(...args);

  const dispatchWithLogger = useMemo(() => {
    return enchanceDispatchWithLogger(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (state !== initialState) {
      console.log('Prev state: ', prevState.current);
      console.log('Next state: ', state);
      // highlight-next-line
      console.groupEnd();
    }
    prevState.current = state;
  }, [state]);


  return [state, dispatchWithLogger];
}
```

The final version is available on [codesandbox](https://codesandbox.io/s/008koj8zov), feel free to play with it and use it in your projects.