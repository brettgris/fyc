var React = require('react');

var Header = require('../components/header/Header.jsx');
var Footer = require('../components/footer/Footer.jsx');

var BasePage = React.createClass({
	render: function(){
		return (
			<div id="fyc">
				<Header />
				<div className="content">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = BasePage;