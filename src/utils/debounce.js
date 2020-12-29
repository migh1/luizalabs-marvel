const debounce = (fn, time) => {
  let timeout;

  return function execFn(...args) {
    const later = () => {
      timeout = null;

      fn(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, time);
  };
};

export default debounce;
