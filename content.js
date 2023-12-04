// content.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "saveText") {
    chrome.runtime.sendMessage({
      action: "saveText",
      selectedText: message.selectedText,
    });
  }
});
