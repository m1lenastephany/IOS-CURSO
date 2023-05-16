//exercicio 2
var ArrayUni = ['HTML', 1993, 'CSS', 1996, 'Bootstrap', 2011, 'JS', 1995, 'React', 2013,'Java', 1995]
console.log(ArrayUni)
console.log(ArrayUni.length)
console.log(ArrayUni[6]);
console.log(ArrayUni.toString())
console.log(ArrayUni)
var ArrayUni2 = ArrayUni.join("/")
console.log(ArrayUni2)
console.log(ArrayUni)
var ArrayUni3 = ArrayUni.unshift('IOS')
console.log(ArrayUni3)
console.log(ArrayUni)


//exercicio 3
var ArrayBi = [['HTML', 1993, 'CSS', 1996],
          ['Bootstrap', 2011, 'JS', 1995],
          ['React', 2013, 'Java', 1995]]

console.log(ArrayBi);
console.log(ArrayBi.length)
console.log(ArrayBi[2][1]);
ArrayBi [1][2] = "javaScript"
console.log(ArrayBi);
delete ArrayBi [2][2]
let ArrayBi2 = ArrayBi.push('pipoca')
console.log(ArrayBi2)
console.log(ArrayBi)