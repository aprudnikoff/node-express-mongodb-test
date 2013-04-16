var
	express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	pages = require(__dirname + '/controllers/pages');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname + '/public'));


app.get('/', pages.home);
app.get('/login', pages.login);
app.get('*', function (req, res) {
	res.send('404?');
});


app.listen(port, function () {
	console.log('Listening on port ', port);
});