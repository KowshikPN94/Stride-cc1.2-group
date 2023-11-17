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
