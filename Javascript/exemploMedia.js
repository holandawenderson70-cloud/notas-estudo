//entrada variaveis 
//Media aritimetica de 3 notas, e menor 3 horrivel
// entre 3 a 7 regular, 7 a 9 bom, acima de 9 otimo
const nota1 = prompt("Digite a primeira nota: ")
const nota2 = prompt("Digite a segunda nota: ")
const nota3 = Number(prompt("Digite a terceira nota: "))

//processamento
const soma = Number(nota1) + Number(nota2) + nota3
const media = soma / 3

//media menor que 3
//media menor que 7
//media manor que 7
if (media < 3) {
    alert("Horrivel sua media foi: " + media)
} else if (media < 7) {
    alert("da pra melhora sua media ainda é insuficiente sua media foi: " + media)
} else {
    alert("GENIO sua media foi: " + media)
}