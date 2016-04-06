var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var MenuItem = React.createClass({
	trackClick: function(){
		ga('send', 'event', 'Show', 'Visit', this.props.data.name);
		this.props.handleClick();
	},
	render: function(){
		return (
			<div>
				<Link onClick={this.trackClick} to={"/"+this.props.guild+"/"+this.props.data.safename} >
					{this.props.data.name}
				</Link>
			</div>
		);
	}
});

module.exports = MenuItem;