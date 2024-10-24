const multiply = (a, b) => {
  return a * b;
};

const curryingFunction = (fn) => {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
};

const res = curryingFunction(multiply);

console.log('res', multiply(4,5));
