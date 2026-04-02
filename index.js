const express = require('express')
const app = express()
const pool = require('./db')


/* 
req (request) -> dane od użytkownika
res (response) -> odpowiedź z serwera 
*/


app.use(express.json())

//#region GET
app.get('/', (req, res) => {
    res.send("API works")
})

app.get('/users', async (req, res) => {
    const result = await pool.query('SELECT * FROM users')
    res.json(result.rows)
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    if(user){
        console.log(user.name)
        //res.send(`Imię to: ${user.name}`)
    }
    else{
        res.status(404).send("User undefined")
    }
})

//#endregion
//#region POST

app.post('/users', (req, res) => {
    const {name} = req.body

    if (!name) {
        return res.status(400). json({error: "Needed name of the user"})
    }

    const newUser = {
        id: users.length +1, name
    }

    users.push(newUser)
    res.status(201).json(newUser)
})


//#endregion
app.listen(3000, () => {
    console.log('http://localhost:3000')
})

