var HTTP = require('../services/httpservice.jsx');
var Reflux = require('reflux');
var SiteActions = require('./SiteActions.jsx');
var CryptoJS = require('crypto-js');
var $ = require('jquery');
var cookie = require('jquery.cookie');
import appHistory from '../services/appHistory'

var ck = {
	emmys: 'starzfycemmys2016'
}

var values = {
	emmys: "37a7dac83cffb918fa54a6e9c2d4cfc0109dc79cc94adffdfc7a71794c2fd7f5"
}

var SiteStore = Reflux.createStore({
	listenables: [SiteActions],
	data: {
		visible: false,
		validated: false,
		res: {}
	},
	loginVisible: function(b){
		this.data.visible = b;
		this.data.error = false;
		this.triggerUpdate();
	},
	login: function(res){
		if (CryptoJS.SHA256(res.password)==values[res.guild]) {
			$.cookie(ck[res.guild], values[res.guild], { expires: 30 });
			this.data.validated = true;
			this.data.visible = false;
			this.showLink(this.data.res);
			ga('send', 'event', 'Login', 'Pass');
		} else {
			this.data.validated = false;
			this.data.error = true;
			ga('send', 'event', 'Login', 'Fail');
		}
		this.triggerUpdate();
	},
	checkValidation: function(res){
		if (!this.data.validate){
			var c = $.cookie(ck[res.guild]);
			if (c!=values[res.guild]){
				appHistory.push('/'+res.guild+'/'+res.show);
			} else {
				this.data.validate = true;
				this.triggerUpdate();
			}
		}
	},
	showLink: function(res){
		if (!this.data.validate){
			var c = $.cookie(ck[res.guild]);
			if (c!=values[res.guild]){
				this.data.res = res;
				this.loginVisible(true);
			} else {
				appHistory.push('/'+res.guild+'/'+res.show+'/'+res.episode);
			}
		} else{
			appHistory.push('/'+res.guild+'/'+res.show+'/'+res.episode);
		}
	},
	triggerUpdate: function(){
		this.trigger('change', this.data);
	}
});

module.exports = SiteStore;