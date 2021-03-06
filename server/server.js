var express = require('express');
var bodyParser = require('body-parser');
const {
  MongoDB
} = require('mongodb');

const _ = require('lodash');
var {
  authenticate
} = require('./middleware/authenticate');
var {
  mongoose
} = require('./db/mongoose');

var {
  Todo
} = require('./models/todo');
var {
  User
} = require('./models/user');


var app = express();


app.use(bodyParser.json());
const port = process.env.PORT || 5000;


app.post('/todos', (req, res) => {
  todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});



app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {
    $set: body
  }, {
    new: true
  }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({
      todo
    })
  }).catch((e) => {
    res.status(400).send()
  })
});


app.post('/users', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  const user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.post('users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  // res.send(body);
})

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
})

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});