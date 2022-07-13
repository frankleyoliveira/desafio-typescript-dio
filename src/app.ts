let button = document.getElementById('button')
let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement

function adicionarNumero(numero1: number, numero2: number) {
  return numero1 + numero2
}

button?.addEventListener('click', () => {
  console.log(adicionarNumero(+input1.value, +input2.value))
})