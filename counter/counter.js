let pre = document.getElementById("saved");
let counEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  counEl.innerText = count;
}
function decrement() {
  count = 0;
  counEl.innerText = count;
}

function save() {
  let countStr = " " + count + " - ";
  pre.innerText += countStr;
}
