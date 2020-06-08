const express = require('express');
const app = express();
const port = 3000;
const db = require('mysql');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const PUBLIC = path.join(__dirname, '..', 'client');
const DB = path.join(__dirname, '..', 'databse');

app.use(morgan('dev'));
app.use(bodyparser.json);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));

