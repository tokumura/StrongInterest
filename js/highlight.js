chrome.storage.local.get(function(items) {
	var hit_num = 0;
	var pages = items.pages;
	var url_arr = pages.split(/\r\n|\r|\n/);
	for (i = 0; i < url_arr.length; i++) {
		var url = url_arr[i].replace("http://192.168.0.24/cgi-bin6/", "");
		$('*[href="' + url + '"]').css({"color":"white" , "background-color":"#e3477e"});
		var num = $('*[href="' + url + '"]').size();
		hit_num = hit_num + num;
	}
	chrome.runtime.sendMessage({hit_num: String(hit_num)}, function(response) {});
});

