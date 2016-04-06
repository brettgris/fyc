var React = require('react');

var Reflux = require('reflux');
var SiteActions = require('../../models/SiteActions.jsx');
var SiteStore = require('../../models/SiteStore.jsx');

var LoginBtn = React.createClass({
	mixins:[Reflux.listenTo(SiteStore, 'onChange')],
	getInitialState: function(){
		return {
			visible: true,
			validated: false
		}
	},
	onChange: function(e,data){
		this.setState({
			visible: !data.visible,
			validated: data.validated
		});
	},
	handleClick: function(){
		SiteActions.loginVisible(true);
	},
	render: function(){
		var visible = (this.state.visible&&!this.state.validated) ? "" : " hide";
		return(
			<div>
				<a className={visible} onClick={this.handleClick}>LOGIN</a> &nbsp;
			</div>
		);
	}
});

module.exports = LoginBtn;