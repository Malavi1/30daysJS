const createBtn = document.getElementById("create-btn");
const notesContainer = document.querySelector(".notes-container");
const notes = document.querySelectorAll(".input-box");

createBtn.onclick = () => {
  const inputBox = document.createElement("p");
  const icon = document.createElement("I");
  inputBox.className = "input-box";
  inputBox.contentEditable = "true";
  icon.className = "fa-solid fa-trash";
  notesContainer.appendChild(inputBox);
  inputBox.appendChild(icon);
};
notesContainer.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyUp = function () {
        saveData();
      };
    });
  }
});

function saveData() {
  localStorage.setItem("data", notesContainer.innerHTML);
}

function showData() {
  notesContainer.innerHTML = localStorage.getItem("data");
}

showData();
