// Object.getOwnPropertyDescriptor(Math)
// console.log(Math.PI)
// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter)

const GOAT = {
    name: 'Leonel Messi',
    Ballon_DOR: 8, 
    isPlaying: true,

    bookTicket: function(){
        console.log('GOATED MIAMI')
    }
}
console.log(Object.getOwnPropertyDescriptor(GOAT, 'name'))

// Object.defineProperty(GOAT, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(GOAT, 'name'))

for (let [key, value] of Object.entries(GOAT)) {
    if(typeof value !== 'function')
    console.log(`key: ${key}, value: ${value}`)
}
