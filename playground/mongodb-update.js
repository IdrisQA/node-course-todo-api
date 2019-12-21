const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(`${url}`, (err, client) => {
    if (err) return console.log('Unable to connect to mongodb server');

    const db = client.db(dbName);

    console.log('Connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5dfdb4821fb9a0a6031561a5')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    // .then(result => {
    //     console.log(result);
    // })
    // .catch(error => {
    //     console.log('Unable to update todo');
    // });

    // Update Challenge
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5dfaebf9cdf40c23a86e0335')
    }, {
        $set: {
            name: 'Idris'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log('Unable to update user');
    });

    // client.close();
});
