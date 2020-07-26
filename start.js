chrome.storage.local.set({ capture: true }, function () {
  chrome.storage.local.set({ list: [document.location.href] }, function () {
    alert("starting capture");
  });
});
