const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function delayedFunction() {
  console.log("Ця функція виконується після затримки.");
}

rl.question("Введіть час затримки в секундах: ", (delayTime) => {
    delayTime = delayTime * 1000
  setTimeout(delayedFunction, delayTime);

  rl.close(); 
});
