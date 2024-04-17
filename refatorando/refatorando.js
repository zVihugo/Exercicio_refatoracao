//Exercicio 1
//Victor Hugo Fávaro Moreira RA:2503581
// Refatore o seguinte trecho de código JS para torná-lo mais legível e eficiente. Além disso, aplique o princípio "Replace Temp with Query":

// function calculateTotalpreco(products) {
//     let total = 0;
//     let discount = 0.1;
//     let shippingCost = 5;

//     for (let i = 0; i < products.length; i++) {
//         total += products[i].preco * products[i].quantidade;
//     }

//     if (total > 100) {
//         total *= (1 - discount);
//     }

//     if (total < 50) {
//         total += shippingCost;
//     }

//     return total.toFixed(2);
// }
// Você deve refatorar o código acima, removendo as variáveis temporárias total, discount, e shippingCost, substituindo-as por consultas diretas. Certifique-se de manter a funcionalidade original do código.


//Usando replace temp with query


function calcularTotalProdutos(produtos){
    return produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
}
function calcularDisconto(total){
    return total > 100 ? total * 0.9 : total;
}
function calcularFrete(total){
    return total < 50 ? total + 5 : total;
}
function calcularTotalCompra(produtos){
    let total = calcularTotalProdutos(produtos);
    total = calcularDisconto(total);
    total = calcularFrete(total);
    return total.toFixed(2);
}

console.log("-------------------Exercicio 1-------------------\n")
let produtos = [{preco: 10, quantidade: 2}, {preco: 20, quantidade: 3}, {preco: 30, quantidade: 4}];
console.log("Total da compra: R$ "+calcularTotalCompra(produtos))

//Exercicio 2
// Você foi designado para revisar e refatorar um código legado que realiza cálculos de estatísticas de uma empresa. O código original é funcional, mas está difícil de entender e manter. Sua tarefa é refatorar o código, aplicando pelo menos três técnicas de refatoração para torná-lo mais legível, eficiente e fácil de dar manutenção.

// function calcularMedia(valores) {
//     let soma = 0;
//     for (let i = 0; i < valores.length; i++) {
//         soma = soma + valores[i];
//     }
//     let media = soma / valores.length;
//     return media.toFixed(2);
// }

// function calcularDesvioPadrao(valores) {
//     let media = calcularMedia(valores);
//     let somaDiferencasQuadradas = 0;
//     for (let i = 0; i < valores.length; i++) {
//         somaDiferencasQuadradas += (valores[i] - media) ** 2;
//     }
//     let desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
//     return desvioPadrao.toFixed(2);
// }

// let valores = [12, 15, 18, 20, 22];
// console.log("Média: " + calcularMedia(valores));
// console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));

// Instruções:

// Refatore o código original, aplicando pelo menos três técnicas de refatoração diferentes (Método de extração, Método em linha, Extração de variável, Divisão de variável temporária, Remoção de atribuições a parâmetros) .
// Mantenha a funcionalidade do código original.
// Você pode adicionar funções auxiliares, renomear variáveis e simplificar a lógica, se necessário.
// Comente suas alterações explicando as técnicas de refatoração que foram aplicadas e por que elas melhoram o código.


console.log("\n------------------Exercicio 2-------------------")
function calcularMedia(valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
    let media = soma / valores.length;
    return media.toFixed(2);
}

function calcularDesvioPadrao(valores) {
    let media = calcularMedia(valores);
    let somaDiferencasQuadradas = 0;
    for (let i = 0; i < valores.length; i++) {
        somaDiferencasQuadradas += (valores[i] - media) ** 2;
    }
    let desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
    return desvioPadrao.toFixed(2);
}

let valor = [20,25,30,49,57];
console.log("\nMédia do código sem refatorar: " + calcularMedia(valor));
console.log("\nDesvio Padrão do código sem refatorar: " + calcularDesvioPadrao(valor));


function calcDesvioPadrao(valores){
    let soma = 0;
    let somaDiferencasQuadradas = 0;
    const tam = valores.length;

    for(let i = 0; i < tam; i++){
        soma += valores[i];
    }

    const media = (soma / tam).toFixed(2);

    console.log("\nMédia código refatorado:" + media);

    for(let i = 0; i < tam; i++){
        somaDiferencasQuadradas += (valores[i] - media) ** 2;
    }

    const desvioPadrao = Math.sqrt(somaDiferencasQuadradas / tam).toFixed(2);


    return desvioPadrao;
}

// Utilizei o método em linha pra remover a função calcularMedia e calcularDesvioPadrao, juntando as duas em uma só, que realiza toda a operação

//Também utilize o método de divisão de variável temporária, note que o método está sendo utilizado no primeiro for e segundo for

//Utilizando também o método de extração de variável, para criar a variável media e desvioPadrao


let valores = [20,25,30,49,57];
console.log("\nDesvio Padrão do código refatorado: " + calcDesvioPadrao(valores));
