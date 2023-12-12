let toastBox = document.getElementById("toast-box");
let successMsg =
  '<i class="fa-solid fa-2x fa-circle-check" style="color: #007d00;"></i>Successfully submited';
let errorMsg =
  '<i class="fa-solid fa-2x fa-circle-xmark" style="color: #ff0000;"></i>Please fix the Error';
let invalidMsg =
  '<i class="fa-solid fa-2x fa-circle-exclamation" style="color:  rgb(20, 58, 248);"></i>Invalid input check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Successfully")) {
    toast.classList.add("success");
  }
  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
