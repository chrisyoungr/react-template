#!/usr/bin/env node
var debug = require('debug')('reacttemplate:server');
var http = require('http');
var app = require('./app');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3013');
console.log("Port is", port);
/*
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

console.log("Works");