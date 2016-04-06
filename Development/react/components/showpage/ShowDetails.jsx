var React = require('react');
var $ = require('jquery');
var _ = require('underscore');

var HeaderManager = require('./children/HeaderManager.jsx');
var EpisodeList = require('./children/EpisodeList.jsx');

var LoginBtn = require('../../components/login/LoginBtn.jsx');

var ShowDetails = React.createClass({

	getInitialState: function(){
		return {
			current: {}
		}
	},
	componentDidUpdate: function(n,p){

		if (this.props.data.shows.length>0 && this.state.current['safename']!=n.show) {
			var s = this.props.show;
			var f = _.find( this.props.data.shows,  function(v,k){
				return v.safename==s;
			});

			this.setState({
				current: f
			});
			
			$('body').css({
				'backgroundImage': 'url(/img/bg/'+f.safename+'.jpg)'
			});
			$('.row').css('left','0');
		}
	},
	render: function(){
		var addCurrent = function(self){
			if (self.state.current['safename']){
				return (
					<div className="showpage">
						<HeaderManager data={self.state.current} guild={self.props.guild} show={self.props.show} episode={self.props.episode} />
						<EpisodeList data={self.state.current} guild={self.props.guild} show={self.props.show} episode={self.props.episode} />
					</div>
				)
			}
		};

		return(
			<div className="showdetails container">
				{ addCurrent(this) }
			</div>
		);
	}
});

module.exports = ShowDetails;