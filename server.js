'use strict';

let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/res/styles.css", express.static(__dirname));
app.use("/res/hamburgers.css", express.static(__dirname));
app.use("/dist", express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(process.env.PORT || 8080);
