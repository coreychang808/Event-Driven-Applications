'use strict';

require('./logger');
require('./readFile');
require('./writeFile');
const events = require('./events');

const fs = require('fs');

const alterFile = (file) => {
  events.emit('fileRead', )
};

let file = process.argv.slice(2).shift();
alterFile(file);
