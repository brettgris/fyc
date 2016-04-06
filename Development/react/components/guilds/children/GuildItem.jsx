var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var GuildItem = React.createClass({
	render: function(){
		return (
			<div className="guild">
				<Link to={"/"+this.props.data.safename} >
					{this.props.data.name}
				</Link>
			</div>
		);
	}
});

module.exports = GuildItem;