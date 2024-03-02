const name = "Yogindra"
const repocount = 3

// console.log( name +" has " +  repocount + " repos" )
console.log(`${name} has ${repocount} repositories on Github`)//string interpolation

const gameName = new String('fifa23')
console.log(gameName[5])
console.log(gameName.__proto__)// It will give object which will be empty
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('f'))

const newGameName = new String('clash-of-clans')
const newString = newGameName.substring(0, 4)
console.log(newString)

const anotherString = newGameName.slice(-4, 4)
console.log(anotherString)

const newStringOne = "   Yogindra   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://yogindra.com/yogindra%20chaudhari"
console.log(url.replace('%20', ' '))
console.log(url.includes('Yogindra'))

console.log(newGameName.split('-'))
// console.log(gameName.blink())