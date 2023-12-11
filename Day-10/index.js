const QRinput = document.getElementById("QR-input");
const QRImg = document.getElementById("QR-img");
console.log(QRinput.value.length);
console.log(QRinput);
function QRimage() {
  console.log(QRinput.value.length);
  if (QRinput.value.length > 0) {
    QRImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      QRinput.value;
    QRImg.classList.add("show-img");
  } else {
    QRinput.classList.add("error");
  }
}

QRinput.value = "";
