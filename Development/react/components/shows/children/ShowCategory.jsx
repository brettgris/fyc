var React = require('react');
var ShowItem = require('./ShowItem.jsx');

var ShowCategory = React.createClass({
	render: function(){
		var createShows = this.props.shows.map( function(item,key){
			var c = this.props.data.safename;
			if (this.props.data.safename==item.category){
				return (
					<ShowItem data={item} catdata={this.props.data} guild={this.props.guild} key={"show"+key} />
				);
			}
		}.bind(this));

		return (
			<div className={"category "+this.props.data.class}>
				<h3>{this.props.data.name}</h3>
				<div className="shows">
					{createShows}
				</div>
			</div>
		);
	}
});

module.exports = ShowCategory;