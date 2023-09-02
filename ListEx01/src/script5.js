n1 = prompt("Numero 1: ");
soma = prompt("Soma ou Subtração: ");
n2 = prompt("Numero 2: ");

console.log(n1);
console.log(soma);
console.log(n2);

n1 = parseFloat(n1);
soma = soma.toUpperCase();
n2 = parseFloat(n2);

console.log(n1);
console.log(soma);
console.log(n2);

function calculo(num1, num2, operacao) {
    switch (operacao) {
        case "SOMA":
            return num1 + num2;
        case "SUBTRAÇÃO":
            return num1 - num2;
        default:
            return "Operação inválida";
    }
}

document.write("Resultado: " + calculo(n1, n2, soma));
