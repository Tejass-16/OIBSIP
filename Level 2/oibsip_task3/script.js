// select DOM elements
const form = document.querySelector("form");
const newInput = document.querySelector("#new-item");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// add event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
});

addButton.addEventListener("click", () => {
  addItem();
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    deleteItem(e.target.parentElement);
  }
});

// helper functions
function addItem() {
  const newItem = newInput.value.trim();
  if (newItem === "") {
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.textContent = newItem;
  const button = document.createElement("button");
  button.classList.add("delete-button");
  button.textContent = "Delete";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  newInput.value = "";
}

function deleteItem(item) {
  todoList.removeChild(item);
}
