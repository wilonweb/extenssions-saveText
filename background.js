// background.js

// Écoute l'événement lorsque l'extension est installée ou mise à jour
chrome.runtime.onInstalled.addListener(function () {
  // Crée un menu contextuel qui apparaît lorsque du texte est sélectionné
  chrome.contextMenus.create({
    title: "Sauvegarder le texte sélectionné", // Titre du menu
    id: "saveText", // Identifiant du menu
    contexts: ["selection"], // Contexte dans lequel le menu doit apparaître (sélection de texte)
  });
});

// Écoute l'événement lorsqu'un élément du menu contextuel est cliqué
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  // Vérifie si l'élément cliqué correspond à notre menu contextuel
  if (info.menuItemId === "saveText") {
    // Envoie un message au contenu du script pour récupérer le texte sélectionné
    chrome.tabs.sendMessage(tab.id, {
      action: "saveText",
      selectedText: info.selectionText,
    });
  }
});

// Écoute l'événement lorsqu'un message est reçu (depuis le contenu du script ou la fenêtre contextuelle)
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Vérifie l'action spécifiée dans le message
  if (message.action === "saveTextData") {
    // Sauvegarde les données comme vous le souhaitez (par exemple, dans le stockage local)
    console.log("Title:", message.title);
    console.log("Description:", message.description);
  }
});

// background.js
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log("Menu contextuel cliqué :", info);
  if (info.menuItemId === "saveText") {
    chrome.tabs.sendMessage(tab.id, {
      action: "saveText",
      selectedText: info.selectionText,
    });
  }
});
