var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

import appHistory from './services/appHistory'

var BasePage = require('./pages/BasePage.jsx');
var HomePage = require('./pages/HomePage.jsx');
var GuildPage = require('./pages/GuildPage.jsx');
var ShowPage = require('./pages/ShowPage.jsx');

var Routes = (
	<Router history={appHistory}>
		<Route path="/" component={BasePage} >
			<IndexRoute component={HomePage} />
			<Route path="/:guildname" component={GuildPage} />
			<Route path="/:guildname/:showname" component={ShowPage} />
			<Route path="/:guildname/:showname/:episodenum" component={ShowPage} />
		</Route>
	</Router>
);

module.exports = Routes;