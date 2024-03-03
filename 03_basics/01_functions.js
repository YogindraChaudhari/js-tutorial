function sayMyName(){
    console.log("H")
    console.log("e")
    console.log("l")
    console.log("l")
    console.log("o")
}
// sayMyName //it is a reference
// sayMyName()//it is a function call

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

addTwoNumbers(11, 16)

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)//Result:  undefined

function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
    console.log("Onana")//after return keyword the upcoming arguments will not work

}

const res = addTwoNum(3, 6)
// console.log("Result: ", res)

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Cammavinga"))


function loginUserMessage2(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2())

function loginUserMessage3(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage3())
console.log(loginUserMessage3("Sam is Override and"))