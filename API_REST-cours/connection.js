var mysql = require('mysql')

console.log('Connection...')

var conn = mysql.createConnection({
    database: 'exercices',
    host: 'localhost',
    user: 'root',
    password: 'root'
})

conn.connect(function(err) {
    if (err) throw err;
    console.log('Connected !')
})