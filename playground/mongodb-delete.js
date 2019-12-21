const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(`${url}`, (err, client) => {
    if (err) return console.log('Unable to connect to mongodb server');

    const db = client.db(dbName);

    console.log('Connected to mongodb server');

    // deleteMany
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat Lunch'})
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log('Unable to delete todo items');
    //     });

    // deleteOne
    // db.collection('Todos')
    //     .deleteOne({ text: 'Eat Lunch' })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log('Unable to delete todo item');
    //     });

    // findOneAndDelete
    // db.collection('Todos')
    //     .findOneAndDelete({completed: false})
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log('Unable to delete todo item');
    //     });

    // Delete Challenge
    // db.collection('Users')
    //     .deleteMany({name: 'Idris'})
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log('Unable to delete users');
    //     });

    db.collection('Users')
        .findOneAndDelete({ name: 'Zainab' })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log('Unable to delete user');
        });


    // client.close();
});
