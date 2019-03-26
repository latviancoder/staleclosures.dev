import { useEffect, useState } from 'react';

function getScrollPosition() {
  const h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}

export default function useScrollingPosition() {
  const [scroll, setScroll] = useState(0);

  function onScroll() {
    setScroll(getScrollPosition());
  }

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, false);
    return () => window.removeEventListener('scroll', onScroll, false);
  }, []);

  return scroll;
}