// var app = chrome.runtime.getBackgroundPage();

function startflow() {
  chrome.tabs.executeScript({
    file: "start.js",
  });
}

function stopflow() {
    chrome.tabs.executeScript({
      file: "stop.js",
    });
  }
  

document.getElementById("start").addEventListener("click", startflow);
document.getElementById("stop").addEventListener("click", stopflow);


