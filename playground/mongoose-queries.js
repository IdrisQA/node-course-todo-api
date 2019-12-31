const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const id = '5e0ada7bc43e2e328c035a6c';

const userId = '5e01822a41742b3c746030ff';

if (!ObjectID.isValid) console.log('ID is not valid');

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todos.length) return console.log('todos not found');
//     console.log('Todos ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) return console.log('todo not found');
//     console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) return console.log('id is not found');
//     console.log('Todo by id ', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user) return console.log('User id not found');
    console.log('User ', user)
}).catch((e) => console.log(e));