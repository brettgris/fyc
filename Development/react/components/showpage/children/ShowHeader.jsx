var React = require('react');
var _ = require('underscore');
var SiteActions = require('../../../models/SiteActions.jsx');
var SiteStore = require('../../../models/SiteStore.jsx');

var AwardList = require('./AwardList.jsx');

var ShowHeader = React.createClass({
	handleClick: function(num){
		var o = _.find( this.props.data.episodes, function(ep){
			return (ep.id!=undefined);
		});

		if (o){
			SiteActions.showLink({
				guild: this.props.guild,
				show: this.props.show,
				episode: o.number
			});
		}
	},
	render: function(){
		var o = _.find( this.props.data.episodes, function(ep){
			return (ep.id!=undefined);
		}) 

		var playvisible = (o) ? "" : " hide";

		return(
			<div className="content">
				<div className="title-wrapper" onClick={this.handleClick}>
					<h1 className="title">{this.props.data.name}
						<span className={"play"+playvisible}> Play</span>
					</h1>
				</div>
				<div className="row show-detail">
					<p className='col-md-6 col-sm-9'>{this.props.data.details}</p>
				</div>
				<AwardList data={this.props.data} guild={this.props.guild} show={this.props.show} episode={this.props.episode}  />
			</div>
		);
	}
});

module.exports = ShowHeader;