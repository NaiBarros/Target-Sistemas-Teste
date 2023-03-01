const dados = require("./dados.json")

let menorValor = 0
let maiorValor = 0
let diasFaturamentoAlto = 0
let mediaMensal = 0

const valoresOrdenados = dados.sort((a, b) => a.valor - b.valor).filter(valorAtual => valorAtual.valor !== 0)

menorValor = valoresOrdenados[0].valor
maiorValor = valoresOrdenados[valoresOrdenados.length - 1].valor

const somaTotal = dados.reduce((acc, valorAtual) => {
  return valorAtual.valor + acc
}, 0)

mediaMensal = somaTotal / valoresOrdenados.length

valoresOrdenados.forEach((valorAtual) => {
  if (valorAtual.valor > mediaMensal) {
    diasFaturamentoAlto = diasFaturamentoAlto + 1
  }
})

console.log(diasFaturamentoAlto)