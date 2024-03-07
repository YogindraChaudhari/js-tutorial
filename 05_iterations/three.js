// For of loop
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const str of greetings) {
    // let i = 0
    // console.log(str[i])
    // i++   //normal logic
    if(str == " "){
        // console.log("Char in greetings are _ (space)")
        continue
    }else{
        console.log(`Char in greetings are ${str}`)
    }
}

// Maps
// unique values
// Follows the order
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// map.set('IN', "India") it will not print India again
// console.log(map)

for (const [key, value] of map) {
    console.log(`${key} : ${value}`)
}

for (const key in map) {
    console.log(key)//map is not iterable in for-in loop
}
// For in Loop
//object(for in)
const myObj = {
    game1: 'COD',
    game2: 'CoC',
    game3: 'Fifa'
}

for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}`)
}

//array(for in)
const lang = ["js", "py", "java", 'cpp', 'c']
for (const key in lang) {
    console.log(key)
}

const language = ["js", "py", "java", 'cpp', 'c']
for (const ele in language) {
    console.log(`The extensions are ${language[ele]}`)
}