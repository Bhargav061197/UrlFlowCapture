chrome.storage.local.set({ capture: false }, function () {
  chrome.storage.local.get(["list"], function (result) {
    alert("stopping capture");
    let urlFlow = new Set();
    urlFlow = result.list;
    var text = "";
    for (var i = 0; i < urlFlow.length; i++) {
      text =
        text +
        (i + 1) +
        " : " +
        "<a href=" +
        urlFlow[i] +
        ">" +
        urlFlow[i] +
        "</a><br>";
    }
    chrome.storage.local.remove(["list"], function () {});
    window.open("data:text/csv;charset=utf-8," + escape(text));
  });
});
