function validarEdad() {
    const edad = document.getElementById('edadInput').value;
    const resultadoEdad = document.getElementById('resultadoEdad');
    
    if (edad >= 18) {
        resultadoEdad.textContent = "Eres mayor de edad";
    } else {
        resultadoEdad.textContent = "Eres menor de edad";
    }
}
   
function esPar(numero) {  
 let esPar;
  esPar = numero % 2 === 0;
  return esPar;
}

function ValidarNumeroPar() {
    const numero = document.getElementById('numeroPar').value;
    const resultadoPar = document.getElementById('resultadoPar');

    const esParResultado = esPar(Number(numero));
    resultadoPar.textContent = esParResultado ? "El número es par" : "El número es impar";
}

