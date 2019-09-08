'use strict';

let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("styles.css", express.static(__dirname));
app.use("/src", express.static(__dirname + '/src'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
})

app.listen(process.env.PORT || 8080);
