var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function(){
		return (
			<div className="header container">
				<Link className="logo" to="/"></Link>
			
				<h1 className="hidden-xs">FOR YOUR CONSIDERATION</h1>
				<h1 className='mobileHeader visible-xs'>FYC</h1>
			</div>	
		)
	}
});

module.exports = Header;