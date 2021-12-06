window.onscroll = function() {myFunction()};

var header = document.getElementsByClassName("page-header");
var sticky = header[0].offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header[0].classList.add("sticky");
  } else {
    header[0].classList.remove("sticky");
  }
}