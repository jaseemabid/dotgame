(function(app) {

	// Defining the application models
	app.models = {
		Box  : Backbone.Model.extend({
			defaults : {
				owner: 0,
				top : 0,
				bottom : 0,
				right : 0,
				left : 0
			},
			initialize: function() {
			}
		})
	};
	app.collections = {
 		Board : Backbone.Collection.extend({
			model : app.models.Box,
			defaults : {
				size : 3
			},
			initialize : function() {

			}
		})
	};

}(dotgame));
