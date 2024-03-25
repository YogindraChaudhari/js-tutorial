// Object literal
const user = {
    username: "userOne",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Get from db')
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username)
// console.log(['username'])
// console.log(user.getUserDetails());
// console.log(this)



// constructor function:

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username //variable = value
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
    // Note: 'return this' is not imp. 
    // Beacause It already implicitly returns
}

// Note: when 'new' object is used, the 
// new instance of that object will be created
// constructor function get called due to new keyword
// constructor function give the packages of 
// argument written in a function
// 'this' keyword injects all the arguments


const userOne = new User("Zidane", 8, true)
const userTwo = new User("Ronaldo", 9, true)
console.log(userOne.constructor)
// Note: constructor is the reference about User
console.log(userTwo);