// See http://brunch.io for documentation.
const Waffel = require("waffel")
const filters = require("./lib/filters")
const helpers = require("./lib/helpers")

exports.config = {
	files: {
		javascripts: {
			joinTo: {
				'js/app.js': /^app/,
				'js/vendor.js': /^(vendor|node_modules|app)/
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^(vendor|app)/
			}
		}
	},
	modules: {
		autoRequire: {
			'js/app.js': ['initialize']
		}
	},
	server: {
		path: 'server.js'
	},
	conventions: {
		assets: /(assets|vendor\/assets|font)/
	},
	plugins: {
		assetsmanager: {
			minTimeSpanSeconds: 10,
			copyTo: {
				'': ['data/images']
			}
		},
		autoReload: {
			enabled: {
				js: true,
				css: true,
				assets: false
			}
		}
	},
	overrides: {
		production: {
			optimize: true,
			sourcemaps: false,
			paths: {
				"public": 'production'
			},
			onCompile: function(generatedFiles) {
				var wfl;
				wfl = new Waffel({
					domain: 'http//example.com',
					destinationFolder: 'production',
					uglyUrls: true,
					filters: filters,
					helpers: helpers
				});
				return wfl.init().then(function() {
					return wfl.generate();
				});
			}
		}
	}
};