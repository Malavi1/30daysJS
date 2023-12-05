const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTask = document.getElementById("addTask");

addTask.addEventListener("click", function () {
  performTask();
});

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    performTask();
  }
});

function performTask() {
  if (inputBox.value === "") {
    alert("Tasks aren't empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    saveData();
  }
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
