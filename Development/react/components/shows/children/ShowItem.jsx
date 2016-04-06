var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var $ = require('jquery');

//<img className='img-responsive' src={"img/shows/"+this.props.data.safename+".jpg"}/>

var ShowItem = React.createClass({
	trackClick: function(){
		ga('send', 'event', 'Show', 'Visit', this.props.data.name);

	},
	render: function(){
		var style = {
			'backgroundImage': 'url(img/shows/'+this.props.data.safename+'.jpg)'
		}

		return (
			<div className={"show "+this.props.catdata.showclass} style={style}>
				<Link onClick={this.trackClick} to={"/"+this.props.guild+"/"+this.props.data.safename}>
					<div className='quote'>
						<h2>{this.props.data.name}</h2>
						<span>{this.props.data.quote}</span>
						<span className='quoter'>{this.props.data.quoter}</span>
					</div>
				</Link>
			</div>
		);
	}
});

module.exports = ShowItem;