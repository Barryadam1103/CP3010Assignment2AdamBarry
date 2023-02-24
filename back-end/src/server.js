import express from 'express';
//import path from 'path';
//import fs from 'fs';
//import { MongoClient } from 'mongodb';
//import { fileURLToPath } from 'url';
const app = express();
app.use(express.json());
const port = 8000


//Test comment
app.get('/', (req, res) => {
    res.send('Hello Assignment #2')
})
//February 15th 1:20:00
app.get('/movies', (req, res) => {
    const obj = [
        {
          "id": 1,
          "name":"Rush Hour 2",
          "releaseDate":"2001-08-3",
          "actors":"Jackie Chan, Chris Tucker, Roselyn Sánchez",
          "poster":"images/Rush_Hour_2_poster.png",
          "rating":4
        }
    ];    
    res.json( obj )
})

app.listen(port, () => {
    console.log(`Example of listening to port ${port}`)
})