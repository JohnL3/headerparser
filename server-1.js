var express = require('express'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080;
	
var headerValues = require('./headerValues');
var app = express();
	
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/:details', function(req, res) {
	console.log('User-Agent: ' + req.ips);
	var ip = req.headers['x-forwarded-for'] || req.ip;
	var result = headerValues(req.headers, ip);
		
	res.send(result);
});

app.listen(port, function(){
  console.log('app running');
});