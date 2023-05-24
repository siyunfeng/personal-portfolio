export const onTopScroll = (setFunc) => {
  if (window.scrollY > 50) {
    setFunc(true);
  } else {
    setFunc(false);
  }
};

export const scrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};
