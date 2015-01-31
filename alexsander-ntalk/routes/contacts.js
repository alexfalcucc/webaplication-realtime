module.exports = function(app) {
	var authtentication = require('./../middlewares/authentication'),
		contacts = app.controllers.contacts;
	app.get('/contacts', authtentication, contacts.index);
	app.get('/contact/:id', authtentication, contacts.show);
	app.post('/contact', authtentication, contacts.create);
	app.get('/contact/:id/edit', authtentication, contacts.edit);
	app.put('/contact/:id', authtentication, contacts.update);
	app.delete('/contact/:id', authtentication, contacts.destroy);
};