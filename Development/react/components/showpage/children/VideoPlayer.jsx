var React = require('react');
var _ = require('underscore');

var VideoCode = require('./VideoCode.jsx');

var VideoPlayer = React.createClass({
	getInitialState: function(){
		return{
			episode: {}
		}
	},
	componentDidMount: function(){
		this.loadEpisode();	
	},
	componentDidUpdate: function(){
		if ( this.props.episode != this.state.episode['number']) {
			this.loadEpisode();	
		}
	},
	loadEpisode: function(){
		var self = this;
		var ep = _.find( this.props.data.episodes, function(item){
			return item.number == self.props.episode
		});
		
		this.setState({
			episode: ep
		});

		this.trackLoad(this.props.show+" - "+ep.name);
	},
	trackLoad: function(s){
		ga('send', 'event', 'Episode', 'Load', s);
	},
	render: function(){
		return(
			<div className="videoplayer">
				<div className="row">
					<div className='videoBox col-md-6'>
						<VideoCode vid={this.state.episode.id} />
					</div>
					<div className='videoInfo col-md-6'>
						<h1>{this.props.data.name}</h1>
						<h4>Ep {this.props.episode} - <span className="highlight">{this.state.episode.name}</span></h4>		
						<p> {this.state.episode.synopsis}</p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = VideoPlayer;
