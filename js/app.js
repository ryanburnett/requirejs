define(function (require) {
	var button = document.createElement("button");
	button.onclick = function () {
		var alerter = require(["alerter"], function (alerter) {
			alerter("hello from the app")
		});
	}
	button.textContent = "Click to load the alerter";
	document.body.appendChild(button)
})
