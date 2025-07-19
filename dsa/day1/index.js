let time = document.getElementById('time');

function start() {
  for (let i = 0; i <= 10; i++) {
    // do nothing
    setTimeout(() => {
      console.log('timeout', i);
      time.innerHTML = i;
    }, 1000 * i);
  }
}
start();
