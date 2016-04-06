var HTTP = require('../services/httpservice.jsx');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');
var k = "dKCg0y_lvI0UhexnXGMG6WWYYx7RJqflY3iKhZubs4o.";
var $ = require('jquery');
var _ = require('underscore');

var Store = Reflux.createStore({
	listenables: [Actions],
	brightcove: false,
	data: {},
	getData: function(s){
		if (!this.brightcove){
			HTTP.get('/data/data.json').then(function(data){
				this.data = data;
				this.triggerUpdate();
				this.getNext(0);
			}.bind(this));
		} else this.triggerUpdate();
	},
	getNext: function(n){
		if (n<this.data.shows.length) this.getPlaylist(this.data.shows[n],n);
		else {
			this.brightcove = true;
			this.triggerUpdate();
		}
	},
	getPlaylist: function(o,v){
		var p = "http://api.brightcove.com/services/library?command=find_playlist_by_id&playlist_id="+o.playlist+"&media_delivery=default&callback=?&token="+k;
		var self = this;
		$.ajax({
			dataType: "json",
			url: p,
			success: function(data){
				_.each (data.videos, function(d,k){
					if (o.episodes[k]) o.episodes[k].id = d.id;
				});

				self.getNext(v+1);
			}
		});
	},
	triggerUpdate: function(){
		this.trigger('change', this.data);
	}
});

module.exports = Store;