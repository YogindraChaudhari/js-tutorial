class User{
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`USERNAME iS ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const user = new Teacher('phil', 'phil.me@gmail.com', 'Rev3rt')
// user.addCourse()
user.logMe()

const user2 = new User('Gerrard')
user2.logMe()
console.log(user === user2) //false
console.log(user instanceof Teacher) //true