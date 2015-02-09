function changeColor(color) {
    chrome.tabs.executeScript(null, { file: "js/change.js" });
}


document.getElementById('red').onclick = function() {
    changeColor('red');
}

document.getElementById('yellow').onclick = function() {
    changeColor('yellow');
}
