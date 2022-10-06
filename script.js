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

if(verificaSeSeisEhMaiorQueSete === true){

}

if(verificaSeSeisEhMaiorQueSete){ //se verificaSeSeisEhMaiorQueSete é true, faça o que está entre as chaves

}



const meuObjetoSimples = {
    nome: "Juninho Pernambucano",
    time: "Vasco",
    posicao: "meio-campista",
    baterFalta: function(distancia){
        console.log("não importa que a distância seja "+distancia+". Pro juninho, é gol.");
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

if(ibraEhHumano === true){
    console.log("Zlatan Ibrahimovic é um humano");
}else{
    console.log("Ibrahimovic é um Leão, e não um humano.");
}




if(6>7){
    console.log("Seis é maior que sete");
}else if(6 === 7){
    console.log("Seis é igual a sete");
}else{
    console.log("Seis é menor que sete")
}

const meuTipoUsuario = "Assinante";
function mostrarPaywall(){
    console.log("ASSINA NOSSO JORNAL PFV")
}
if(meuTipoUsuario === "Não-assinante"){
    mostrarPaywall();
}else if(meuTipoUsuario === "Assinante"){
    console.log("Materia toda aqui");
}else if(meuTipoUsuario === "admin"){
    console.log("mostrar área de edição");
}else{
    console.log("Tipo de usuário não identificado. Falar com sysadmin");
}


const isMember = true;
console.log("The fee is " + (isMember ? "$2.00" : "$10.00"));

let fee = 0;
if(isMember === true){
    fee = 2;
    console.log("The fee is "+ fee);
}else{
    fee = 10;
    console.log("The fee is "+ fee);
}





// meuArrayComplexo[0] ={
//     nome: "Marco Verratti",
//     nacionalidade: "Itália",
//     posicao: "Meio-campista"
// }