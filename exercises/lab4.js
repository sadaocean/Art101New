// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "personal bike", "rental bike", "some random car", "friends car"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "bus",
    route: 1,
    print: "zebra",
    hasMiddleDoor: true,
    drivers: ["Sado", "Ma", "Lord Farquad"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ",  " + myCommutes[5] +
 "  </p>";

megaSentence = megaSentence + "<p> My favourite commute possesses such characteristics: type - "  + myFavouriteCommute.type + 
", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);