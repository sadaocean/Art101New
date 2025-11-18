// Wait for the document to be ready
$(document).ready(function() {
    
    // 1. VARIABLES - Describe the environment
    var mainTitle = "Woah there!";
    var subtitle = "I never see humans here in the bay! Welcome!";
    var otterMessage = "just me <br>and my fishies;)</br>";
    var location = "Monterey Bay";
    var waterTemp = "55°F";
    
    // 2. ARRAYS - Elements in the environment
    var oceanElements = ["kelp forests", "rocky shores", "sandy bottom", "coral reefs", "sea grass"];
    var fishTypes = ["salmon", "sardines", "anchovies"];
    
    // 3. OBJECTS - Characters and entities
    var otter = {
        name: "Oliver",
        species: "Sea Otter",
        age: 3,
        favoriteFood: "sea urchins",
        personality: "friendly and playful",
        greeting: function() {
            return "Hi! I'm " + this.name + ", a " + this.species + "!";
        }
    };
    
    var environment = {
        location: location,
        temperature: waterTemp,
        depth: "30 feet",
        visibility: "clear",
        describe: function() {
            return "You're in " + this.location + " where the water is " + this.temperature + " and " + this.visibility + ".";
        }
    };
    
    // 4. PRINT TO HTML using jQuery
    
    // Print title and subtitle
    $("#title-output").append("<h1>" + mainTitle + "</h1>");
    $("#subtitle-output").append("<h2>" + subtitle + "</h2>");
    
    // Print otter's voice message
    $("#voice-output").append("<h3>" + otterMessage + "</h3>");
    
    // Print character information
    $("#character-output").append("<div class='info-box'>");
    $("#character-output").append("<h3>" + otter.greeting() + "</h3>");
    $("#character-output").append("<p>Age: " + otter.age + " years old</p>");
    $("#character-output").append("<p>Favorite Food: " + otter.favoriteFood + "</p>");
    $("#character-output").append("<p>Personality: " + otter.personality + "</p>");
    $("#character-output").append("</div>");
    
    // Print environment description
    $("#elements-output").append("<div class='info-box'>");
    $("#elements-output").append("<h3>Environment Details</h3>");
    $("#elements-output").append("<p>" + environment.describe() + "</p>");
    $("#elements-output").append("<p><strong>Ocean Elements:</strong></p>");
    $("#elements-output").append("<ul>");
    
    // Loop through array and print each element
    for (var i = 0; i < oceanElements.length; i++) {
        $("#elements-output").append("<li>" + oceanElements[i] + "</li>");
    }
    $("#elements-output").append("</ul>");
    
    $("#elements-output").append("<p><strong>Fish spotted:</strong> " + fishTypes.join(", ") + "</p>");
    $("#elements-output").append("</div>");
    
});

// AGE GUESSING GAME FUNCTION
    var attempts = 0;
    var maxAttempts = 5;
    
    $("#guess-button").click(function() {
        var guess = parseInt($("#age-guess").val());
        attempts++;
        
        // Check if input is valid
        if (isNaN(guess)) {
            $("#game-feedback").html("<span style='color: orange;'>Please enter a number!</span>");
            return;
        }
        
        // Check the guess
        if (guess === otter.age) {
            $("#game-feedback").html("<span style='color: green; font-weight: bold;'>🎉 Yes! I'm " + otter.age + " years old! You got it in " + attempts + " tries!</span>");
            $("#guess-button").prop("disabled", true);
            $("#age-guess").prop("disabled", true); 
        } else if (guess < otter.age) {
            $("#game-feedback").html("<span style='color: #1d1184;'>🔼 Too low! Try higher!</span>");
        } else {
            $("#game-feedback").html("<span style='color: #1d1184;'>🔽 Too high! Try lower!</span>");
        }
        
        // Check if max attempts reached
        if (attempts >= maxAttempts && guess !== otter.age) {
            $("#game-feedback").html("<span style='color: red;'>Game over! I'm actually " + otter.age + " years old!</span>");
            $("#guess-button").prop("disabled", true);
            $("#age-guess").prop("disabled", true);
        }
        
        // Clear input for next guess
        $("#age-guess").val("");
    
    
    // Allow pressing Enter to submit guess
    $("#age-guess").keypress(function(e) {
        if (e.which === 13) { // Enter key
            $("#guess-button").click();
        }
    });
    
});