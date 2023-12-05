let lists = document.getElementsByClassName("images");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
console.log(lists);
let listsArray = Array.from(lists);
console.log(listsArray);

for (let list of listsArray) {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    right.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    left.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
