// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(`${url}`, (err, client) => {
    if (err) return console.log('Unable to connect to mongodb server');

    const db = client.db(dbName);

    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert todo ', err);

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Idris',
    //     age: 29,
    //     location: 'Ogba'
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert a user ', err);

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});