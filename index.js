const express = require('express')
const app = express()

//#region GET
app.get('/', (req, res) => {
    res.send("API dziala")
})

app.get('/users', (req, res) => {
    res.json(users)
})

//#endregion

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

let users = [
    {id: 1, name: "Przemek"},
    {id: 2, name: "Kamil"}
]

