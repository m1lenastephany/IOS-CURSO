//Estrutura condicional simples

var notaMarcos = 8
var notaMinima = 7

if (notaMarcos >= notaMinima) {
    console.log("aprovado")
}

//Estrutura condicional composta 
var notaMarco = 8
var notaMinimaa = 7
if (notaMarco >= notaMinimaa) {
    console.log("aprovado")}



//impar ou par 
// se a sobra da divisão do número for
// 1 esse numero é impar
//se for
// 0 esse numero é par 

var imparPar = 10
if ( 10 % 2 == 1){
    console.log("é impar")
}else {
    console.log("é par")
}

// Validação encadenada
// primeira validação se é par
// segunda validação numero maior que 10
// o numero é par e maior que 10
// o numero é par porem é menor que 10

var imparPar2 = 10
if ( imparPar2 % 2 == 1){
    console.log("é impar")
}else {
    if(imparPar2 > 10)
    console.log("o numero é par e maior que 10")
    else
    console.log("o numero é par porem é menor que 10")
}

//oeradr ternario

var resultado = imparPar2 % 2 == 1 ? console.log("é impar") : console.log("é par")



//se é maior que 7 apresento "aprovado"
//se é menor que 7 (6,9) apresento "reprovado"
// se está entre 7 e 5 "aprovado por conselho"

if(6 > 7){
    console.log("aprovado")
}else if ( 8 < 6,9 && 8 > 5){
    console.log("aprovado por conselho")
}else {
    console.log(reprovado)
}
//switch

var notaJoao = 5
switch( notaJoao > 7){
    case true:
    console.log(aprovado)
    break;
    case false:
    console.log("reprovado")
    break;
}
