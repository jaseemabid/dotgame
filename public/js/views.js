(function(app) {

  // Defining the application views
  app.views = {
	  Box : Backbone.View.extend({
		  initialize : function () {
			  this.render();
		  },
		  render : function() {
			  console.log("view : ", this.model);
		  }
	  })
  };

}(dotgame));
