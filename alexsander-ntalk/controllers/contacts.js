module.exports = function(app) {
	var ContactsController = {
		index: function(request, response) {
			var user = request.session.user
			  , params = { user: user };
			response.render('contacts/index', params);
		},
	};
	return ContactsController;
};