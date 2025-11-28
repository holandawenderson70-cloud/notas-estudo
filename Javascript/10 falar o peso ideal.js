//Peça o sexo da pessoa
//  (H para homem, M para mulher) e a altura.
// Use as fórmulas para calcular o peso ideal:
//Homens: (72.7 × altura) - 58
//Mulheres: (62.1 × altura) - 44.7
const Sexo = prompt("Fale seu sexo (H para homem ou M para Mulher): ")
const Altura = Number(prompt("Informe a sua altura: "))

const homem = 72.7 * Altura - 58
const mulher = 62.1 * Altura - 44.7

if (Sexo == 'H') {
    alert("o seu peso ideal é: ")
}
if (Sexo == 'M') {
    alert("O seu peso idea é: ")
} else {
    alert("informe se é homem ou mulher")
}