let score = "hello"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" = 33
// "33abc" = NaN
// true = 1
// false = 0
// null = 0
// undefined = NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "Hello"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

// 1 = true, 0 = false
// " " = false
// "hello" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ************************************Operations***********************************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "Good"
let str2 = " Morning"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(1 + "2" + 2)
console.log("1" + "2" + 2)
console.log(1 + "2" + "2")