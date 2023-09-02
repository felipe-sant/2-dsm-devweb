var codigo = prompt("Digite o código do funcionario:");
var horas = prompt("Digite a quantidade de horas trabalhadas:");
var turno = prompt("Digite o turno de trabalho (M, V ou N):");
var categoria = prompt("Digite a categoria do funcionário (F ou G):");
var salario_minimo = prompt("Digite o valor do salário mínimo:");

codigo = parseInt(codigo);
horas = parseInt(horas);
turno = turno.toUpperCase();
categoria = categoria.toUpperCase();
salario_minimo = parseFloat(salario_minimo);

switch (categoria) {
    case "G":
        var valor_hora = 0.4;
        break;
    case "F":
        switch (turno) {
            case "N":
                var valor_hora = 0.2;
                break;
            case "M" || "V":
                var valor_hora = 0.1;
                break;
            default:
                alert("Turno inválido");
                break;
        }
        break;
    default:
        alert("Categoria inválida");
        break;
}

valor_hora = parseFloat(valor_hora);

var salario_inicial = salario_minimo + (horas * valor_hora);

switch (true) {
    case (salario_inicial <= 800):
        var auxilio_alimentacao = salario_inicial * 0.25
        break;
    case (salario_inicial > 800 && salario_inicial <= 1200):
        var auxilio_alimentacao = salario_inicial * 0.2
        break;
    case (salario_inicial > 1200):
        var auxilio_alimentacao = salario_inicial * 0.15
        break;
    default:
        break;
}

document.write("Código do funcionário: " + codigo + "<br>");
document.write("Horas trabalhadas: " + horas + "<br>");
document.write("Valor da hora trabalhada: " + valor_hora + "<br>");
document.write("Salário inicial: " + salario_inicial + "<br>");
document.write("Auxilio alimentação: " + auxilio_alimentacao + "<br>");
document.write("Salário final: " + (salario_inicial + auxilio_alimentacao) + "<br>");
