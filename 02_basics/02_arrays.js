const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", 'Flash', "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// Note: In javascript array take array as a data, where array itself is a single element
// [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][1])
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// Note: It will give all elements array in single array after specifying depth
console.log(real_another_array)

console.log(Array.isArray("Hello"))
console.log(Array.from("Hello"))
// Note: convert each letter of Hello into array elements
console.log(Array.from({name: "Hikaru"}))//It will give empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))