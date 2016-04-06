var Reflux = require('reflux');

var SiteActions = Reflux.createActions([
	'loginVisible',
	'login',
	'checkValidation',
	'showLink'
]);

module.exports = SiteActions;