class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){//stoping it from printing using 'static'
        return `123`
    }
}

const user = new User('Sergio')
// console.log(user.logMe())
// console.log(user.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teachMe = new Teacher('Ortetta', 'alwayssecond.com')
teachMe.logMe()
console.log(teachMe.createId())