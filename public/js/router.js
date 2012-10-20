(function(app) {

  // Defining the application router, you can attach sub routers here.
  app.Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
		console.log("Home page");
    }
  });

  return Router;

}(dotgame));
