var React = require('react');

var ShowHeader = require('./ShowHeader.jsx');
var VideoPlayer = require('./VideoPlayer.jsx');
var Reflux = require('reflux');
var SiteActions = require('../../../models/SiteActions.jsx');
var SiteStore = require('../../../models/SiteStore.jsx');

var HeaderManager = React.createClass({
	componentDidMount: function(){
		if (this.props.episode) {
			SiteActions.checkValidation({
				guild:this.props.guild,
				show: this.props.show
			});
		}
	},
	render: function(){
		var headerType = function(self){
			if (self.props.episode){
				return (
					<VideoPlayer data={self.props.data} guild={self.props.guild} show={self.props.show} episode={self.props.episode} />
				)
			} else {
				return(
					<ShowHeader data={self.props.data} acclaim={self.props.acclaim} guild={self.props.guild} show={self.props.show} episode={self.props.episode} />
				)
			}
		}

		return(
			<div className="showheader">
				{headerType(this)}
			</div>	
		);
	}
});

module.exports = HeaderManager;