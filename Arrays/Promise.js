// what is promises ?
// promise is Objects
// why : we are using promises t handle asynchronous opertation

// how?
// lets take scenario like flight ticket booking
// when after booking ticket they give ticket not directly in acces tio sitting in plain
// so here ticket promise

const ticket = new Promise((resolve, reject) => {
  let isOnboarded = true;
  if (isOnboarded) {
    return resolve('whohoh your ticket is onborder succesfully done ');
  } else {
    reject('Your ticket has been cancelled');
  }
});
// promise reunr 3 values like
// pending
// resoleve
// reject
// tikcet is my promise
ticket
  .then((res) => {
    console.log('hoo', res);
  })
  .catch((err) => {
    console.log('nooo', err);
  });
