function multiplyBy5(num)  {
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
}

const User1 = new createUser("User1", 2500)
const User2 = new createUser("User2", 4500)

User1.printMe()
User2.printMe()