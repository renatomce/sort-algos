let express = require('express');
let app = express();
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8081);
