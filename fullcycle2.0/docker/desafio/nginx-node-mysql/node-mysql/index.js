const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('bgastaldi')`
connection.query(sql);

app.get('/', (req, res) => {
    connection.query("SELECT name FROM people", (err, result) => {
        const aNames = result.map(row => row.name)
        res.send(`<h1>Full Cycle Rocks!</h1>
            ${aNames.map(row => {
            return '<p>Nome:' + row + '</p>'
        })}
        `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})