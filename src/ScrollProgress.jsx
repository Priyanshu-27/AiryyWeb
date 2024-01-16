import React, { useEffect } from 'react';

const ScrollProgress = () => {
  const calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', calcScrollValue);
    return () => {
      window.removeEventListener('scroll', calcScrollValue);
    };
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="progress" onClick={scrollToTop}>
      <span id="progress-value">&#x1F815;</span>
    </div>
  );
};

export default ScrollProgress;
