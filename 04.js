const dados = [
  {
    estado: "SP",
    valor: 67836.43
  },
  {
    estado: "RJ",
    valor: 36678.66
  },
  {
    estado: "MG",
    valor: 29229.88
  },
  {
    estado: "ES",
    valor: 27165.48
  },
  {
    estado: "OUTROS",
    valor: 19849.53
  },
]

const somaTotal = dados.reduce((acc, valorAtual) => {
  return (valorAtual.valor + acc)
}, 0)

const percentuais = dados.map((item) => {
  const percentual = (item.valor / somaTotal) * 100;

  return {
    estado: item.estado,
    percentualRepresentativo: percentual.toFixed(2),
  }
})

console.log(percentuais)
