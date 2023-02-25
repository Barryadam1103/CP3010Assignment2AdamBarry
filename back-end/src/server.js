import express from 'express';
//import fs from 'fs';
import { MongoClient } from 'mongodb';
const app = express();
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

    const db = client.db('moviesDB')

    const movieData = await db.collection('movies').find({}).toArray();
    console.log(movieData);
    res.json(movieData);
})

//To show add movie form to add a new movie to the database.
app.post('/addmovie', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('moviesDB');


    const insertCommand = await db.collection('movies').insertOne( {'name':req.body.name, 
    'releaseDate':req.body.releaseDate, 'actors':req.body.actors, 'poster':req.body.poster, 'rating': parseInt(req.body.rating)});

    console.log(insertCommand);
    res.redirect('/');
})


app.listen(port, () => {
    console.log(`Example of listening to port ${port}`)
})