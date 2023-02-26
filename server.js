// Importing Express 
const express = require('express');
const app = express();

// Importing Path for URL 
const path = require('path');
const db = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const uniqid = require('uniqid'); 
