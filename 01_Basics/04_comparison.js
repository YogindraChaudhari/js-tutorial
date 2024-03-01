// Before comparing two values, first of all check the datatype of them.
// As js automatically converts the value into number
console.log("2" > 1)
console.log(null > 0)
console.log(0 > null)
console.log(undefined > null)
console.log(null > undefined)
console.log(undefined == null)
console.log(0 == null)
console.log(0 == undefined)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // true
// Reason: an equality check == and comparisons <> >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false

console.log("2" === 2)