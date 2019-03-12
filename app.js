const express = require("express");
var app = express();


app.use(express.static(__dirname));

const data = require('./data.json');

var path = require("path");

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/info.html'))
});

app.get('/info', (req, res) =>{
    res.sendFile(path.join(__dirname + '/info.html'))
});

app.get('/pictures', (req, res) =>{
    res.sendFile(path.join(__dirname + '/pictures.html'))
});

app.get('/data', (req, res) =>{
   res.json(data);
});

app.listen(process.env.PORT || 8082);



/*const server = http.createServer(function (req, res){
 res.write("Hello, wrold!");
 res.end();
}).listen(8081);*/
