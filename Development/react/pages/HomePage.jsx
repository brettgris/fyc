var React = require('react');

var Reflux = require('reflux');
var Actions = require('../models/Actions.jsx');
var Store = require('../models/Store.jsx');

var DataItem = require('../components/data/DataItem.jsx');
var Guilds = require('../components/guilds/Guilds.jsx');

var Menu = require('../components/menu/Menu.jsx');

import appHistory from '../services/appHistory'

var HomePage = React.createClass({
	mixins:[Reflux.listenTo(Store, 'onChange')],
	getInitialState: function(){
		return {
			data: DataItem
		}
	},
	componentWillMount: function(){
		Actions.getData();
		this.tracking();
	},
	componentDidUpdate: function(){
		this.tracking();
	},
	tracking: function(){
		//ga('send', 'pageview');
	},
	onChange: function(e,data){
		if (data.guilds.length==1) {
			appHistory.push('/'+data.guilds[0].safename);
		} else{
			this.setState({
				data: data
			});
		}
	},
	render: function(){
		return (
			<div id="#wrapper" className="page">
				<Menu guild={this.state.guildname} data={this.state.data} />
				<Guilds data={this.state.data} />
			</div>
		)
	}
});

module.exports = HomePage;