const images = [
    "images/tempe-1.jpg","images/tempe-2.jpeg","images/tempe-3.jpeg","images/tempe-4.jpeg"
  ]

  var imageHead = document.getElementById("jumbotron");
var i = 0;

setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 1000);