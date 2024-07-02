const accountId = 144550
let accountEmail = "Sumit@google.com"
var accountPassword = "214563"
accountCity = "Pune"

// accountId = 245 // NOT ALLOWED

accountEmail = "hc@hc.com"
accountPassword = "54883"
accountCity = "UP"

console.log(accountId)

/*
Prefer not to uee var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])