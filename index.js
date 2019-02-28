#!/usr/bin/env node
var app = require('./app');
var debug = require('debug')('react-template:server');
var http = require('http');
/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3013');

console.log("Works");