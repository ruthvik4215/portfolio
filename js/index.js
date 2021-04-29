
// Navigation menu top.

function myFunction() {
  var x = document.getElementById("topNavigationMenu");
  if (x.className === "topNavigationMenu") {
    x.className += " responsive";
  } else {
    x.className = "topNavigationMenu";
  }
}