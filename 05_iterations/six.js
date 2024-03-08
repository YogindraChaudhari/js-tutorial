//map
// note: automatically returns values
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.map((num) => num + 10)
console.log(newNum)
const newNumb = myNum.map((num) => {return num + 10})
console.log(newNumb)


// const newMyNum =  []
// myNum.forEach((ele) => {
//     newMyNum.push(ele + 10)
// })
// console.log(newMyNum)


// Chaining

const newNums = myNum.map((num) => {
    return num * 10
}).map((num) => {
    return num + 1
}).filter((num) => {
    return num >= 40
})
console.log(newNums)