console.log("Hello World 4!!!!!\n"); 

var express = require('express');
app = express();

app.get('/', function(req, res) {
    res.send('Hello New World!\n');
});

app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
});

app.listen(8081, function() {
    console.log("Example app listening on port 8081!\n"); 
});