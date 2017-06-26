const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '695189da0c507e3ad971b9454';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => { console.log(e)});


User.findById('59517a8592b8332e98142e03').then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User By ID', user);
}).catch((e) => { console.log(e)});
