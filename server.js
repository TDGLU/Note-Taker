// Importing Express 
const express = require('express');
const app = express();

// Importing Path for URL 
const path = require('path');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const uniqid = require('uniqid'); 

// Middleware 
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Get method when the url is to the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Get method when the url is to /notes 
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})

// Get method when the url is to api and notes
app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {

      // change Data into an Obj 
      const objData = JSON.parse(data)
      res.json(objData)
    }
  })
})