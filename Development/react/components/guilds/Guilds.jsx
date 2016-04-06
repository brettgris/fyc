var React = require('react');
var $ = require('jquery');

var GuildItem = require('./children/GuildItem.jsx');

var Guilds = React.createClass({
	componentDidMount: function(){
		$('body').css({
			'backgroundImage': 'url(/img/background.jpg)'
		});
	},render: function(){
		var createGuilds = this.props.data.guilds.map( function(item, key){
			return (
				<GuildItem key={"guild"+key} data={item} />
			)
		}.bind(this));

		return(
			<div className="guildslist container">
				{createGuilds}
			</div>
		);
	}
});

module.exports = Guilds;