let botaoAtualizar = document.getElementById('atualizar-saldo')!
let botaoLimpar = document.getElementById('limpar-saldo')!
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo')!
let saldo = 0

limparSaldo()

function somarAoSaldo(soma: number) {
  saldo += soma
  campoSaldo.innerHTML = saldo.toString()
}

function limparSaldo() {
  saldo = 0
  campoSaldo.innerHTML = '0'
}

botaoAtualizar.addEventListener('click', function () {
  somarAoSaldo(+soma.value)
  soma.value = ''
})

botaoLimpar.addEventListener('click', function () {
  limparSaldo()
})
