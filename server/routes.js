'use strict';

const GET = 'GET', POST = 'POST', DELETE = 'DELETE';
const RootController = require('controllers/root');

module.exports = [

  // root
  { method: GET, path: '/', handler: RootController.index }

];
