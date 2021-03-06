const list = [];
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
};

// returns input lenght to check if the item should be send (>1)
const inputLength = () => {
  return input.value.length;
};

//Checks if item is already on the list
const checkItemDouble = (input) => {
  if (list.includes(input) === true) {
    alert("This item is already in your shopping list !");
    resetInput();
    return true;
  } else {
    return false;
  }
};

// add input value as list item after "add an item" button is pressed
const addListAfterClick = () => {
  if (checkItemDouble(input.value) === false && inputLength() > 0) {
    createListElement(input.value);
  }
};

// add input value as list item after enter key is pressed
const addListAfterKeypress = (event) => {
  if (
    inputLength() > 0 &&
    event.key === "Enter" &&
    checkItemDouble(input.value) === false
  ) {
    createListElement(input.value);
  }
};
// change list style and icons to done
function crossedList() {
  this.classList.toggle("done");
}
//delete individual list item
function deleteItem() {
  this.parentNode.remove();
}

// create new element with input value, and trash button, and the crossed class
const createListElement = (value) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  li.addEventListener("click", crossedList);
  ul.appendChild(li);
  list.push(value);
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  li.appendChild(trashButton);
  const trash = document.createElement("i");
  trash.classList.add("fa");
  trash.classList.add("fa-trash");
  trashButton.appendChild(trash);
  trashButton.addEventListener("click", deleteItem);
  resetInput();
};
//print the page and hide/show buttons
const printPage = () => {
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
};
//delete the entire list
const deleteList = () => {
  const elements = document.querySelectorAll("li");
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
};

// create "placeholder" items
const cart = ["Milk", "Water", "Eggs", "Oranges", "Lemons"];
for (var i = 0; i < cart.length; i++) {
  createListElement(cart[i]);
}

deleteButton.addEventListener("click", deleteList);

printButton.addEventListener("click", printPage);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
