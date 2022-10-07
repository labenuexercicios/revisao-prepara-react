// //variáveis

// // const nome = "João";

// // let ultimaAtualizacao = "2022-10-03";
// // //codigo que verifica atualizacoes
// // var nome2 = "João"
// // function lala(){
// //  nome2
// // }

// // const a  = 1;
// // const b = 2;

// //NaN ("Not a Number") "não é um número";

// const seis = Number("João");
// //console.log(seis); //NaN
// isNaN(seis);//true, porque "João" transformado em número, é NaN

// // const isnam = isNaN(seis);
// // console.log(isnam);

// // +, -, * /
// // > < >= <= === !==

// // && || !

// const verificaSeSeisEhMaiorQueSete = 6 > 7; //false

// if(verificaSeSeisEhMaiorQueSete === true){

// }

// if(verificaSeSeisEhMaiorQueSete){ //se verificaSeSeisEhMaiorQueSete é true, faça o que está entre as chaves

// }



// const meuObjetoSimples = {
//     nome: "Juninho Pernambucano",
//     time: "Vasco",
//     posicao: "meio-campista",
//     baterFalta: function(distancia){
//         console.log("não importa que a distância seja "+distancia+". Pro juninho, é gol.");
//     }
// }

// meuObjetoSimples.time; //"Vasco"

// const meuArraySimples = [1, 2, 3, 4, 5, 12, 13, 45, 98, 4, 9];

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
]
//exibe kimpembe
console.log(meuArrayComplexo[1]);

//exibir roubada de bola
console.log(meuArrayComplexo[0].habilidades[0].nivel);

// const juntadoComTraco = meuArraySimples.join("-");
// console.log(juntadoComTraco);

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




// if(6>7){
//     console.log("Seis é maior que sete");
// }else if(6 === 7){
//     console.log("Seis é igual a sete");
// }else{
//     console.log("Seis é menor que sete")
// }

const meuTipoUsuario = "Assinante";
function mostrarPaywall() {
    console.log("ASSINA NOSSO JORNAL PFV")
}
if (meuTipoUsuario === "Não-assinante") {
    mostrarPaywall();
} else if (meuTipoUsuario === "Assinante") {
    console.log("Materias toda aqui");
} else if (meuTipoUsuario === "admin") {
    console.log("mostrar área de edição");
} else {
    console.log("Tipo de usuário não identificado. Falar com sysadmin");
}


// const isMember = true;
// console.log("The fee is " + (isMember ? "$2.00" : "$10.00"));

// let fee = 0;
// if(isMember === true){
//     fee = 2;
//     console.log("The fee is "+ fee);
// }else{
//     fee = 10;
//     console.log("The fee is "+ fee);
// }
meuArrayComplexo[0] = {
    nome: "Marco Verratti",
    nacionalidade: "Itália",
    posicao: "Meio-campista"
}
//---------------------------------------------------------------------------------
//condicionais
if (meuTipoUsuario === "Não-assinante") {
    mostrarPaywall();
} else if (meuTipoUsuario === "Assinante") {
    console.log("Materias toda aqui");
} else if (meuTipoUsuario === "admin") {
    console.log("mostrar área de edição");
} else {
    console.log("Tipo de usuário não identificado. Falar com sysadmin");
}
// if aninhado
if (ibra.isHuman === false) {
    console.log("instruções")
    if (ibra.times[2] === "Barcelona") {
        console.log("realmente, jogou em barcelona ")
    }
}


if (ibra.isHuman === false && ibra.times[2] === false) {
    //ibra.isHuman === false && ibra.times[2] === false
    //ibra.isHuman é false ? Sim, é falso, portanto é true 
    //(if true && ibra.times[2] === "Barcelona")
    //(if true && "Inter de Milão" === "Barcelon")
    //(if true && false)
}
//switch case
switch (meuTipoUsuario) {
    case "não assinante":
        mostrarPaywall();
        break;
    case "Assinante":
        console.log("materia toda aqui");
        break;
    case "admin":
        console.log("mostrar área de edição");
        break;
    default:
        console.log("Tipo de usuário não identificado. Falar com sysadmin");
        break;
}

//laços -> while e for
while (6 < 7) {// condição E, enquanto essa condição (que sempre PRECISA ser boolena for verdadeira, o conteudo vai se repetir)
    //inicialização 
    //uma condição de parada
    //algum tipo de atualização 
    // console.log("olá")
}

