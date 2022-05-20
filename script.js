const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const lis = document.getElementsByTagName("li");
const printButton = document.getElementById("print");
const deleteButton = document.getElementById("delete");
const tooltip = document.getElementById("tooltip");

// empty the input field
const resetInput = () => {
  input.value = "";
}

// returns input lenght to check if the item should be send (>1) 
const inputLength = () => {
  return input.value.length;
}

// add input value as list item after "add an item" button is pressed
const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement(input.value);
  }
}
// add input value as list item after enter key is pressed
const addListAfterKeypress = (event) => {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement(input.value);
  }
}
// change list style and icons to done
function crossedList() {
  this.classList.toggle("done");
}

function deleteItem() {
  this.parentNode.remove();
}

// create new element with input value, and trash button
function createListElement(value) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  li.addEventListener("click", crossedList);
  ul.appendChild(li);
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  li.appendChild(trashButton);
  const trash = document.createElement("i");
  trash.classList.add("fa");
  trash.classList.add("fa-trash");
  trashButton.appendChild(trash);
  trashButton.addEventListener("click", deleteItem);
  resetInput();
}

function printPage() {
  tooltip.classList.add("hidden");
  deleteButton.classList.add("hidden");
  button.classList.add("hidden");
  input.classList.add("hidden");
  printButton.classList.add("hidden");
  window.print();
  deleteButton.classList.remove("hidden");
  button.classList.remove("hidden");
  input.classList.remove("hidden");
  printButton.classList.remove("hidden");
  tooltip.classList.remove("hidden");
}

function deleteList() {
  const elements = document.querySelectorAll("li");
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

// create "placeholder" items
var els = ["Milk", "Water", "Eggs", "Oranges", "Lemons"];
for (var i = 0; i < els.length; i++) {
  createListElement(els[i]);
}

deleteButton.addEventListener("click", deleteList);

printButton.addEventListener("click", printPage);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
