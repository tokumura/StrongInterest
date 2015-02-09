chrome.storage.local.get(function(items) {
	var hit_num = 0;
	var current = window.location.toString();
	var should_set_badge = false;

	// トップページはバッチテキストをセット
	if (current == "http://192.168.0.24/cgi-bin6/ag.exe?page=AGIndex") {
		should_set_badge = true;
	}

	// トップページはバッチテキストをセット（微妙なURL違い）
	if (current == "http://192.168.0.24/cgi-bin6/ag.exe") {
		should_set_badge = true;
	}

	// 月スケジュールページもバッチセット
	if (current.indexOf("http://192.168.0.24/cgi-bin6/ag.exe?page=ScheduleUserMonth") >= 0) {
		should_set_badge = true;
	}

	// それ以外はバッチセットしない
	if (!should_set_badge) {
		chrome.runtime.sendMessage({hit_num: ""}, function(response) {});
		return;
	}

	// バッチセット処理
	var pages = items.pages;
	var url_arr = pages.split(/\r\n|\r|\n/);
	for (i = 0; i < url_arr.length; i++) {
		var url = url_arr[i].replace("http://192.168.0.24/cgi-bin6/", "");
		$('*[href="' + url + '"]').css({"color":"white" , "background-color":"#e3477e"});
		var num = 0;
		if ($('*[href="' + url + '"]').size() > 0) {
			hit_num = hit_num + 1;
		}
	}
	chrome.runtime.sendMessage({hit_num: String(hit_num)}, function(response) {});
});

