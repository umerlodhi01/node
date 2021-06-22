const express = require('express')
const app = express()
const port = process.env.port || 3001

app.get('/', (req, res) => res.send('Umer Lodhi'))
app.listen(port, () => console.log(`Example app listening on port port! usman`))