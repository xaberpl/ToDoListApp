const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);

function addToDo(event) {
  event.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDo");

  const newToDo = document.createElement("li");
  newToDo.innerText = toDoInput.value;
  newToDo.classList.add("toDoItem");
  toDoDiv.appendChild(newToDo);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("completeButton");
  toDoDiv.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("deleteButton");
  toDoDiv.appendChild(deleteButton);

  toDoList.appendChild(toDoDiv);

  toDoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.className === "deleteButton") {
    item.parentElement.remove();
  }
}
