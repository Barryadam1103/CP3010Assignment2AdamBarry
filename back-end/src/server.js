import express from 'express';
import fs from 'fs';
import { MongoClient } from 'mongodb';
//import { fileURLToPath } from 'url';
const app = express();
app.use(express.json());
const port = 8000


app.use(express.urlencoded({ extended: false }));

//Test comment
app.get('/', (req, res) => {
    res.send('Hello Assignment #2')
})

//To Show movies on home page.
app.get('/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db(`moviesDB`)

    const movieData = await db.collection('movies').find({}).toArray();
    console.log(movieData);
    res.json(movieData);
})


app.listen(port, () => {
    console.log(`Example of listening to port ${port}`)
})