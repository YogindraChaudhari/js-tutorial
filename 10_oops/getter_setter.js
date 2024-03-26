class User{
    constructor(email, password){
        this.email = email   
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

    
const user1 = new User('me.user.com', 'geuaeAe4')
console.log(user1.password)
console.log(user1.email)