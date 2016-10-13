const Waffel = require("waffel")
const filters = require("./lib/filters")
const helpers = require("./lib/helpers")

exports.startServer = function (port, path, callback) {
	const wfl = new Waffel({
		domain: "http://localhost:" + port,
		uglyUrls: true,
		filters: filters,
		helpers: helpers,
		watch: true,
		server: true,
		serverConfig: {
			port: port,
			path: path,
			indexPath: path + "/404.html"
		}
	})
	wfl.on("server:start", callback)
	return wfl.init().then(function() {
		return wfl.generate();
	});
}