// Crie uma função que mostre na tela a área e o perímetro de uma sala 
// retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularSala(altura, largura) {
  const area = altura * largura;
  const perimetro = 2 * (altura + largura);

  console.log("Área da sala:", area, "m²");
  console.log("Perímetro da sala:", perimetro, "m");
}
calcularSala(3, 5);

