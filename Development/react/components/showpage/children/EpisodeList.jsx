var React = require('react');
var $ = require('jquery');
var EpisodeItem = require('./EpisodeItem.jsx');
var _ = require('underscore');


var EpisodeList = React.createClass({
	getInitialState: function(){
		return {
			value: 0
		}
	},
	nextValue: function(){
		var v = this.state.value;
		v++;

		var max = Math.ceil( this.getMax()/3 );
		
		if (v>max-1) v=0;
		
		this.setState({
			value: v
		});

		console.log($('.row').css('left'));
	},
	previousValue: function(){
		var v = this.state.value;
		v--;
		
		var max = Math.ceil( this.getMax()/3 );
		if (v<0) v=max-1;
		
		this.setState({
			value: v
		});

		console.log($('.row').css('left'));
	},
	getMax: function(){
		var o = _.filter(this.props.data.episodes, function(item){
			return (item.id)
		});

		return o.length;
	},
	componentDidMount: function(){
		$(window).resize(this.resize);
		this.resize();	

	},
	componentDidUpdate: function(){
		$(window).resize(this.resize);
		this.resize();

	},
	resize: function(){
		var w = $('.rowContainer').width();
		var h = $('.rowContainer').height();
		
		var mr = ($('.episode').length>0) ? $('.episode').css('margin-right').slice(0,-2) : 0;
		var ew = (w-(3*mr))/3;
		$('.episode').width(ew);		
	},
	render: function(){
		var eps = 0;
		var createEpisodes = this.props.data.episodes.map( function(item,key){
			if (item.id) {
				eps++;
				return (
					<EpisodeItem key={"episode"+key} data={item} guild={this.props.guild} show={this.props.show} clear={key%3==0} />
				);
			}
		}.bind(this));

		
		var rowStyle = {
			'left': (-1*(this.state.value*100))+'%'
		}

		var visible = (eps>0) ? "" : " hide";

		var episodevisible = (this.props.data.category=='movie') ? " hide" : ""; 

		

		return(
			<div className={"episodes"+visible+episodevisible}>
				<h3>EPISODES</h3>
				<div className='rowContainer'>
					<div className="row" style={rowStyle}>
						{createEpisodes}
					</div>
					
					<div className='arrowbtn next' onClick={this.nextValue}></div>
					<div className='arrowbtn prev' onClick={this.previousValue}></div>
				</div>
			</div>
			
		);
	}
});

module.exports = EpisodeList;