// function outerFuction() {
//   let a = 1;
//   function innerFuction() {
//     console.log('a', a);
//   }
//   innerFuction();
// }
// outerFuction();

function createCounter() {
  let count = 0; // Closure variable to keep track of the invocations

  return function () {
    count++;
    console.log(`This function has been called ${count} times`);
  };
}

const counter = createCounter();
counter(); 