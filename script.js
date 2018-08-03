var home = document.getElementById("homeLink");
var bio = document.getElementById("bioLink");
var booking = document.getElementById("bookingLink");

var main = document.getElementsByTagName("main")[0];
var footer = document.getElementsByTagName("footer")[0];

var bioSection = document.getElementById("bio");

var bookingSection = document.getElementById("booking");

home.addEventListener("click", function(){
	main.style.display = "initial";
	footer.style.display = "flex";

	bioSection.style.display = "none";

	bookingSection.style.display = "none";
});

bio.addEventListener("click", function(){
	main.style.display = "none";
	footer.style.display = "none";

	bioSection.style.display = "flex";

	bookingSection.style.display = "none";
});
booking.addEventListener("click", function(){
	main.style.display = "none";
	footer.style.display = "none";

	bioSection.style.display = "none";

	bookingSection.style.display = "initial";
});

var arrows = document.getElementsByClassName("arrow");
main.addEventListener("mouseover", function(){
	arrows[0].style.display = "initial";
	arrows[1].style.display = "initial";
});
main.addEventListener("mouseout", function(){
	arrows[0].style.display = "none";
	arrows[1].style.display = "none";
});