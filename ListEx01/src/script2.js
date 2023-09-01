var idade = prompt("Qual é a sua idade?")
var faixa_etaria = ""
idade = parseInt(idade)

switch (true) {
    case idade >= 0 && idade < 15:
        faixa_etaria = "Criança"
        break
    case idade >= 15 && idade < 30:
        faixa_etaria = "Jovem"
        break
    case idade >= 30 && idade < 60:
        faixa_etaria = "Adulto"
        break
    case idade >= 60:
        faixa_etaria = "Idoso"
        break
    default:
        faixa_etaria = "Idade inválida"
        break
}

var nota1 = prompt("Qual é a sua primeira nota?")
var nota2 = prompt("Qual é a sua segunda nota?")
var nota3 = prompt("Qual é a sua terceira nota?")

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

var media = (nota1 + nota2 + nota3) / 3

switch (true) {
    case media >= 9 || media == 10:
        classificacao = "A"
        break
    case media >= 8:
        classificacao = "B"
        break
    case media >= 7:
        classificacao = "C"
        break
    case media >= 6:
        classificacao = "D"
        break
    case media >= 5:
        classificacao = "E"
        break
    case media >= 0:
        classificacao = "F"
        break
    default:
        classificacao = "Nota inválida"
        break
}

document.write("O aluno possui <strong>" + idade + "</strong>, e esta classificado como: <strong>" + faixa_etaria + "</strong>. Sua nota foi de <strong>" + media.toFixed(1) + "</strong>, e esta classificado como: <strong>" + classificacao + "</strong>.")