// Array unidimensional

var abraao = true //boolean

var grimaldo = [true, 171, "gabriel", 3.14]
//              0     1       2        3
//boolean
//numerico
//string
//ponto flutuante

console.log(abraao)
console.log(grimaldo)
console.log(grimaldo[2])
console.log(grimaldo[1])

// Array bidimensional

const turma = [
    ["turma 1", "gabriel", 7 ],
    ["turma 1", "carina", 10 ],
    ["turma 1", "felipe", 8 ]
]
console.log(turma[1][1])
console.table(turma)
console.clear()

// alterar algum valor

const array1 =["maça","kiwi","pera","tomate"]
console.log(array1)
array1 [2] = "melao";
console.log(array1)
console.clear()

const turma1 = [
    ["turma 1", "gabriel", 7 ],
    ["turma 1", "carina", 10 ],
    ["turma 1", "felipe", 8 ]
]

console.log(turma1)
turma1 [1][1] = "jhonatthan"
console.log(turma1)
console.clear()
//Convertendo Array em String
const array2 =["maça","kiwi","pera","tomate"]
console.log(array2)

console.log(array2.toString())

console.clear()

var atrasado = ["matheus", "abraao","erick","jonatan"]
// join
console.log(atrasado.join("*"))
// length
console.log(atrasado.length)
// pop
let atrasado2 =atrasado.pop();
console.log(atrasado)
console.log(atrasado2)
// push
let atrasado2min = atrasado.push('Fequer')
console.log(atrasado2min)
console.log(atrasado)
console.clear()
// shift
let atrasado3min = atrasado.shift();
console.clear()
 // unshift 
let outroAtrasado = atrasado.unshift('adriely')
console.log(outroAtrasado)
console.log(atrasado)
// delete

delete atrasado [2]
console.log(atrasado)