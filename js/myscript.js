/*
* 気になるリストに追加
*/
function addInterest() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    var url = tabs[0].url;
		chrome.storage.local.get(function(items) {
			var pages = items.pages;
			var pages = pages + "\r\n" + url;
			chrome.storage.local.set({pages:pages});
			$('*[class="vr_contentArea"]').css({"color":"white" , "background-color":"#e3477e"});
			window.close();
		});
	});
}

/*
* 気になるリストから削除
*/
function removeInterest() {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    var remove_url = tabs[0].url;
		chrome.storage.local.get(function(items) {
			var new_pages_arr = new Array();
			var pages = items.pages;
			var url_arr = pages.split(/\r\n|\r|\n/);
			for (i = 0; i < url_arr.length; i++) {
				var url = url_arr[i];
				if (url.indexOf(remove_url) < 0) {
					new_pages_arr.push(url);
				}
			}
			var pages_new = new_pages_arr.join("\r\n");
			chrome.storage.local.set({pages:pages_new});
			window.close();
		});
	});
}

/*
* 「気になる」ボタンクリック
*/
document.getElementById('add_interest').onclick = function() {
	addInterest();
}

/*
* 「忘れてよし」ボタンクリック
*/
document.getElementById('remove_interest').onclick = function() {
	removeInterest();
}
