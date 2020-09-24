var express = require('express')
var app = express()


var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exercices'
})

app.get('/ALL', function(req, res) {
    
})
