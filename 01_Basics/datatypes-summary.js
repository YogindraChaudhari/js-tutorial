// Primitive
// Types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsideTemp = null
let userEmail 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) //symbols are unique, so never be the same

const bigNumber = 4789347384793778789n

// Reference (Non-Premitive)

// Types: Arrays, Objects, Functions

const heros = ["Hulk", "Thor", "Loki"]
let myObj = {
    name: "Myon",
    age: 16
}

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof bigNumber)

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ********************************************************************************************************

// Memory in javascript

// Stack(primitive) and Heap(non-premitive)

// from stack = copy, heap = reference/changes will be reflected in original value

let myname = "name1"
let anothername = myname
anothername = "name2"
console.log(myname);
console.log(anothername)


let user1 = {
    email: "user@gmail.com",
    upi: "user@ktk"
}

let user2 = user1
user2.email = "user@yahoo.com"

console.log(user1);
console.log(user2);