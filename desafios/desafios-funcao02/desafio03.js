// Crie uma função que converte um valor em dólar, passado como parâmetro, 
// e retorna o valor equivalente em reais. Para isso, considere a cotação do 
// dólar igual a R$4,80.

function converterDolarParaReal(valorDolar) {
  const cotacao = 4.80;
  const valorEmReais = valorDolar * cotacao;
  return valorEmReais;
}
console.log(converterDolarParaReal(10)); 
// Saída: 48  → (10 × 4.80)

