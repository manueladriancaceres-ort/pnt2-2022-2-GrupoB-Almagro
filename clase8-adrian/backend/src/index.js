console.log("Sistema");

import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express() ;
app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req,res) => {
    console.log(req.body);
    if(req.body && req.body.email == "usuario@sistema.com" && req.body.password == "123456") {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
})

app.get('/api/ping', (req,res) => {
    res.send('pong');
})

app.listen(3001, () => {
    console.log('Escuchando en puerto 3001');
})