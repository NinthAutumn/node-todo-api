const {
  SHA256
} = require('crypto-js');

const jwt = require('jsonwebtoken');

const data = {
  id: 10
}


var token = jwt.sign(data, "123abc");

console.log(token)
const decoded = jwt.verify(token, '123abc')
console.log(decoded);

// const message = 'I am user number 3';
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.group(`Hash: ${hash}`)

// const data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "secret").toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

// if (resultHash === token.hash) {
//   console.log("Data was not changed")
// } else {
//   console.log("Dat was changed. Do not trust!");
// }