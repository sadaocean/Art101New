var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

function makeImage () {
      if (colors[colorCount] == "Orchid") {
       $("body").append("<img width=50 src='exercises/orchid.png'>");
      }
    }

$("#needy-button").click(function () {
   if (count < 5) { mood = "fresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }
   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
   $("body").css("background-color", colors[colorCount]);
   var audio = document.getElementById("button-audio");
   audio.play();
   
   makeImage();

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }
});



// add a button titled try click me
// when it is clicked
// add one to the total number
// show the total number
// on our button 
// show "clicked total number times"
// a top limit

