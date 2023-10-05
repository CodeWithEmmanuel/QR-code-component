const qrcodeEl = document.getElementById("qrcode");

function displayQrCode() {
  let qrcode = new QRCode(qrcodeEl, {
    text: "https://www.frontendmentor.io",
  });
}

window.addEventListener("DOMContentLoaded", displayQrCode);
