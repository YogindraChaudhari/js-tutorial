// Reduce method
// used in shopping cart

const myNums = [1, 2, 3]

// using normal function
// const myTotal = myNums.reduce(function(acc, curVal) {
//     return acc + curVal
// }, 0)

// using arrow function 
// 1st way using return keyword
const myTotal = myNums.reduce((acc, curVal) => {
    console.log(`current value of acc: ${acc}, curVal: ${curVal}`)
    return acc + curVal
}, 0)
console.log(myTotal)
// 2nd way 
const myTot = myNums.reduce((acc, curVal) => acc + curVal, 0)
console.log(myTot)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'flutter course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    },
]

const mycart = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(mycart)