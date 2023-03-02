import express from 'express';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../posters')))
app.use(express.static(path.join(__dirname, '../build')));

const upload = multer({ dest: 'posters/'})


app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});

//Test comment
app.get('/', (req, res) => {
    res.send('Hello Assignment #2')
})

//To Show movies on home page.
app.get('/api/movies', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('moviesDB')

    const movieData = await db.collection('movies').find({}).toArray();
    console.log(movieData);
    res.json(movieData);
})

//To show add movie form to add a new movie to the database.
app.post('/api/addmovie', upload.single('movie_poster'), async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('moviesDB');


    const insertCommand = await db.collection('movies').insertOne( {'name':req.body.name, 
    'releaseDate':req.body.date, 'actors':req.body.actors, 'poster':req.file.filename, 'rating': req.body.rating});

    console.log(insertCommand);
    res.redirect('/');
})

//Remove button to remove movie from database.
app.post('/api/removeMovie', async (req, res) => {
    const title = req.body.name;
    
    //Connect to Database.
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('moviesDB');

    const result = await db.collection('movies').deleteOne({name: req.body.name});

    //Get status when we go into the console we will get an ok message!
    res.sendStatus(200);

})


app.listen(port, () => {
    console.log(`Example of listening to port ${port}`)
})