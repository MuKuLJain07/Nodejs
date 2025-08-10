const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

async function main() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);
    const result = await db.collection('users').insertMany([
    {
        "name": 'John Doe',
        "age": 30,
    },
    {
        "name": 'Jane Smith',
        "age": 25,
    }
    ]);
    // console.log('Document inserted with _id:', result.insertedId);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

main();
