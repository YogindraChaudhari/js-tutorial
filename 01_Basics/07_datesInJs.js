// Dates
 let myDate = new Date()
//  console.log(myDate.toString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleString())
//  console.log(typeof myDate)

// Note: In Javascript months are start with 0
 let myCreatedDate = new Date(2023, 2, 23)
 console.log(myCreatedDate.toDateString())
 let myCreatedDate1 = new Date(2024, 2, 24, 5, 6)
 console.log(myCreatedDate1.toLocaleString())
 let myCreatedDate2 = new Date("2024-01-24")//yyyy-mm-dd
 console.log(myCreatedDate2.toLocaleString())
 let myCreatedDate3 = new Date("01-24-2024")//mm-dd-yyyy
 console.log(myCreatedDate3.toLocaleString())

 //TimeStamp: used in quizzes

 let myTimeStamp = Date.now()
 console.log(myTimeStamp)
 console.log(myCreatedDate.getTime())

//  To find out the seconds

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: 'long'
})