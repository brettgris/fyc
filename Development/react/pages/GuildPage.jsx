var React = require('react');

var DataItem = require('../components/data/DataItem.jsx');
var Reflux = require('reflux');
var Actions = require('../models/Actions.jsx');
var Store = require('../models/Store.jsx');

var Shows = require('../components/shows/Shows.jsx');

var GuildPage = React.createClass({
	mixins:[Reflux.listenTo(Store, 'onChange')],
	getInitialState: function(){
		return{
			guildname: "",
			data: DataItem
		}
	},
	componentWillMount: function(){
		Actions.getData();
	},
	componentDidMount: function(){
		this.setState({
			guildname: this.props.params.guildname
		});
	},
	componentDidUpdate: function(){
		this.tracking();
	},
	tracking: function(){
		//ga('send', 'pageview');
	},
	onChange: function(e,data){
		this.setState({
			data: data
		})
	},
	render: function(){
		return (
			<div id="#wrapper" className="page">
				<Shows guild={this.state.guildname} data={this.state.data} />
			</div>
		)
	}
});

module.exports = GuildPage;