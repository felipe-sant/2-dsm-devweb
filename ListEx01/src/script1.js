// 1

var nome = prompt("Qual é o seu nome?")
var altura = prompt("Qual é a sua altura em centimentros?")
var peso = prompt("Qual é o seu peso em kilogramas?")
var resp = ""

altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura / 100
m = peso / (altura * altura)

switch (true) {
    case m < 16:
        resp = "Baixo peso muito grave"
        break;
    case m < 16.99:
        resp = "Baixo peso grave"
        break;
    case m < 18.49:
        resp = "Baixo peso"
        break;
    case m < 24.99:
        resp = "Peso normal"
        break;
    case m < 29.99:
        resp = "Sobrepeso"
        break;
    case m < 34.99:
        resp = "Obesidade grau I"
        break;
    case m < 39.99:
        resp = "Obesidade grau II"
        break;
    default:
        resp = "Obesidade grau III"
        break;
}

document.write(nome + ", possui índice de massa corporal igual a <strong>" + m.toFixed(2) + "</strong>, sendo classificado como: <strong>" + resp + "</strong>.")