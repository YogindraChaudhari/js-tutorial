// const tinderUser = new Object() Singleton
// const tinderUser = {}  Non Singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Albie"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "Albie",
            lastname: "Fisher"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const objx = {obj1, obj2} 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4 = Object.assign({}, obj1, obj2, obj3)//{} is optional
console.log(obj4)
const obj5 = {...obj1, ...obj2, ...obj3}//{} is optional
console.log(obj5)

const users = [
    {
        id: 1,
        email: "one@email.com"
    },
    {
        id: 2,
        email: "one@email.com"
    },
    {
        id: 3,
        email: "one@email.com"
    },
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))//will give array as output
console.log(Object.values(tinderUser))//will give array as output
console.log(Object.entries(tinderUser))//will give key-value paired array
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Teacherme"
}

// course.courseInstructor //normal way
const {courseInstructor} = course //another way
const {courseInstructor: instructor} = course //destructure into another name
// console.log(courseInstructor)
console.log(instructor)