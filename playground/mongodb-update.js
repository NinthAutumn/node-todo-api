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
  db.collection("Todos").findOneAndUpdate({
    _id: new ObjectID("5c03a794b9f661f97c63e450")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);

  })

  //client.close();

});