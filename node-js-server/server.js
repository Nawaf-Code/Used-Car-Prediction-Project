const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    database : 'used_car_db',
    user : 'root',
    password : ''
})

app.get('/brands', (req, res) => {
    const sql = "select * from brands";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.get('/colors', (req, res) => {
    const sql = "select * from colors";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.get('/models', (req, res) => {
    const sql = "select * from models_data";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})
app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2"]});
});


app.listen(5000, () => {console.log("Server start on port 5000")});

