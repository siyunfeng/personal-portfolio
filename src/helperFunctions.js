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

export const mailtoURL = ({ myEmail, subject, message }) => {
  return `mailto:${myEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}}`;
};
