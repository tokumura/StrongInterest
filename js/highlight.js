//var urls = localStorage['urls'].split(/\r\n|\r|\n/);
//var urls = localStorage['color'];
//alert(urls);
/*for (i = 0; i < urls.length; i++) {
	var url = urls[i].replace("http://192.168.0.24/cgi-bin6/", "");
	$('*[href="' + url + '"]').css({"color":"white" , "background-color":"#e3477e"})
}
*/

chrome.storage.local.get(function(items) {
  var pages = items.pages;
  var url_arr = pages.split(/\r\n|\r|\n/);
  for (i = 0; i < url_arr.length; i++) {
  	var url = url_arr[i].replace("http://192.168.0.24/cgi-bin6/", "");
  	$('*[href="' + url + '"]').css({"color":"white" , "background-color":"#e3477e"})
  }
});