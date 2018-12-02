const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB serer');
  }
  console.log("connected to MongoDB server");

  const db = client.db('TodoApp')
  //deleteMany
  // db.collection("Todos").deleteMany({
  //   text: "lunch"
  // }).then((result) => {
  //   console.log(result)
  // })
  //deleteOne
  // db.collection("Todos").deleteOne({
  //   text: "lunch"
  // }).then((result) => {
  //   console.log(result)
  // })

  //findOnandDelete
  db.collection("Todos").findOneAndDelete({
    completed: false
  }).then((result) => {
    console.log(result)
  })

  //client.close();

});