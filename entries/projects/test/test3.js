//$(document).ready(function() {alert("To fully experience the interactive aspects of this website, please view on a laptop/desktop viewport. Enjoy!"); })

$(document).ready(function() {
	$(document).on('mousemove', function(e) {
	  $('#cursor').css({
		left: e.pageX,
		top: e.pageY
	  });
	})
  });

// define our variables
let toggleMenu = document.querySelector(".mobile-menu");
let headerStatus = document.querySelector(".header");

// when user clicks on "menu", open and close the mobile navigation
toggleMenu.addEventListener( "click", () => {
    if (headerStatus.classList.contains("open")) {
      headerStatus.classList.remove("open");
    } else {
      headerStatus.classList.add("open");
    }
  },
  false
);
