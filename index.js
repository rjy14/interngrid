var express = require('express');
const bodyParser = require("body-parser");
var app = express();
const PORT = process.env.PORT || 5050
const startPage = "grid.html";
 app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + startPage);
})
app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`); });