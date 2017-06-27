const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({}).then((result) => {
//
// });

Todo.findByOneAndRemove(_id: '5952c3fbe70c7208d8f7d131').then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5952c3fbe70c7208d8f7d131').then((todo) => {
  console.log(todo);
});
