let express = require('express')
let app = express()
let path = require('path')

app.use(express.static(path.join(__dirname)))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
})
