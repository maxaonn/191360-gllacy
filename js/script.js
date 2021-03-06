var link = document.querySelector(".js-modal-window-opener");
var popup = document.querySelector(".modal-window");
var popupToShake = document.querySelector(".modal-content")
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var firstLine = popup.querySelector("[name=name]");
var secondLine = popup.querySelector("[name=email]");

link.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal-window-open");
		firstLine.focus();
		}
);

close.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal-window-open");
    popupToShake.classList.remove("modal-window-shaker");
		}
);

form.addEventListener("submit", function(evt) {
		if ( !firstLine.value || !secondLine.value) {
				evt.preventDefault();
				popupToShake.classList.remove("modal-window-shaker");
        popupToShake.offsetWidth = popupToShake.offsetWidth;
        popupToShake.classList.add("modal-window-shaker");
		};
});

window.addEventListener("keydown", function(evt) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-window-open")) {
          popup.classList.remove("modal-window-open");
          popupToShake.classList.remove("modal-window-shaker");
          };
      };
    });
