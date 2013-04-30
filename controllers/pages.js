function getRoute(req) {
	return req.route.path;
}

var home = function(req, res) {
	// res.render('home', {
	// 	title: 'sometitle',
	// 	message: 'somemessage'
	// });
	res.render('pages/index', {
		who: 'me',
		what: 'best'
	});
};
var login = function(req, res) {
	res.render('pages/login', {
		who: 'me',
		what: 'best'
	});
}

exports.home = home;
exports.login = login;