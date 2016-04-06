var React = require('react');
var SiteActions = require('../../../models/SiteActions.jsx');
var SiteStore = require('../../../models/SiteStore.jsx');


var EpisodeItem = React.createClass({
	handleClick: function(){
		SiteActions.showLink({
			guild: this.props.guild,
			show: this.props.show,
			episode: this.props.data.number
		});
	},
	render: function(){
		var clearfix = (this.props.clear) ? " clear" : "";

		return(
			<div className={"episode"}>
				<div className="wrapper" onClick={this.handleClick}>
					<img className="img img-responsive" src={"/img/episode/"+this.props.show+"/"+this.props.data.number+".jpg"}/>
					<h4>
						Ep {this.props.data.number} - <span className="highlight">{this.props.data.name}</span>
					</h4>
				</div>
			</div>
		);
	}
});

module.exports = EpisodeItem;