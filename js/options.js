document.getElementById('save').onclick = function() {
	var pages = $('#pages').val();
	chrome.storage.local.set({pages:pages});
//	localStorage['color'] = color;
	//var url_arr = $('#urls').val();
	//chrome.storage.local.set({url_arr:url_arr});
//	localStorage['urls'] = urls;
}

document.body.onload = function() {
  var pages = localStorage['pages'];
  chrome.storage.local.get(function(items) {
    $('#pages').val(items.pages);
  });
}