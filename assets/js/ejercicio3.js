
let valor1Input = document.querySelector("#valor1");
let valor2Input = document.querySelector("#valor2");

const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");

let resultado = document.querySelector("#resultado");

btnSumar.addEventListener('click', () => {
    let valor1 = parseFloat(valor1Input.value);
    let valor2 = parseFloat(valor2Input.value);
    let resultadoSumar = valor1 + valor2;

    if (resultadoSumar < 0) {
        resultado.textContent = 0;
    } else {
        resultado.textContent = resultadoSumar;
    }
});

btnRestar.addEventListener('click', () => {
    let valor1 = parseFloat(valor1Input.value);
    let valor2 = parseFloat(valor2Input.value);
    let resultadoResta = valor1 - valor2;

    if (resultadoResta < 0) {
        resultado.textContent = 0;
    } else {
        resultado.textContent = resultadoResta;
    }
});
