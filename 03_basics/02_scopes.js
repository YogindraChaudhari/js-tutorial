let a = 100
const b = 200
// var c = 30

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a)
}
// console.log(a);
// console.log(b);

//global scope of node in browser and IDE is different 


//Nested Scope:

function one(){
    const username = "Yogindra"
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()

if (true) {
    const username = "Yogindra"
    if (username === "Yogindra") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// +++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++
// Declaration of function: 1
function addOne(num){
    return num + 1
}
addOne(5)

// Declaration of function: 2
const addTwo = function(num){
    return num + 2
}
addTwo(5)