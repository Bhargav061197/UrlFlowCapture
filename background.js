chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.local.get(["capture"], function (result) {
    if (result.capture) {
      chrome.storage.local.get(["list"], function (result) {
        var data = result.list;
        var flag = 0;
        for (var i = 0; i < data.length; i++) {
          if (data[i] === tab.url) flag = 1;
        }
        if (flag == 0) {
          data.push(tab.url);
          chrome.storage.local.set({ list: data }, function () {});
        }
      });
    }
  });
});
