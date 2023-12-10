const QRinput = document.getElementById("QR-input");
const QRImg = document.getElementById("QR-img");
const QRBtn = document.getElementById("QR-btn");

function QRimage() {
  QRImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    QRinput.value;
}
QRimage();
