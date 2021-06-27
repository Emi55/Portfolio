var express = require('express')
const bodyParser = require('body-parser')
var app = express()

app.use(bodyParser()); //Now deprecated
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
