let a = 100
const b = 200
// var c = 30

if (true) {
    let a = 10
    const b = 20
    console.log("Inner: ", a)
}
console.log(a);
console.log(b);

//global scope of node in browser and IDE is different 