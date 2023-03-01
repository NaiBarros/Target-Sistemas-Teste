const numeroAleatorio = 5;

let numeroAnterior = 0;
let numeroAtual = 1;

while (numeroAtual <= numeroAleatorio) {
  if (numeroAtual === numeroAleatorio) {
    console.log("O número informado pertence à sequência de Fibonacci.");
    break;
  }

  const proximoNumero = numeroAnterior + numeroAtual;
  numeroAnterior = numeroAtual;
  numeroAtual = proximoNumero;
}

if (numeroAtual !== numeroAleatorio) {
  console.log("O número informado não pertence à sequência de Fibonacci.");
}