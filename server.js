var
	express = require('express'),
	app = express(),
	engine = require('ejs-locals'),
	port = process.env.PORT || 3000,
	pages = require(__dirname + '/controllers/pages'),
	menu = app.locals.menu = require(__dirname + '/settings/menu.json');

app.set('views', __dirname + '/views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(function (req, res, next) {
	app.locals.route = req.url;
	next();
});

// app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
// app.use(app.router);

// Routes
app.get('/', pages.home);
app.get('/login', pages.login);

// 404
app.get('*', function (req, res) {
	res.send('404?', 404);
});


app.listen(port, function () {
	console.log('Listening on port ', port);
});