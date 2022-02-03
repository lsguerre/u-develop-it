const mysql = require('mysql2')

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express()

//express middleware

app.use(express.urlencoded({ extended:false}));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'da3m0nNugg3t$',
        database: 'election'
    },
    console.log('connected to the election database!')
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows)
})

//catchall
app.use((req, res) => {
    res.status(404).end()
})
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`)
})