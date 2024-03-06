const userEmail = "user@one.ai"

if (userEmail) {
    console.log("Got user Email")
}else{
    console.log("Dont have Email")
}

//falsy values:

// false, 0, -0, BigInt 0n, null, undefined, "", NaN

// truthy values:
//"0", 'false', " ", [], {}, function(){}

const userArr = []
if(userArr.length === 0){
    console.log("Dont have Email")
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty")
}

// in browser:
// false == 0 
// false == ''
// 0 == ''
// is true

// Nullish Coalescing Operator(??): null undefined
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 120
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")