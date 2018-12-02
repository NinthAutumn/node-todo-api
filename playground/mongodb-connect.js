// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {
//   name: "Arif",
//   age: 19
// };

// var {
//   name
// } = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB serer');
  }
  console.log("connected to MongoDB server");

  // const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'done todo',
  //   completed: true
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("unable to insert todo", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Kiuuk John',
  //   age: 40,
  //   location: "Korean"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("unable to insert todo", err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });



  client.close();
});