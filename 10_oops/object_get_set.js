const User = {
    _email: 'hi@me',
    _password: '123',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const useme = Object(User)
console.log(useme.email)