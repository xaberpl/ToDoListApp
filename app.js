const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");

toDoButton.addEventListener("click", addToDo);

function addToDo(event) {
  event.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDo");
  document.body.appendChild(toDoDiv);

  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add("toDoItem");
  toDoDiv.appendChild(newToDo);
}
