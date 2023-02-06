// para leer tanto en JS como en CSS, etiquetas de HTML se usa asi
// hi para el nombre de la etiqueta
// si es una clase usar .
// si es un ID usar #
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
   const sumaInputs = input1.value + input2.value;
   pResult.innerHTML = "Resultado : " + sumaInputs;
}