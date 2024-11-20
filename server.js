const express = require('express')
const bodyParser = require('body-parser')

const MongoClient = require('mongodb').MongoClient 

const app = express()

app.listen(3000, () => {
    console.log('Server running on port 3000')
})


app.use(bodyParser.urlencoded({ extended: true }))


app.set('view engine', 'ejs')


// READ
// This operation starts when a web page is accessed and browser trigger a GET request, and then the backend send back the needed information

app.get('/', (req, res) => {
    res.render('index.ejs')
})


// CREATE
// This operation is only executed in browser if a POST request is made to server.

app.post('/show', (req, res) => {
    console.log(req.body)
})


const uri = "<!-- insira aqui o caminho para seu BD -->"
MongoClient.connect(uri, (err, client) => {
  // ... start the server
})