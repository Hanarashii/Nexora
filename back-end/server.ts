import express from 'express'
import { Request, Response } from 'express';
import mysql from 'mysql2'
import { json } from 'stream/consumers';
import bcrypt from 'bcrypt'

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
    database.query("SELECT *, FORMAT(price, 0) as formatted_price FROM products",(err, result) => {
        if(err) res.status(500).json({ error:err.message });
        else res.status(200).json(result);
    })
})

app.post('/cart', (req: Request, res:Response) => {
    const query = 'SELECT number, products.id, products.price, products.name, FORMAT(products.price, 0) as formatted_price, FORMAT(SUM(price) OVER(),0) as total FROM cart JOIN products on cart.product_id = products.id WHERE user_id = ?';
    const id = req.body.id;
    database.query(query, [id], (err, result) => {
        if (err) console.error(err);
        else {
            res.status(201).json(result)
        }
    })
})

app.post('/cart/remove_button', (req: Request, res: Response) => {
    const {user_id, product_id} = req.body; 
    const query = 'DELETE FROM cart WHERE user_id = ? && product_id = ?';
    const values = [user_id, product_id];
    database.query(query, values, (err, result) => {
        if(err) console.error(err);
        else res.status(200).json({message: 'Product removed!'})
    })
})

app.post('/cart/add', (req: Request, res: Response) => {
    const {user_id, product_id, quantity} = req.body;
    const checkquery = 'SELECT number FROM cart WHERE user_id = ? && product_id = ?'
    const values = [user_id, product_id]
    database.query(checkquery, values, (err, result : mysql.RowDataPacket[]) => {
        if(err) console.error(err);
        else {
            if(result.length > 0) {
                    const number = result[0].number + 1;
                    const values = [number, user_id, product_id];
                    const query = 'UPDATE cart SET number = ? WHERE user_id = ? && product_id = ?'
                    database.query (query, values, (err, result) => {
                        if (err) console.error(err)
                        else res.status(200).json({message: "Product added!"})
                    })
            }
            else {
                const query = 'INSERT INTO cart (user_id, product_id) VALUES (?, ?)'
                const values = [user_id, product_id]
                database.query (query, values, (err, result) => {
                    if(err) console.error(err);
                    else res.status(200).json({message: "Product added!"})
                })
            }
        }
    })
})

app.post('/cart/add&subtract', (req: Request, res: Response) => {
    const {user_id, product_id, number} = req.body
    const query = 'UPDATE cart SET number = ? WHERE user_id = ? && product_id = ?'
    const values = [number, user_id, product_id]
    database.query(query, values, (err,result) => {
        if (err) console.error(err)
        else res.status(200).json({message: "updated"})
    })
})

app.post('/users/register', async (req: Request, res:Response) => {
    const {username, email, role, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = ('INSERT INTO users (username, email, role, password) VALUES(?, ?, ?, ?)');
        const values = [username, email, role, hashedPassword];
        database.query(query, values,(err,result) => {
            if(err) res.status(500).json({error: err.message});
            else res.status(200).json({message:"Added Successfully"});
        })
    }
    catch (err) {
        res.status(500).json({error: (err as Error).message})
    }
})

app.post('/users/login', (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password
    const query = 'SELECT * from users WHERE username = ?';
    const values = [username];
    database.query(query, values, async (err, result: mysql.RowDataPacket[]) => {
        if (err) console.error(err);
        else if (result.length === 0) res.status(401).json({status: 'failed', message:'Wrong username or password!'})
        else {
            const user = result[0];
            console.log(user.password, password)
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if(isPasswordValid) { 
                res.status(200).json(result)
            }
            else res.status(401).json({status: 'failed', message:'Wrong username or password!'})
    }
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost${port}`)
})