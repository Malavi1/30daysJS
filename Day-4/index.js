var icon = document.getElementById("sun");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/darkmode.png";
  } else {
    icon.src = "./images/lightmode.png";
  }
};
