var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");



var app = express();



var PORT = process.env.PORT || 8081;



app.use(express.urlencoded({extended: true}));
app.use(express.json());



require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
console.log("test");


app.listen(PORT, function() {
    console.log("listening on Port: " + PORT);
});