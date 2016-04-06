var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var $ = require('jquery');

var MenuCategory = require('./children/MenuCategory.jsx');

var Menu = React.createClass({
	getInitialState: function(){
		return {
			visible: false
		}
	},
	handleClick: function(){
		this.hideBtns( this.state.visible );

		this.setState({
			visible: !this.state.visible
		})


	},
	itemClick: function(){
		this.hideBtns( true );
		this.setState({
			visible: false
		});


	},
	hideBtns: function(b){
		if (b)	{
			$('.next').show();
			$('.prev').show();
			$('.menu').css('z-index','1');
		} else {
			$('.next').hide();
			$('.prev').hide();
			$('.menu').css('z-index','5');
		}
	},
	render: function(){
		var visible = (this.state.visible) ? " visible" : "";

		var createCategories = this.props.data.categories.map(function(item,key){
			return(
				<MenuCategory key={"menucategory"+key} data={item} guild={this.props.guild} shows={this.props.data.shows} handleClick={this.itemClick} />
			);
		}.bind(this));

		return(
			<div className={"menu"+visible}>
				<div className="menu-wrapper">
					<div className="btn-wrapper">
						<div className="menu-btn" onClick={this.handleClick}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className="background">
						<div className="list">
							<h3>
								<Link onClick={this.itemClick} to={"/"+this.props.guild}>Home</Link>
							</h3>
							{createCategories}
						</div>
					</div>							
				</div>
			</div>
		);
	}
});

module.exports = Menu;