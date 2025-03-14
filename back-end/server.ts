import express from 'express'
import { Request, Response } from 'express';
import mysql from 'mysql2'
import { json } from 'stream/consumers';

const cors = require('cors')

const app = require('express')();
const port = 3000

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Huy1234567890!',
    database: 'nexora'
})

database.connect((err) => {
    if(err) console.log(err);
    else console.log("Connecti does succesfully!")
})

app.use(cors());
app.use(express.json());

app.get('/products',(req: Request, res: Response) => {
    database.query("SELECT * FROM products",(err, result) => {
        if(err) res.status(500).json({ error:err.message });
        else res.status(200).json(result);
    })
})

app.get('/users',(req: Request, res:Response) => {
    database.query("SELECT * FROM users",(err, result) => {
        if(err) res.status(500).json({error: err.message});
        else res.status(200).json(result);
    })
})

app.post('/users', (req: Request, res:Response) => {
    const {username, email, role, password} = req.body;
    const query = ('INSERT INTO users (username, email, role, password) VALUES(?, ?, ?, ?)');
    const values = [username, email, role, password];
    database.query(query, values,(err,result) => {
        if(err) res.status(500).json({error: err.message});
        else res.status(200).json({message:"Added Successfully"});
    })
})

app.listen(port, () => {
    console.log(`Server is running at https://localhost${port}`)
})