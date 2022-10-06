//variáveis

// const nome = "João";

// let ultimaAtualizacao = "2022-10-03";
// //codigo que verifica atualizacoes
// var nome2 = "João"
// function lala(){
//  nome2
// }

// const a  = 1;
// const b = 2;

//NaN ("Not a Number") "não é um número";

const seis = Number("João");
//console.log(seis); //NaN
isNaN(seis);//true, porque "João" transformado em número, é NaN

// const isnam = isNaN(seis);
// console.log(isnam);

// +, -, * /
// > < >= <= === !==

// && || !

const verificaSeSeisEhMaiorQueSete = 6 > 7; //false

if (verificaSeSeisEhMaiorQueSete === true) {

}

if (verificaSeSeisEhMaiorQueSete) { //se verificaSeSeisEhMaiorQueSete é true, faça o que está entre as chaves

}



const meuObjetoSimples = {
    nome: "Juninho Pernambucano",
    time: "Vasco",
    posicao: "meio-campista",
    baterFalta: function (distancia) {
        console.log("não importa que a distância seja " + distancia + ". Pro juninho, é gol.");
    }
}

meuObjetoSimples.time; //"Vasco"

const meuArraySimples = [1, 2, 3, 4, 5, 12, 13, 45, 98, 4, 9];

const meuArrayComplexo = [
    {
        nome: "Marco Verratti",
        nacionalidade: "Itália",
        posicao: "Meio-campista",
        habilidades: ["passe curto", "visão de jogo", "roubada de bola"]
    },
    {
        nome: "Presnel Kimpembe",
        nacionalidade: "França",
        posicao: "Defensor",
        habilidades: ["velocidade", "força física", "leitura defensiva"]
    },
    {
        nome: "Sergio Ramos",
        nacionalidade: "Espanha",
        posicao: "Defensor",
        habilidades: ["muito bonito"]
    }
];
//exibe kimpembe
console.log(meuArrayComplexo[1]);

//exibir roubada de bola
console.log(meuArrayComplexo[0].habilidades[0].nivel);

const juntadoComTraco = meuArraySimples.join("-");
console.log(juntadoComTraco);

const ibra = {
    nome: "Zlatan Ibrahimovic",
    nacionalidade: "Suécia",
    times: ["Malmo", "Ajax", "Inter de Milao", "Juventus", "Milan", "PSG"],
    isHuman: false
}
//tentativa 1

const ibraEhHumano = ibra.isHuman === true; //a const ibraEhHumano verificar se o valor da propriedade isHuman do objeto ibra, vale true;
//ibraEhHumano = false;

if (ibraEhHumano === true) {
    console.log("Zlatan Ibrahimovic é um humano");
} else {
    console.log("Ibrahimovic é um Leão, e não um humano.");
}




if (6 > 7) {
    console.log("Seis é maior que sete");
} else if (6 === 7) {
    console.log("Seis é igual a sete");
} else {
    console.log("Seis é menor que sete")
}

const meuTipoUsuario = "Assinante";

function mostrarPaywall() {
    console.log("ASSINA NOSSO JORNAL PFV")
}





const isMember = true;
console.log("The fee is " + (isMember ? "$2.00" : "$10.00"));

let fee = 0;
if (isMember === true) {
    fee = 2;
    console.log("The fee is " + fee);
} else {
    fee = 10;
    console.log("The fee is " + fee);
}





// meuArrayComplexo[0] ={
//     nome: "Marco Verratti",
//     nacionalidade: "Itália",
//     posicao: "Meio-campista"
// }


//condicionais
if (meuTipoUsuario === "Não-assinante") {
    mostrarPaywall();
} else if (meuTipoUsuario === "Assinante") {
    console.log("Materia toda aqui");
} else if (meuTipoUsuario === "admin") {
    console.log("mostrar área de edição");
} else {
    console.log("Tipo de usuário não identificado. Falar com sysadmin");
}

if (ibra.isHuman === false) { //ou é true ou é false
    console.log("instruções");

    if (ibra.times[2] === "Barcelona") {//ou é true, ou é false
        console.log("Realmente, jogou no Barcelona");
    }

}

if (ibra.isHuman === false && ibra.times[2] === "Barcelona") {
    //(if ibra.isHuman === false && ibra.times[2] === "Barcelona")
    //ibra.isHuman é falso? Sim, é falso. portanto, temos true
    //(if true && ibra.times[2] === "Barcelona")
    //(if true && "Inter de Milao" === "Barcelona")
    //(if true && false)
}


//switch(parametro) cada um dos casos

switch (meuTipoUsuario) {
    case "Não-assinante":
        mostrarPaywall();
        break;
    case "Assinante":
        console.log("Materia toda aqui");
        break;
    case "admin":
        console.log("mostrar área de edição");
        break;
    default:
        console.log("Tipo de usuário não identificado. Falar com sysadmin");
        break;
}


