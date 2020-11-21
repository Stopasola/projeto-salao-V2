const express = require('express');
const routes = require('./routes') // usa o ./ pq routes é um arquivo
//const cors = require('cors')
const  {errors} = require('celebrate')

const app = express();

//app.use(cors()); 
app.use(express.json()) // Set json as default request
app.use(routes)
app.use(errors());

module.exports = app;
    