const express = require('express');
const cors = require('cors');
const { connection } = require('./db/db_config');

const app = express();
app.use(cors());
const port = 3000;
