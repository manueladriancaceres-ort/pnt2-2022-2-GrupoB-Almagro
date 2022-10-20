console.log('Sistema');

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.json())

//POST
//localhost:3001/api/login
app.post('/api/login', (req,res) => {
    console.log(req.body);
    if(req.body && req.body.email == "lucas@gmail.com" && req.body.password == "lucaslucas") {
        res.sendStatus(200)
    } else {
        res.sendStatus(401)
    }
})

//GET
//localhost:3001/api/ping
app.get('/api/ping', (req,res) => {
    res.send('pong')
})

app.listen(3001, () => {
    console.log("Escuchando el puerto 3001");
})