const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consume');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task two')
        resolve()
    }, 1000)
}).then(() => {
    console.log('Promise consumed again')
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve({username: "user", email: "user@yahoo.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
    console.log(user.username)
    console.log(user.email)
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "user", password: "1234"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('The promise is either resolved or rejected')
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({language: "javascript", extension: ".js"})
        }else{
            reject('ERROR: JS runtime error')
        }
    }, 1000)
})

// async function consumedPromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

async function consumedPromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error)
    }
}

consumedPromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ',error)
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})