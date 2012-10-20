(function(app) {

	// Init the app

	var root = new app.Router();
	Backbone.history.start();

	_.extend(app, {
		// The root path to run the application.
		root : root
	});

}(dotgame));
