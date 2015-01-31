exports.notFound = function(request, response, next) {
	response.status(404);
	response.render('not-found');
};

exports.serverError = function(request, response, next) {
	response.status(500);
	response.render('server-error');
};