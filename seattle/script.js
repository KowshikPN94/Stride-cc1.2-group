const restaurants = [
"The Pink Door Restaurant",
"ROCCO'S Pizza",
"Petra Mediterranean Bistro Restaurant",
    "Noi Thai Cuisine Restaurant"
];

const attractions = [
"Space needle",
"Pike Place Market",
"Olympic National Park",
    "Mount Rainier National Park"
];

const activities = [
"Boating and Kayaking",
"Hiking",
"Beer Testing",
    "Watch games"
];

function showRandomLocation() {
const randomIndex = Math.floor(Math.random() * 4); 

const randomLocationType = document.getElementById("randomLocationType").value;
let locationDetails;

if (randomLocationType === "restaurant") {
locationDetails = restaurants[randomIndex];
} else if (randomLocationType === "attraction") {
locationDetails = attractions[randomIndex];
} else if (randomLocationType === "activity") {
locationDetails = activities[randomIndex];
} else {
locationDetails = "Select a location type.";
}

alert(`Explore ${locationDetails} in Seattle!`);

}


function sleep(ms, delayedfunc) {
    return new Promise(delayedfunc => setTimeout(delayedfunc, ms));
  }
  
  async function animate(element, opacity, framesperElementAnimation) {
    id = setInterval(frame, framesperElementAnimation);
    function frame() {
      if (opacity === 100) {
        clearInterval(id);
        return 0;
      } else {
        opacity = opacity + 10;
        element.style.setProperty('opacity', `${opacity}%`);
      }
    }
  }
  
  async function beginanimation() {
    var timebetweenElementAnimationsStart = 40;
    var framesperElementAnimation = 100;
    var id = null;
    // var lastelement = document.getElementById("last");
    var lastelement = document.getElementsByClassName("last")[0];
    maxitems = lastelement.classList[lastelement.classList.length - 1]; // get the number of items to animate. "last" must be at the start of classlist
    // console.log(maxitems);
    for (let i = 1; i <= maxitems; i++) {
      console.log("i",i);
      var opacity = 0;
      var position = 0;
      var element = document.getElementsByClassName(`animate ${i}`);
      // console.log(element);
      // console.log(window.getComputedStyle(element[0]).getPropertyValue("opacity"));
      let done = await sleep(timebetweenElementAnimationsStart, animate(element[0], opacity, framesperElementAnimation));
    }
  }
  
  window.onload = function() {
    // fade in elements in order numbered by class name. label last element with highest number with "last" and also have all of them include "animate" in their classname
    console.log("loading")
    beginanimation();
  }