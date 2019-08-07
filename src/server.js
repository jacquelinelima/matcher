const express = require('express');
const server = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(
    'mongodb+srv://developers_api:u2CLSFgnhFlaWhfR@cluster0-ejj5g.mongodb.net/matcher?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);
server.use(express.json());
server.use(routes);
server.listen(8080);