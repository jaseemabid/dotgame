/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		lint: {
			files: ['grunt.js', 'app.js', 'public/*.js', 'test/**/*.js']
		},
		concat: {
			css: {
				src : [ "public/css/normalize.css",
						"public/css/main.css",
						"public/css/game.css"],
				dest: "public/css/dotgame.min.css"
			}
		},
		// min: {
		//	dist: {
		//		src : [ "static/js/init.js",
		//				"static/js/game.js",
		//				"static/js/mygame.js",
		//				"static/js/app.js"],
		//		dest: 'static/js/dotgame.min.js'
		//	}
		// },
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true,
				console : true,
				require : true,
				__dirname : true
			}
		},
		less: {
			development: {
				options: {
					paths: ["public/less"],
					compress : true
				},
				files: {
					"public/css/game.css": "public/less/game.less"
				}
			}
		},
		uglify: {}
	});

	grunt.loadNpmTasks('grunt-contrib-less');

	// Default task.
	grunt.registerTask('default', 'lint less concat'); //min


};
