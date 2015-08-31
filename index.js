var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser'),
	_ = require('underscore'),
	    views = path.join(process.cwd(), 'views/');
	    // var db = require('./project');


// var catchphrases = [
// 	{word: 'bat', definition: 'Used in some sporting activities'},
// 	{word: 'ice-cream', definition: 'A frozen treat enjoyed on a hot day'}
// 	]

app.use('/static', express.static('public'));
app.use('/vendor', express.static('bower_components'));

var phrases = ['Bat: Used in some sporting activities', 'Ice-Cream: A frozen treat enjoyed on a hot day'];


app.get('/', function(req, res) {
	res.sendFile(path.join( views + 'index.html'));
});


app.get('/phrases', function (req, res) {
	res.send(phrases);
});


app.listen(3000, function() {
	console.log('Go to localhost:3000/')
});
