var React = require('react');

var Reflux = require('reflux');
var SiteActions = require('../../models/SiteActions.jsx');
var SiteStore = require('../../models/SiteStore.jsx');

var Login = React.createClass({
	mixins:[Reflux.listenTo(SiteStore, 'onChange')],
	getInitialState: function(){
		return{
			visible: false,
			password: "",
			error: true,
			value: "starzfyc"
		}
	},
	onChange: function(e,data){
		this.setState({
			visible: data.visible,
			error: data.error
		})
	},
	onEnterPassword: function(e){
		this.setState({
			password: e.target.value
		})
	},
	handleSubmit: function(e){
		e.preventDefault();
		var d = this.state;
		d.guild = this.props.guild;
		if (this.state.password.length>1) {
			SiteActions.login(d);
		} else {
			this.setState({
				error: true
			});
		}
	},
	handleCancel: function(){
		SiteActions.loginVisible(false);
	},
	render: function(){
		var visible = (this.state.visible) ? " visible" : "";
		var error = (this.state.error) ? " has-feedback has-error" : "";
		var markvisible = (this.state.error) ? "" : " hide"

		return (
			<div className={"login"+visible}>
				<div className="container">
					<div className="loginrow">
						<div className="col-sm-4 col-sm-offset-4">
							<form onSubmit={this.handleSubmit}>
  								<div className={"form-group form-group-lg"+error}>
  									<label className="control-label" htmlFor="sitepassword">Login</label>
  									<input type="text" className="form-control" id="sitepassword" placeholder="Enter Password" onChange={this.onEnterPassword} value={this.state.password} aria-describedby="inputError2Status" />
  									<span className={"glyphicon glyphicon-remove form-control-feedback"+markvisible} aria-hidden="true"></span>
  									<span id="inputError2Status" className="sr-only">(error)</span>
  
  								</div>
  								<div className="form-group form-group-lg">
  									<button type="button" className="btn btn-default" onClick={this.handleSubmit}>SUBMIT</button>
  								</div>
  								
  							</form>
							
							<p>
  								<a onClick={this.handleCancel}>Cancel</a>
  							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Login;