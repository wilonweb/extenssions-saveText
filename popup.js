// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("descriptionInput");

  saveButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({
      action: "saveTextData",
      title: titleInput.value,
      description: descriptionInput.value,
    });

    window.close();
  });
});
