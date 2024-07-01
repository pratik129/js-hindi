const accounttId = 112222
var accountEmail = "test@gmail.com"
let accountPassword = "Password"
accountCity = "jaipur"
let accountState;

// accounttId = 2 // not allwed for contstant
accountEmail = "test2@gmail.com"
accountPassword = "Password12"
accountCity = "Mumbai"

/*  
Prefer not to use var, because of issue of block and function scope
*/

console.log(accounttId)
console.table([accounttId, accountEmail, accountPassword, accountCity, accountState])