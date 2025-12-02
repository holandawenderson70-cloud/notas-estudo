//Peça o sexo da pessoa
//  (H para homem, M para mulher) e a altura.
// Use as fórmulas para calcular o peso ideal:
//Homens: (72.7 × altura) - 58
//Mulheres: (62.1 × altura) - 44.7
const Sexo = prompt("Fale seu sexo (H para homem ou M para Mulher): ")
const Altura = Number(prompt("Informe a sua altura: "))

const homem = 72.7 * Altura - 58;
const mulher = 62.1 * Altura - 44.7;

if (Sexo.toUpperCase() === 'H') {
    alert("O seu peso ideal é: " + homem.toFixed(2) + " kg");
}
else if (Sexo.toUpperCase() === 'M') {
    alert("O seu peso ideal é: " + mulher.toFixed(2) + " kg");
}
else {
    alert("Informe apenas H para homem ou M para mulher!");
}
//to.Fixed - Serve para deixa mais bonito as casa decimais no caso
//  não deixa numeros quebrados

// ToUpperCase() === 'h' - transforma tudo que esta no "" em maiusculo 