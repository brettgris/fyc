var React = require('react');

var CopyrightItem = React.createClass({
	render: function(){
		return (
			<span dangerouslySetInnerHTML={{__html: '&nbsp;'+this.props.data.copyright }}></span>
		);
	}
});

module.exports = CopyrightItem;