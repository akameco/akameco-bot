'use strict';
var FoxTail = require('foxtail');
var Path = require('path');

var fox = new FoxTail({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

fox.load(Path.resolve(__dirname, 'plugins'));
fox.run();
