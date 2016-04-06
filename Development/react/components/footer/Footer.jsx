var React = require('react');

var DataItem = require('../data/DataItem.jsx');
var Reflux = require('reflux');
var Actions = require('../../models/Actions.jsx');
var Store = require('../../models/Store.jsx');

var CopyrightItem = require('./children/CopyrightItem.jsx');

var Footer = React.createClass({
	mixins:[Reflux.listenTo(Store, 'onChange')],
	getInitialState: function(){
		return {
			data: DataItem
		}
	},
	onChange: function(e,data){
		this.setState({
			data: data
		});
	},
	render: function(){
		var createCopyrightItems = this.state.data.shows.map( function(item,key){
			return (
				<CopyrightItem key={"copyright"+key} data={item} />
			);
		}.bind(this));

		return (
			<div className="footer container">
				<div className="row">
					<p className="copyright center col-md-10 col-md-offset-1">
						<span>
							STARZ and related channels and service marks are the property of Starz Entertainment, LLC.
						</span>
						{createCopyrightItems}
					</p>
				</div>
			</div>
		)
	}
})

module.exports = Footer;