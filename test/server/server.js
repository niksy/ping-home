/* jshint node:true */

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');

var app = express();
var data = [];

app.use(multer());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.post('/log', function(req, res){
	data.push(req.body);
	res.send();
});
app.get('/log', function(req, res){
	res.render('index', { title: 'Log', data: data });
});

app.listen(3000);
