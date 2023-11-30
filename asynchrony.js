function delayedFunction() {
  console.log("Ця функція виконується після затримки.");
}
var delayTime = prompt("Введіть час затримки в мілісекундах:");

setTimeout(delayedFunction, delayTime);
