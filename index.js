var express = require('express');
const bodyParser = require("body-parser");
var app = express();
const db = require('./public/quries')
const PORT = process.env.PORT || 5050
const startPage = "grid.html";
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + startPage);
})
app.post('/Users', db.createUser)
app.post('/Userslogin', db.login)
app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`); });