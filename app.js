const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");
const filterOption = document.querySelector(".filterToDo");

toDoButton.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);

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
  console.log(e.target);
  const item = e.target;
  if (item.className === "deleteButton") {
    const toDo = item.parentElement;
    toDo.classList.add("fall");
    toDo.addEventListener("transitionend", function () {
      toDo.remove();
    });
  }
  if (item.classList[0] === "completeButton") {
    const toDo = item.parentElement;
    toDo.classList.toggle("completed");
  }
}

function filterToDo(e) {
  const toDos = toDoList.childNodes;
  toDos.forEach(function (toDo) {
    switch (e.target.value) {
      case "all":
        toDo.style.display = "flex";
        break;
      case "completed":
        if (toDo.classList.contains("completed")) {
          toDo.style.display = "flex";
        } else {
          toDo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!toDo.classList.contains("completed")) {
          toDo.style.display = "flex";
        } else {
          toDo.style.display = "none";
        }
        break;
    }
  });
}
