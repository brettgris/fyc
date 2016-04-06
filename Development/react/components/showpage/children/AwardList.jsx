var React = require('react');

var AwardItem = require('./AwardItem.jsx');
var $ = require('jquery');



var AwardList = React.createClass({


	render: function(){
		var createAwards = this.props.data.awards[this.props.guild].map( function(item,key){
			return (
				<AwardItem key={"awards"+key} data={item} guild={this.props.guild} show={this.props.show} clear={key%3==0} />
			);
		}.bind(this));

		return(
			<div className="awards">
				<div className="row">
					<div className="col-md-9 col-sm-12">
						<h3>AWARDS</h3>
						<div className="row">
							{createAwards}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AwardList;

