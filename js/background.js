chrome.browserAction.setBadgeText({ text: "3" });

chrome.browserAction.onClicked.addListener(function(){
  var color = localStorage['color'];
  alert(color);
  chrome.tabs.executeScript(null, {
    "code": "document.body.style.backgroundColor='" + color + "'"
  });
})