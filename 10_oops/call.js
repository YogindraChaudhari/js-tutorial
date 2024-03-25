function SetUserName(username){
    this.username = username
    console.log('called me')
}

function createUser(username, email, password){
    SetUserName.call(this, username)
    this.email = email
    this.password = password

}

const user = new createUser('aliblie walker', 'ablie.w@gmail.com', 786)
console.log(user)