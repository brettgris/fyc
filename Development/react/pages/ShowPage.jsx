var React = require('react');

var DataItem = require('../components/data/DataItem.jsx');
var Reflux = require('reflux');
var Actions = require('../models/Actions.jsx');
var Store = require('../models/Store.jsx');
var Login = require('../components/login/Login.jsx');

var Menu = require('../components/menu/Menu.jsx');

var ShowDetails = require('../components/showpage/ShowDetails.jsx');

var ShowPage = React.createClass({
	mixins:[Reflux.listenTo(Store, 'onChange')],
	getInitialState: function(){
		return{
			guildname: "",
			showname: "",
			episodenum: undefined,
			playlist: null,
			data: DataItem
		}
	},
	componentWillMount: function(){
		Actions.getData();
	},
	componentDidMount: function(){
		this.setState({
			guildname: this.props.params.guildname,
			showname: this.props.params.showname,
			episodenum: this.props.params.episodenum
		});
	},
	shouldComponentUpdate: function(n){
		var b = true;

		if (this.state.episodenum!=n.params.episodenum) {
			this.setState({"episodenum": n.params.episodenum});
			b = true;
			this.tracking();
		} 
		if (this.state.guildname!=n.params.guildname) {
			this.setState({"guildname": n.params.guildname});
			b = true;
			this.tracking();
		} 
		if (this.state.showname!=n.params.showname) {
			
			this.setState({
				showname: n.params.showname
			});
			b = true;
			
			this.tracking();
		}

		return b;
	},
	tracking: function(){
		//ga('send', 'pageview');
	},
	onChange: function(e,data){
		this.setState({
			data: data
		});
	},
	render: function(){
		return (
			<div id="#wrapper" className="page">
				<Menu guild={this.state.guildname} data={this.state.data} />
				<Login guild={this.state.guildname} show={this.state.showname} />
				<ShowDetails data={this.state.data} guild={this.state.guildname} show={this.state.showname} episode={this.state.episodenum} />
			</div>
		)
	}
});

module.exports = ShowPage;