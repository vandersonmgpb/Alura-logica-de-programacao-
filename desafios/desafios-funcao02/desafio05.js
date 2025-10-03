// Crie uma função que mostre na tela a área e o perímetro de uma sala 
// circular, utilizando seu raio que será fornecido como parâmetro. 
// Considere Pi = 3,14.

function calcularSalaCircular(raio) {
  const pi = 3.14;
  const area = pi * raio * raio;
  const perimetro = 2 * pi * raio;

  console.log("Área da sala circular:", area, "m²");
  console.log("Perímetro da sala circular:", perimetro, "m");
}
calcularSalaCircular(4);

