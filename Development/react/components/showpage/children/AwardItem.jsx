var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var awardItem = React.createClass({
	render: function(){
		return(
			<div className="award-item col-md-4 col-xs-6">
				<p>{this.props.data.title}</p>
			</div>
		);
	}
});

module.exports = awardItem;