const container = document.querySelector(".container")

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigator.serviceWorker
		.register("/serviceWorker.js")
		.then(registration => console.log("service worker registered"))
		.catch(err => console.log("service worker not registered", err))
	})
  }