//laços -> while e for
while (6 > 7) {//condicao. E, enquanto essa condição (que sempre PRECISA ser booleana for verdadeira, o conteúdo vai se repetir)
    //uma inicialização
    //uma condição de parada
    //algum tipo de atualização 
}

//let resposta = prompt("Você quer ver este prompt de novo?");
//inicialização, porque estou criando a condição para o inicio do laço.

// while(resposta !== "não"){//condicao. E, enquanto essa condição (que sempre PRECISA ser booleana for verdadeira, o conteúdo vai se repetir)
//     //uma inicialização
//     //uma condição de parada
//     //algum tipo de atualização 
//     resposta = prompt("Você quer ver este prompt de novo?");
//  }

if (6 > 7) { //condicao. E, enquanto essa condição (que sempre PRECISA ser booleana for verdadeira, o conteúdo vai se repetir)
    console.log("mensagem que nunca vai aparecer")
}
if (6 < 7) { //condicao. E, enquanto essa condição (que sempre PRECISA ser booleana for verdadeira, o conteúdo vai se repetir)
    console.log("mensagem que sempre vai aparecer")
}

//laço for sempre tem condição de parada envolvendo um contador, isto é, um numero, que sobe ou desce.
//no for, a inicialização, a condição de parada e a atualização, ficam todos dentro dos parenteses
// for(let i = 1; i < 10; i++){//i++ é a mesma coisa de escrever i = i+1; i+=2 é a mesma coisa de escrever i = i+2 
//     console.log(3*i);
// } 

const meuArray = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];//ultimo indice do array é 9. O length é 10.
for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i]);//0
}

const verratti = meuArrayComplexo[0];
console.log(verratti);

// {
//     nome: "Marco Verratti",
//     nacionalidade: "Itália",
//     posicao: "Meio-campista",
//     habilidades: ["passe curto", "visão de jogo", "roubada de bola"]
// }
let frase = "";
for (let i = 0; i < meuArrayComplexo[0].habilidades.length; i++) {

    if (i === meuArrayComplexo[0].habilidades.length - 1) {
        frase += `${meuArrayComplexo[0].habilidades[i]}.`;
    } else {
        frase += `${meuArrayComplexo[0].habilidades[i]}, `;
    }

    console.log(frase);//passe curtovisão de jogoroubada de bola
}

//console.log("pós iteração final: "+frase);
const objComFrase = {
    ...verratti,
    habilidades: frase
};

console.log(objComFrase);
// laços -> for in e for of
for (let elemento of verratti.habilidades) {
    console.log(elemento);
}

for (let indice in verratti.habilidades) {
    console.log(verratti.habilidades[indice]);
}

for (let chave in verratti) {
    console.log(chave);
}

for (let i = 0; i < verratti.habilidades; i++) {
    let habilidade = verratti.habilidades[i];
    console.log(habilidade);
}

//funções
const soma = 1 + 5;
const soma2 = 2 + 5;

function somaDoisNumeros(fator1, fator2) {
    console.log(fator1 + fator2);
    const resultadoDaSoma = fator1 + fator2;
    return resultadoDaSoma;
}

const somaQueUsaFuncao = somaDoisNumeros(1, 5);
console.log(somaQueUsaFuncao); //imprimir 6





//funções de array
//array
//função

const arrayDeJogadores = meuArrayComplexo;

// const meuArrayComplexo = [
//     {
//        nome: "Marco Verratti",
//        nacionalidade: "Itália",
//        posicao: "Meio-campista",
//        habilidades: ["passe curto", "visão de jogo", "roubada de bola"]
//    },
//    {
//        nome: "Presnel Kimpembe",
//        nacionalidade: "França",
//        posicao: "Defensor",
//        habilidades: ["velocidade", "força física", "leitura defensiva"]
//    },
//    {
//        nome: "Sergio Ramos",
//        nacionalidade: "Espanha",
//        posicao: "Defensor",
//        habilidades: ["muito bonito"]
//    }
// ];

//map RETORNA um array do mesmo tamanho, com alterações no corpo.
//a funcão que é passada como parametro pro map, sempre é uma função com 3 PARAMETROS
//elemento = ao elemento do for of, index é o indice do array, array que é o array inteiro.
const jogadoresMapeados = arrayDeJogadores.map((jogador, index, array) => {
    return `O jogador ${jogador.nome} é nascido na ${jogador.nacionalidade} e sua posição é ${jogador.posicao}`;

});

function transformaEmString(jogador) {
    return `O jogador ${jogador.nome} é nascido na ${jogador.nacionalidade} e sua posição é ${jogador.posicao}`;
}

for (jogador of arrayDeJogadores) {
    const arrayDeJogadoresTransformados = [];
    const jogadorTranformado = transformaEmString(jogador);
    arrayDeJogadoresTransformados.push(jogadorTranformado);
}

console.log(jogadoresMapeados);