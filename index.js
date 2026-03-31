const express = require('express')
const app = express()

//#region GET
app.get('/', (req, res) => {
    res.send("API dziala")
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    if(user){
        console.log(user.name)
        res.send(`Imię to: ${user.name}`)
    }
    else{
        res.status(404).send("Nie ma takiego użytkownika")
    }
})

//#endregion

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

let users = [
    {id: 1, name: "Przemek"},
    {id: 2, name: "Kamil"}
]

