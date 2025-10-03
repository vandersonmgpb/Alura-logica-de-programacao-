// Crie uma função que calcule o valor do fatorial de um número 
// passado como parâmetro.

function calcularFatorial(numero) {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}
console.log(calcularFatorial(5)); // Saída: 120

