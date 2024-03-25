let myName = "username     "
console.log(myName.truelength);

let myHeros = ['thor', 'hulk']

let heroPower = {
    thor: 'hammer',
    hulk: 'punch',

    getSpideyPower: function(){
        console.log(`Spidey Power is ${this.hulk}`)
    }
}

Object.prototype.userPower = function(){
    console.log('user power present in all objects');
}

Array.prototype.morePower = function(){
    console.log('more power is given')
}

// heroPower.userPower()
// myHeros.userPower()
myHeros.morePower()
// heroPower.morePower()


// Inheritance
const User = {
    name: 'Albie',
    email: 'ablie.w@email.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = 'userofuser   '
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.truelength()
'corner'.truelength()
'forward'.truelength()