export function debounce(func, timeout = 300) {
  let timer;
  return function (reference, ...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(reference, args);
    }, timeout);
  };
}
