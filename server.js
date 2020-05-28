var express = require("express");
var api = require("./routes/api")
var html = require("./routes/html")
var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use("/api",api);
app.use("/",html);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});