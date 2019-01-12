'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const yml = require('yaml');

const configurationFile = fs.readFileSync('./configuration.yml', 'utf8');
const configuration = yml.parse(configurationFile);

const port = configuration.port;
const path = configuration.path;

app.get('/get/:id', (req, res) => {
  const file = `${path}/${req.params.id}`;
  if (fs.existsSync(file)) {
    res.sendFile(file);
    console.log(`Success file ${file} returned`);
  } else {
    res.send('Not found file');
    console.log(`Not found file ${file}`);
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

const getFiles = (dir, files_) => {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (const i in files){
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()){
      getFiles(name, files_);
    } else {
      files_.push(name.replace(path, ''));
    }
  }
  return files_;
};

app.get('/all', (req, res) => { 
  res.send(getFiles(path));
});

app.listen(port, (resp) => {
  console.log(`Server success run on port ${port}`);
  console.log(`Home path ${path}`);
});