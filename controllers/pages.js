function getRoute(req) {
	return req.route.path;
}

var home = function(req, res) {
	// res.render('home', {
	// 	title: 'sometitle',
	// 	message: 'somemessage'
	// });
	res.render('index', {
		who: 'me',
		what: 'best',
		global: {
			route: getRoute(req)
		}
	});
};
var login = function(req, res) {
	res.send('login');
}

exports.home = home;
exports.login = login;