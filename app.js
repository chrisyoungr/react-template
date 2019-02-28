const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'development';
const app = express();