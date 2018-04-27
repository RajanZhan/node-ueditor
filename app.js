var express = require('express');  
var ejs = require('ejs');  
var path = require('path');  
var app = express();  
const ueditor = require("ueditor"); 
const ueLib = require("./lib/ueditor.js");
var bodyParser = require('body-parser'); 
app.use(express.static("static"))
app.use(bodyParser.urlencoded({  
    extended: true  
}));  
app.use(bodyParser.json());  
// view engine setup  
  
  
app.use(express.static(path.join(__dirname, 'static')));  
app.set('views', path.join(__dirname, 'views'));  
app.engine('.html', ejs.__express);  
app.set('view engine', 'html');  
  
app.use("/ueditor/ue", ueditor(path.join(__dirname, 'static'), ueLib));  
 
app.use('/', function (req, res) {  
    res.render('ueditor');  
});  
  
app.listen(3000, function () {  
    console.log('app listen : 3000');  
});  
  
module.exports = app; 