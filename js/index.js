
// Navigation menu top.

function myFunction() {
  var x = document.getElementById("topNavigationMenu");
  if (x.className === "topNavigationMenu") {
    x.className += " responsive";
  } else {
    x.className = "topNavigationMenu";
  }
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topNavigationMenu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}