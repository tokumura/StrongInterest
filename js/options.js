document.getElementById('save').onclick = function() {
	var pages = $('#pages').val();
	chrome.storage.local.set({pages:pages});
}

document.body.onload = function() {
  chrome.storage.local.get(function(items) {
    $('#pages').val(items.pages);
  });
}