module.exports = function(app) {
	var contacts = app.controllers.contacts;
	app.get('/contacts', contacts.index);
	app.get('/contact/:id', contacts.show);
	app.post('/contact', contacts.create);
	app.get('/contact/:id/editar', contacts.edit);
	app.put('/contact/:id', contacts.update);
	app.delete('/contact/:id', contacts.delete);
};