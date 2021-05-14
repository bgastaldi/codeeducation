const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'pfa1-mysql',
    user: 'root',
    password: 'root',
    database: 'app_db'
}
const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    connection.query("SELECT modulo FROM fullcycle", (err, result) => {
        const aModulos = result.map(row => row.modulo)
        res.send(`<h1>Full Cycle:</h1>
            ${aModulos.map(row => {
            return '<p>Modulo:' + row + '</p>'
        })}
        `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})