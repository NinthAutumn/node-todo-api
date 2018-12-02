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

  const db = client.db('TodoApp')
  // db.collection('Todos').find({
  //   _id: new ObjectID("5c0390aab0d3440222a0b2ed"),
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err)
  // })

  db.collection('Users').find({
    name: "Arif Iwamoto"
  }).toArray().then((count) => {
    console.log(`Todos count: ${count}`);
    console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err)
  })

});