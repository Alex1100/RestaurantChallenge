const express = require('express');
const path = require('path');
const menu = require('./data/menu.json');
const sections = require('./data/sections.json');
const items = require('./data/items.json');
const fs = require('fs');

const app = express();

app.get('/api/menu', (req, res) => {
  setTimeout(() => {
    res.json(menu);
  }, 300);
});

app.get('/api/sections', (req, res) => {
  setTimeout(() => {
    res.json(sections);
  }, 300);
});

app.get('/api/items', (req, res) => {
  setTimeout(() => {
    res.json(items);
  }, 800);
});

app.get('/api/images/:imageID', (req, res) => {
    const imagePath = path.join(__dirname, `../public/images/${req.params.imageID}`)
    const imageAsBase64 = fs.readFileSync(imagePath, 'base64');
    
    res.json(imageAsBase64);
});

app.listen(3001, () => {
  console.log('API server running on localhost:3001');
});
