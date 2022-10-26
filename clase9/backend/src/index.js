console.log('Sistema');

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import jsonwebtoken from 'jsonwebtoken'

const app = express()
app.use(cors())
app.use(bodyParser.json())

//POST
//localhost:3001/api/login
app.post('/api/login', (req,res) => {
    console.log(req.body);
    if(req.body && req.body.email == "lucas@gmail.com" && req.body.password == "lucaslucas") {
        const token = jsonwebtoken.sign(
            {usuario: "lucas@gmail.com", rol: 'ADM'}, 'frase secreta')
        // faltaria agregar palabra Bearer (parte del protocolo)
        res.json(token)
    } else {
        res.sendStatus(401)
    }
})

const productos = [{id: '100', nombre:'Tele'}, {id: '101', nombre: 'Silla'}]


//POST
// Agrego productos a la lista
app.post('/api/productos',(req,res) => {
    const token = req.headers['authorization'];
    jsonwebtoken.verify(token,'frase secreta',(err,payload) => {
        if(err) {
            res.sendStatus(401);
        } else {
            console.log(req.body);
            productos.push(req.body);
            res.send('Alta ok');
        }
    })
})

// falta el Delete


//GET
//localhost:3001/api/productos
app.get('/api/productos', (req, res) => {
    const token = req.headers['authorization']
    jsonwebtoken.verify(token, 'frase secreta', (err, payload) => {
        if(err) {
            res.sendStatus(401)
        } else {
            console.log(payload);
            res.json(productos)
        }
    })
 
})

//GET
//localhost:3001/api/ping
app.get('/api/ping', (req,res) => {
    res.send('pong')
})

app.listen(3001, () => {
    console.log("Escuchando el puerto 3001");
})