//brian's fav guitarists JavaScript
/*DOM Variables*/
let navItems = document.querySelectorAll(".nav-item");
let subnav = document.getElementById("subnav");
let subnavItems = document.querySelectorAll(".subnav-item");
let guitarPlayers = document.getElementById("guitarPlayers");
let navToggle = document.getElementById("js-navbar-toggle");
navToggle.addEventListener("click", hideSubnav);
if (screen.width > 640) {
	guitarPlayers.addEventListener("mouseover", showSubnav);
	// click for mobile just in case
	guitarPlayers.addEventListener("click", showSubnav);
}
subnav.addEventListener("mouseover", showSubnav);
subnav.addEventListener("mouseout", hideSubnav);
navItems.forEach(navItem => {
	if (screen.width <= 640) {
		navItem.addEventListener("click", () => {
		if (navItem.innerText === "About" || navItem.innerText === "Demos") {
				hideSubnav();
				hideNav();
			}
		});
	}
});
subnavItems.forEach(subnavItem => {
	if (screen.width <= 640) {
		subnavItem.addEventListener("click", () => {
			hideSubnav();
			hideNav();
		});
	}
});
if (screen.width <= 640) {
	guitarPlayers.addEventListener("click", toggleSubnavDisplay);
}
/*DOM functions */
function showSubnav() {
	subnav.style.display = "flex";
}

function hideSubnav() {
	subnav.style.display = "none";
}

function hideNav() {
	mainNav.classList.toggle('active');
}

function toggleSubnavDisplay() {
	if (subnav.style.display === "none") {
		subnav.style.display = "flex";
	} else if (subnav.style.display === "flex") {
		subnav.style.display = "none";
	}
}
/********toggle navigation for mobile view************ */
let mainNav = document.getElementsByClassName('main-nav')[0];
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function() {
	mainNav.classList.toggle('active');
});
/************ for read more ************/
let readMore = document.querySelectorAll(".read-more");
let moreText = document.querySelectorAll(".more")

readMore.forEach(readMoreButton => {
	readMoreButton.addEventListener("click", function() {
		moreText.forEach(moreTextDisplay => {
			if (moreTextDisplay.classList.contains(readMoreButton.id)) {
				moreTextDisplay.classList.toggle("showText");
				if (readMoreButton.innerHTML === "Read More") {
					readMoreButton.innerHTML = "Read Less";
				} else {
					readMoreButton.innerHTML = "Read More";
				}
			}
		});
	});
});