(function(app) {

  // Provide a global location to place configuration settings and module
  // creation.
	_.extend(app, {
		// The root path to run the application.
		root: "/"
	});

	var board = new dotgame.models.Board({
			count : 3
		});

	_.extend(dotgame, {
		board : board
	});

}(dotgame));
