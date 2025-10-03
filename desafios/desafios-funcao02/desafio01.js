// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa,
//  a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}
let peso = 70;     // em kg
let altura = 1.75; // em metros

let resultado = calcularIMC(peso, altura);
console.log("Seu IMC é:", resultado.toFixed(2));



