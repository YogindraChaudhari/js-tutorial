const accountId = 144553
let accountEmail = "myemail@outlook.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState

console.table([accountId, accountEmail, accountPassword, accountCity])

/*Prefer not to use var because of issue block scope and functional scope*/

// accountId = 2
accountEmail = "me@gmail.com"
accountPassword = "32325"
accountCity = "Pune"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])