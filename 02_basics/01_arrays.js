// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["Hulk", "Thor", "Loki"]
const myArr = new Array(1, 2, 3, 4, 5)
// console.log(myArr)

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(9) //It entered the element at 0th position
// myArr.shift()    //It remove the element at 0th position
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr)

const newArr = myArr.join()//converts the array into string
// console.log(newArr)
// console.log(typeof newArr)

//Slice, splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)
const myn2 = myArr.splice(1, 3)//It will manipulate original array
console.log("C ",myArr)
console.log(myn2)

