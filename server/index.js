const express = require("express");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI)

const FAQS = client.db('FAQS')
const title = FAQS.collection('title')
const questions = FAQS.collection('questions')

const Search = client.db('Search')
const Off = Search.collection('Off')

client.connect().then((client) => {
    console.log("Подключение установлено");
    console.log(client.options.dbName);
});

app.get('/faqs/title', async (req, res) => {
    const results = await title.find().toArray()
    res.send(results)
})

app.get('/faqs/questions', async (req, res) => {
    const result = await questions.find({type: req.query.filter}).toArray()
    res.send(result)
})

app.post('/add', async (req, res) => {
    await Off.insertOne({
        "surname": req.body.surname,
        "name": req.body.name,
        "email": req.body.email
    })
    res.status(200).send('OK')
})

app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`);
})