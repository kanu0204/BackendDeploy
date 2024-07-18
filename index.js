
require('dotenv').config()
const express = require('express');
const server = express();
var port = 5000;

server.get('/', (req, res) => {
    res.send(" hello my dera")
});
server.get('/gmail', (req, res) => {
    res.send('<h1> Hey hello</h1>')
})

server.listen(process.env.PORT, () => {
    console.log(`chal ja bhai ${port}`)
})