const passwordOpen = document.getElementById("password");
const eyeClose = document.getElementById("eyeclose");

eyeClose.onclick = () => {
  if (passwordOpen.type == "password") {
    passwordOpen.type = "text";
    eyeClose.className = "fa-regular fa-3x fa-face-grin-stars";
  } else {
    passwordOpen.type = "password";
    eyeClose.className = "fa-regular fa-3x fa-face-grin-tongue-squin";
  }
};
