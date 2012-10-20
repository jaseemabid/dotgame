(function(app) {

  // Provide a global location to place configuration settings and module
  // creation.
	_.extend(app, {
		// The root path to run the application.
		root: "/"
	});

	var board = new app.collections.Board({
			size : 3
		}),
		dot = new app.models.Box(),
		point = new app.views.Box({
			model : dot
		});





	_.extend(dotgame, {
		board : board
	});

}(dotgame));
