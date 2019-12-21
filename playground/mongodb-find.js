const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(`${url}`, (err, client) => {
    if (err) return console.log('Unable to connect to mongodb server');

    const db = client.db(dbName);

    console.log('Connected to mongodb server');

    // db.collection('Todos')
    //     .find({
    //         _id: new ObjectID('5df98fa7ed63e00c68a01b2c')
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     })
    //     .catch((err) => {
    //         console.log('Unable to fetch todos ', err);
    //     });

    // Count documents in a collection
    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log('Todos count: ', count);
    //     })
    //     .catch((err) => {
    //         console.log('Unable to fetch todos ', err);
    //     });

    // Fetch users from Users todo
    db.collection('Users')
        .find({name: 'Idris'})
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        })
        .catch((err) => {
            console.log(`Unable to fetch users todos
            ${err}`);
        });

    // client.close();
});
