'use strict';

const port = 34556;
const path = '/home/kudrya/Downloads';

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/get/:id', (req, res) => {
  const file = `${path}/${req.params.id}`;
  if (fs.existsSync(file)) {
    res.sendFile(file);
    console.log(`Success file ${req.params.id} returned`);
  } else {
    res.send('Not found file');
    console.log(`Not found file ${req.params.id}`);
  }
}); 

app.get('/delete/:id', (req, res) => {
  const file = `${path}/${req.params.id}`;
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    res.send(`File ${req.params.id} is deleted`);
    console.log(`File ${req.params.id} is deleted`);
  } else {
    res.send('Not found file');
    console.log(`Not found file ${req.params.id}`);
  }
}); 

app.get('/all', (req, res) => {
  res.send(fs.readdirSync(path));
});

app.listen(port, (resp) => {
  console.log(`Server success run on port ${port}`);
});