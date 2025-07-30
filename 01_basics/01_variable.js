const accountId = 144322
let accountEmail = "abhisek@gmail.com"
var accountPassword = "1234"
accountCity = "jajpur"
let accountCountry;
// accountId = 2 (Not allowed)
accountEmail = "abhisek32@gmail.com"
accountPassword = "4321"
accountCity = "odisha"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and
functional scope.
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountCountry])
