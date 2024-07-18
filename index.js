
require('dotenv').config()
const express = require('express');
const server = express();
var port = 5000;

const data = {
	
		"color": "red",
		"value": "#f00"
}

server.get('/', (req, res) => {
    res.send(" hello my dera")
});
server.get('/gmail', (req, res) => {
    res.send('<h1> Hey hello</h1>')
});
server.get('/data', (req, res) => {
    res.json(data)
})

server.listen(process.env.PORT, () => {
    console.log(`chal ja bhai ${port}`)
})