let resposta = prompt("voce quer ver essa post de novo ?")
//inicialização, porque estou criando a condição para o início do laço 
while (resposta !== "não") {// condição E, enquanto essa condição (que sempre PRECISA ser boolena for verdadeira, o conteudo vai se repetir)
    resposta = prompt("voce quer ver essa post de novo ?")
    //inicialização 
    //uma condição de parada
    //algum tipo de contador
    // console.log("olá")
}

if (6 > 7) {// condição E, enquanto essa condição (que sempre PRECISA ser boolena for verdadeira, o conteudo vai se repetir)
    console.log("mensagem que nunca vai aparecer")
}
if (6 < 7) {// condição E, enquanto essa condição (que sempre PRECISA ser boolena for verdadeira, o conteudo vai se repetir)
    console.log("mensagem que nunca vai aparecer")
}

//laço for sempre tem condição de parada envolvendo um contador, isto é
//um número que sobe ou desce.
//no for, a inicialização, a condição de parada e a atualizção, ficam dentro dos parenteses


//laços -> for in e for of;
for (let i = 0; i < 10; i++) {
    console.log(3 * i)
}

const meuArray = [1, 3, 5, 7, 9, 2, 4, , 6, 8];
for (let i = 0; i < meuArray.length; i++) {
    console.log(i)
}

const Verratti = meuArrayComplexo[0]
console.log(Verratti)

let frase = ""
for (let i = 0; i < Verratti.habilidades.length; i++) {
    if (i === habilidades.length - 1) {
        frase += `${Verratti.habilidades[i]}.`
    } else {
        frase += `${Verratti.habilidades[i]},`
    }
    // console.log(Verratti.habilidades[i]);
    // frase += Verratti.habilidades[i]
    // console.log(frase)
}
console.log("pós iteração final:" + frase)
//mostra todas as habilidades dentro do objeto, pq dentro do colchete tem o indice
// const objComFrase = {...Verratti, 
//     habilidades: frase
// }

//-----------------------------------------------
//laços -> for in e for of 
for (let elemento of Verratti.habilidades) {
    console.log(elemento)
}
for (let indice in Verratti.habilidades) {
    console.log(indice);
}
for (let i = 0; i < Verratti.habilidades; i++) {
    let habilidades = Verratti.habilidades[i];
    console.log(habilidades)
}

//exemplo similiar 

//o (for of) entrega os indices sem precisar percorrendo todo o obejeto

//-----------------------------------------------

//funções
const soma = 1 + 5;
const soma2 = 2 + 5
function soma(fator1, fator2) {
    console.log(fator1 + fator2)
    return fator1 + fator2/* o return serve pra retornar a resposta para dentro de uma variavel*/
}                         /*no caso retorn o resultado para "somaFuncao" */
const somaFuncao = soma(1, 5)


//funções de array
//array
//função

const arrayDeJogadores = meuArrayComplexo;
//map RETORNA um array do mesmo tamanho, com alterações no corpo 
//a função que é passada como parametro pro map(), sempre é uma função COM 3 PARAMETROS
//elementos = ao elemento do for of, index é o indice do array, array que é o array inteiro

///const meuArrayComplexo = [
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
// ]
arrayDeJogadores.map((jogador, index, array) => {
    return jogador;
})

for (jogador of arrayDeJogadores) {
    somaFuncao.jogador
}

//----------------------------------parte 2

const apenasDefensores = arrayDeJogadores.filter((jogador, index, array) => {
    let result = false;
})
console.log(apenasDefensores)

if (jogador.posicao === 'defensores') {
    result = true
}
return result;

// const apenasDefensoresAindaMaisResumido = arrayDeJogadores.filter
function funcaoDoJoao(arrayDeObj, valorString) {
    for (let i = 0; i < arrayDeObj.length; i++) {
        if (arrayDeObj[i].nome === valorString) {
            objRetornar.nome = arrayDeObj[i].nome
            objRetornar.habilidades = arrayDeObj[i].habilidades
            objRetornar.posicao = arrayDeObj[i].posicao
            objRetornar.nacionalidade = arrayDeObj[i].nacionalidade
        }
    }

    if (objRetornar === {}) {
        alert('não encontrei jogador')
    } else {
        return objRetornar
    }

}
//--------------------------------






const meuParagrafo = document.getElementById()

const meuLink = document.getElementById('link')
console.log(meuLink.innerText)//o innerText caça só os textos do elemento


const minhaLista = document.getElementById('minhaLista')
console.log(minhaLista.innerText)
const um = document.getElementById('1')
console.log(um.innerText)


// AO ASSISTIR A AULA NOVAMENTE, COLOCAR OS NOMES DE TAG CORRETAMENTE