const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

// Eventos

// Gerar QR Code

const generateQrCode = () => {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) {
    return;
  }

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://quickchart.io/qr?size=150&text=${encodeURIComponent(qrCodeInputValue)}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código gerado!"
    qrCodeImg.style.opacity = "1";
  });
};

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  };
});

// 

qrCodeInput.addEventListener("keyup", () =>{
    if (!qrCodeInput.value) {
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
        qrCodeImg.style.opacity = "0";
    }
})