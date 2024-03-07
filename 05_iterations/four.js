// for each loop
const coding = ['js', 'ruby', 'cpp', 'c', 'py']
coding.forEach( function (item) {
    console.log(`Extensions are ${item}`)
} )

coding.forEach(function (val) {
    console.log(val)
} )

coding.forEach((e) => {
    console.log(e)
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach(function(item, index, array){
    console.log(item, index, array)
})

// most important in Database

const myCoding = [
    {
    langName : "javascript",
    langExt: "js"
    },
    {
    langName : "c++",
    langExt: "cpp"
    },
    {
    langName : "python",
    langExt: "py"
    },

]

myCoding.forEach((item) => {
    // console.log(item.langName)
    console.log(`Extension of ${item.langName} is .${item.langExt}`)
})