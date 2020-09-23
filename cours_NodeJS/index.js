const express = require('express')
const Axios = require('axios')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/users', async function (req, res) {
    try {
        const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        res.json(data)
    } catch (error) {
        res.send(error)
    }
})

app.get('/users/:id', async function (req, res) {
    try {
        const id = req.params.id
        const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users' + id)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.post('/users', async function (req, res) {
    try {
        const { data } = await Axios.post('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.put('/users/:id', async function (req, res) {
    try {
        const id = req.params.id
        const { data } = await Axios.post('https://jsonplaceholder.typicode.com/users' + id)
        console.log(data)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.delete('/users/:id', function (req, res) {
    try {
        const id = req.params.id
        const { data } = await Axios.delete('https://jsonplaceholder.typicode.com/users' + id)
        console.log(data)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.get('/users/:id/posts', async function (req, res) {
    try {
        const id = req.params.id
        const posts = req.params.id.posts
        const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users' + id + '/' + posts)
        console.log(data)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.get('/users/:id/albums', async function (req, res) {
    try {
        const id = req.params.id
        const albums = req.params.id.albums
        const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users' + id + '/' + albums)
        console.log(data)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})






app.listen(1717)