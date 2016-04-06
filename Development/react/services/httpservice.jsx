var $ = require('jquery');

var httpservice = {
	get: function(url) {
		return $.ajax({
			dataType: "json",
			url: url
		});
	},

};

module.exports = httpservice;