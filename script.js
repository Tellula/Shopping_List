const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");
const printButton = document.getElementById("print");
const deleteButton = document.getElementById("delete");

function resetInput() {
  input.value = "";
}

function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement(input.value);
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement(input.value);
  }
}

function crossedList() {
  this.classList.toggle("crossed");
}

function createListElement(value) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  li.addEventListener("click", crossedList);
  ul.appendChild(li);
  resetInput();
}

function printPage() {
  deleteButton.classList.add("hidden");
  button.classList.add("hidden");
  input.classList.add("hidden");
  printButton.classList.add("hidden");
  window.print();
  deleteButton.classList.remove("hidden");
  button.classList.remove("hidden");
  input.classList.remove("hidden");
  printButton.classList.remove("hidden");
}

function deleteList() {
  const elements = document.querySelectorAll("li");
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", crossedList);
}

deleteButton.addEventListener("click", deleteList);

printButton.addEventListener("click", printPage);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
