var home = function(req, res) {
	// res.render('home', {
	// 	title: 'sometitle',
	// 	message: 'somemessage'
	// });
	res.render('index', {
		who: 'me',
		what: 'best'
	});
};
var login = function(req, res) {
	res.send('login');
}

exports.home = home;
exports.login = login;