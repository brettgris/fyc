





var brightcoveservice = {
	get: function(id){
		

		//api.brightcove.com/services/library?command=find_playlist_by_id&playlist_id=4797022730001&playlist_fields=id%2Cname%2CshortDescription%2CplayListType%2Cvideos&video_fields=id%2Cname%2CshortDescription&media_delivery=default&callback=BCL.onSearchResponse&token=dKCg0y_lvI0UhexnXGMG6WWYYx7RJqflY3iKhZubs4o.
		var	mediaApi = new brightcove.MediaApi(k);
		console.log (mediaApi.findPlaylistById(tid));

	}
};

module.exports = brightcoveservice;