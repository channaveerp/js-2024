function recursion(n) {
  // base case
  if (n === 0) {
    return 1;
  }
  return n * recursion(n - 1);
}
console.log(recursion(4));
