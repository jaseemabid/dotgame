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
		}),
		Board : Backbone.Model.extend({
			defaults : {
				count : 3,
				board  : []
			},
			initialize : function() {
				var that = this,
					row,
					count = this.get('count');

				_(count).times(function(){
					row = [];
					_(count).times(function(){
						row.push(new dotgame.models.Box());
					});
					that.get('board').push(row);
				});
			}
		})
	};

}(dotgame));
