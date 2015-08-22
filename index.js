'use strict';
var FoxTail = require('foxtail');
var Path = require('path');
var fox = new FoxTail();

fox.load(Path.resolve(__dirname, 'plugins'));
fox.run();
