var React = require('react');
var $ = require('jquery');

var VideoCode = React.createClass({
	getInitialState: function(){
		return {
			vid: null
		}
	},
	componentDidMount: function(){
		this.videoReady();
	},
	componentDidUpdate: function(){
		this.videoReady();
	},
	renderHTML: function(id){
		var s = '<object id="myExperience4759047999001" class="BrightcoveExperience">';
			s+=	'<param name="bgcolor" value="#000000" />';
			s+=	'<param name="width" value="100%" />';
			s+=	'<param name="height" value="100%" />';
			s+=	'<param name="playerID" value="3336114681001" />';
			s+=	'<param name="playerKey" value="AQ~~,AAAAAEaigsI~,YF3XTVmQgAsL3z8opj3WpvvLsf9qzBEE" />';
			s+=	'<param name="isVid" value="true" />';
			s+=	'<param name="isUI" value="true" />';
			s+=	'<param name="dynamicStreaming" value="true" />';
						
			s+=	'<param name="@videoPlayer" value='+id+' />';
			s+=	'</object>';

			return s;
	},
	videoReady: function(){
		if (this.props.vid && this.props.vid!=this.state.vid) {
			$('.videocode').html( this.renderHTML(this.props.vid) );
			brightcove.createExperiences();

			$('.videocode object').height(350);

			this.setState({
				vid: this.props.vid
			});

		}

	},
	render: function(){
		return(
			<div className="videocode"></div>
		);
	}
});

module.exports = VideoCode;
