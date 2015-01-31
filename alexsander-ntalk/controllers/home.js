module.exports = function(app) {
	var HomeController = {
		index: function(request, response) {
			response.render('home/index');
		},
		login: function(request, response) {
			console.log(request.body);
			var email = request.body.user.email,
				name = request.body.user.name;
			if (email && name) {
				var user = request.body.user;
				user['contacts'] = [];
				request.session.user = user;
				response.redirect('/contacts');
			} else {
				response.redirect('/')
			}
		},
		logout: function(request, response) {
			request.session.destroy();
			response.redirect('/');
		}
	};
	return HomeController;
};