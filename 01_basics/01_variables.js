const accountId = 144553
let accountEmail = "Aditya@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState

// accountId = 2 //not allowed

/* Prefer not to use var because of
issue in block scope and functional scope */

accountEmail = "ahsh@gmail.com"
accountPassword = "123133"
accountCity = "Goa"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])