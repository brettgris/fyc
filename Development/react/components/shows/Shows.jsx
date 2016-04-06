var React = require('react');
var ShowCategory = require('./children/ShowCategory.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var $ = require('jquery');



var Shows = React.createClass({
	componentDidMount: function(){
		$('body').css({
			'backgroundImage': 'url(/img/background.jpg)'
		});
	},
	render: function(){
		var createCategories = this.props.data.categories.map( function(item, key){
			return (
				<ShowCategory key={"show"+key} data={item} shows={this.props.data.shows} guild={this.props.guild} />
			);
		}.bind(this))

		return(	
			<div className="showlist container">
				{createCategories}
			</div>
		);
	}
});

module.exports = Shows;