chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	var num = request.hit_num
	chrome.browserAction.setBadgeText({ text: num });
	chrome.pageAction.show(sender.tab.id);
	sendResponse({tabid:sender.tab.id});
});
