var quilometros = prompt("Digite a quantidade de quilômetros")

var rastreamento = prompt("Deseja rastreamento? (S/N)")
rastreamento = rastreamento.toUpperCase()

switch (rastreamento) {
    case "S":
        console.log("Rastreamento ativo")
        var taxa_rastreamento = 200
        break
    case "N":
        console.log("Rastreamento inativo")
        var taxa_rastreamento = 0
        break
    default:
        alert("Opção inválida")
        break
}

var taxa = 0
taxa = parseFloat(taxa)
       
var pecas = prompt("Digite a quantidade de peças")
pecas = parseInt(pecas)

var regiao = prompt("Digite a região de entrega (Sul: 1, Sudeste: 2, Centro-Oeste: 3)")
regiao = parseInt(regiao)
            

if (pecas <= 1000){
    switch (regiao) {
        case 1:
            taxa = taxa + (pecas * 1)
            console.log("Região Sul, com menos de 1000")
            console.log(pecas)
            break
        case 2:
            taxa = taxa + (pecas * 1.2)
            console.log("Região Sudeste, com menos de 1000")
            console.log(pecas)
            break
        case 3:
            taxa = taxa + (pecas * 1.3)
            console.log("Região Centro-Oeste, com menos de 1000")
            console.log(pecas)
            break
        default:
            alert("Opção inválida")
            break;
    }
} else if (pecas > 1000) {
    var pecas_acima = pecas - 1000
    pecas = pecas - pecas_acima
    switch (regiao) {
        case 1:
            taxa = taxa + (pecas * 1) + ((pecas_acima * 1.2) * 0.90)
            console.log("Região Sul, com mais de 1000")
            console.log(pecas)
            console.log(pecas_acima)
            break
        case 2:
            taxa = taxa + (pecas * 1.2) + (pecas_acima * (1.2 * 0.88))
            console.log("Região Sudeste, com mais de 1000")
            console.log(pecas)
            console.log(pecas_acima)
            break
        case 3:
            taxa = taxa + (pecas * 1.3) + ((pecas_acima * 1.3) * 0.87)
            console.log("Região Centro-Oeste, com mais de 1000")
            console.log(pecas)
            console.log(pecas_acima)
            break
        default:
            alert("Opção inválida")
            break;
    }
} else {
    alert("Opção inválida")
}

document.write("Taxa do rasteamento: " + taxa_rastreamento + "<br>")
document.write("Valor do frete pelas peças: " + taxa + "<br>")
document.write("Valor do frete por quilômetro: " + (taxa / quilometros) + "<br>")
document.write("valor do frete: " + (taxa + taxa_rastreamento) + "<br>")
console.log(taxa.toFixed(2))

// var preco_final = numero_pecas * valor_frete + taxa

// console.log(preco_final)

// if pecas > 1000: valor segue a tabela
// o valor é cobrado por cada peça, ou seja pecas * valor
// if pecas > 1000: valor segue a tabela com desconto
