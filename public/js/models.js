(function(app) {

	// Defining the application models
	app.models = {
		Box  : Backbone.Model.extend({
			defaults: {
				owner: 0,
				top : {},
				bottom : {},
				right : {},
				left : {}
			},
			initialize: function() {
				console.log("box init");
			}
		})

	};

}(dotgame));
