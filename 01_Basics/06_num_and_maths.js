// Numbers

const score = 400
// console.log(score)
const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// Maths

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.69))
// console.log(Math.ceil(4.01))
// console.log(Math.floor(4.99))
// console.log(Math.min(4, 5, 3, 9))
// console.log(Math.max(4, 5, 3, 9))

console.log(Math.random())//it will give values in between 0 and 1
console.log(Math.random()*10)
console.log((Math.random()*10) + 1)//to give value not less than 1
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)