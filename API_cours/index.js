var express = require('express')
var app = express()
var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exercices'
})

app.get('/', async function(req, res) {
    try {
        const data = await con.query('SELECT * FROM employees')
        console.log(data)
        res.json(data)
    } catch (error) {
        res.send(error)
    }
})

app.post('/users', async function(req, res) {
    try {
        const data = await con.query('SELECT first_name, last_name FROM employees')
        console.log(data)
        res.json(data)
    } catch (error) {
        res.send(error)
    }
})

app.get('/users/:id', async function(req, res) {
    try {
        const data = con.query('SELECT employee_id, first_name, last_name FROM employee')
        console.log(data)
        res.json(data)
    } catch (error) {
        res.send(error)
    }
})

app.delete('/users/:id', async function(req, res) {
    try {
        const id = req.params.id
        const data = con.query(`DELETE FROM 'employees' WHERE employee_id = ${id};`)
        console.log(data)
        res.json(data)
    } catch (error) {
        res.send(error)
    }
})

app.put('/users/:id', async function(req, res) {
    try {
        const id = req.params.id
        const data = con.query('UPDATE employees')
    } catch (error) {
        
    }
})


