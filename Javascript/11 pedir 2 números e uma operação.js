//Peça dois números e uma operação matemática (+, -, *, /). 
// Calcule e mostre o resultado da operação escolhida.
const numero = Number(prompt("Me de um número: "))
const numer = Number(prompt("me der outro número: "))
const operação = prompt("me de um operação matematica. M(+), Me(-), D(÷), Mu(x): ")

if (operação == 'M') {
    alert("sua conta deu: " + (numero + numer))
}

if (operação == 'Me') {
    alert("sua conta deu: " + (numero - numer))
}

if (operação == 'Mu') {
    alert("sua conta deu: " + (numero * numer))
}

if (operação == 'D') {
    alert("sua conta deu: " + (numero / numer))
}

else {
    alert("seu pedido deu erro")
}
