(function(app) {

	// Defining the application router, you can attach sub routers here.
	app.Router = Backbone.Router.extend({
		routes: {
			"" : "index"
		},
		index: function() {

			console.log("Index");

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

		}
	});

	return app.Router;

}(dotgame));
