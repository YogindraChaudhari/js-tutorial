const user = {
    username: "Yogindra",
    price: "999",

    welcomeMessage: function() {
     console.log(`${this.username}, welcome to website`)
      console.log(this)   
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)//gives empty object

function chai(params) {
    let username = "Yogindra"
    console.log(this.username)//this keyword doesnot work under function 
    // it only works with objects
}
// chai 

const chai2 = function () {
    let username = "Yogindra"
    console.log(this.username)
}
// chai() //it will also does not work

//Arrow function

const chai3 = () => {
    let username = "Snoop"
    console.log(this)
}
chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))

//implicit return 

const addtwo = (num1, num2) => (num1 + num2)
console.log(addtwo(3, 4))

const addThree = (num1, num2) => ({username: "user"})
console.log(addThree(2, 4))