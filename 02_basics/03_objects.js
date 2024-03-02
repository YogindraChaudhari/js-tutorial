// Objects can be declared as literals or constructors
// singleton
// Object.create
const mySym = Symbol("key1")
// object literals
const JsUser = {
    name: "username",
    "full name": "username",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "user@okay.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}
/*symbol is declared in [], otherwise it will 
    be treated as string while accessing with .operator */
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)//it will treat symbol as string
console.log(JsUser[mySym])//actual declaration while call

JsUser.email = "user@email.com"
console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "user@yahoo.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())