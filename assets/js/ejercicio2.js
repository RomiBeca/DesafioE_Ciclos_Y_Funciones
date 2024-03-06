const miBtn1 = document.querySelector("#btn-1");
const miBtn2 = document.querySelector("#btn-2");
const miBtn3 = document.querySelector("#btn-3");
const miBtn4 = document.querySelector("#btn-4");
const miBtn5 = document.querySelector("#btn-5");
const miBtn6 = document.querySelector("#btn-6");

const miCaja = document.querySelector("#caja");

miBtn1.addEventListener("click", () => {
    miCaja.style.backgroundColor = "#e53e3e";
});

miBtn2.addEventListener("click", () => {
    miCaja.style.backgroundColor = "#dd6b20";
});

miBtn3.addEventListener("click", () => {
    miCaja.style.backgroundColor = "#faf089";
});

miBtn4.addEventListener("click", () => {
    miCaja.style.backgroundColor = "#48bb78";
});

miBtn5.addEventListener("click", () => {
    miCaja.style.backgroundColor = "#81e6d9";
});

miBtn6.addEventListener("click", () => {
    miCaja.style.backgroundColor = "#d53f8c";
});
