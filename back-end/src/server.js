//This is the server
import express from 'express';
const app = express();
const port = 8000

//Test comment
app.get('/', (req, res) => {
    res.send('Hello Assignment #2')
})


app.listen(port, () => {
    console.log(`Example of listening to port ${port}`)
})