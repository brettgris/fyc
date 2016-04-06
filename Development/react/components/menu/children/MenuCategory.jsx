var React = require('react');
var MenuItem = require('./MenuItem.jsx');

var MenuCategory = React.createClass({
	render: function(){
		var createShows = this.props.shows.map(function(item,key){
			if (item.category==this.props.data.safename){
				return(
					<MenuItem data={item} key={'menulink'+key} guild={this.props.guild} handleClick={this.props.handleClick} />
				);
			}
		}.bind(this));
		
		return(
			<div className="category">
				<h3>{this.props.data.name}</h3>
				{createShows}
			</div>
		);
	}
});

module.exports = MenuCategory;