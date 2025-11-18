// // Wait for the document to be ready
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
    
    // ==========================================================
    // MAIN INTERACTIVE ELEMENT - ADVANCED JQUERY HOVER ANIMATION
    // ==========================================================
    
    /*
     * This is the primary interactive element that demonstrates advanced jQuery
     * When user hovers over the interaction zone, it triggers a chain reaction:
     * 1. Otter grows and moves up (excited)
     * 2. Speech bubble fades in and appears
     * 3. All three fish scatter in different directions
     * 4. Info boxes highlight with border animation
     * 5. Background elements respond
     * 
     * When mouse leaves, everything smoothly returns to original state
     */
    
    $("#interaction-zone").hover(
        // MOUSE ENTER - Trigger all animations
        function() {
            // Animate the interaction zone itself
            $(this).stop().animate({
                padding: "25px 40px",
                fontSize: "22px",
                boxShadow: "0 12px 25px rgba(0, 0, 0, 0.5)"
            }, 300);
            
            // 1. OTTER GETS EXCITED - grows and moves up
            $("#otter").stop().animate({
                width: "550px",
                top: "270px",
                left: "220px"
            }, 400, function() {
                // Callback: after growing, do a little bounce
                $(this).animate({
                    top: "280px"
                }, 150).animate({
                    top: "270px"
                }, 150);
            });
            
            // 2. SPEECH BUBBLE APPEARS with fade and movement
            $("#speech").stop().animate({
                opacity: 1,
                top: "180px",
                width: "270px"
            }, 500);
            
            // Update voice message
            $("#voice-output").html("<h3>Yay! A visitor! 🦦</h3>");
            
            // 3. FISH SCATTER - each fish swims away in different direction
            $("#fish1").stop().animate({
                left: "10px",
                top: "120px",
                width: "280px",
                opacity: 0.7
            }, 600, "swing");
            
            $("#fish2").stop().animate({
                left: "550px",
                top: "230px",
                width: "230px",
                opacity: 0.7
            }, 650, "swing");
            
            $("#fish3").stop().animate({
                left: "650px",
                top: "20px",
                width: "130px",
                opacity: 0.7
            }, 620, "swing");
            
            // 4. INFO BOXES HIGHLIGHT - draw attention with border glow
            $(".info-box").stop().animate({
                borderWidth: "3px",
                borderColor: "#667eea",
                padding: "20px",
                boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)"
            }, 400);
            
            // 5. TITLE BOUNCES for extra attention
            $("#title-output h1").stop().animate({
                fontSize: "2.5em",
                color: "#667eea"
            }, 300);
            
            // 6. AGE GAME HIGHLIGHTS
            $("#age-game").stop().animate({
                backgroundColor: "rgba(102, 126, 234, 0.15)",
                borderWidth: "3px",
                borderColor: "#667eea",
                borderStyle: "solid"
            }, 400);
        },
        
        // MOUSE LEAVE - Return everything to normal state
        function() {
            // Shrink interaction zone back
            $(this).stop().animate({
                padding: "20px 30px",
                fontSize: "18px",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)"
            }, 300);
            
            // 1. OTTER RETURNS TO NORMAL
            $("#otter").stop().animate({
                width: "500px",
                top: "300px",
                left: "200px"
            }, 500);
            
            // 2. SPEECH BUBBLE FADES OUT
            $("#speech").stop().animate({
                opacity: 0,
                top: "200px",
                width: "250px"
            }, 400);
            
            // Restore original voice message
            $("#voice-output").html("<h3>" + otterMessage + "</h3>");
            
            // 3. FISH RETURN TO ORIGINAL POSITIONS
            $("#fish1").stop().animate({
                left: "60px",
                top: "150px",
                width: "300px",
                opacity: 1
            }, 700, "swing");
            
            $("#fish2").stop().animate({
                left: "500px",
                top: "200px",
                width: "250px",
                opacity: 1
            }, 750, "swing");
            
            $("#fish3").stop().animate({
                left: "600px",
                top: "50px",
                width: "150px",
                opacity: 1
            }, 720, "swing");
            
            // 4. INFO BOXES RETURN TO NORMAL
            $(".info-box").stop().animate({
                borderWidth: "2px",
                borderColor: "transparent",
                padding: "15px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }, 400);
            
            // 5. TITLE RETURNS TO NORMAL
            $("#title-output h1").stop().animate({
                fontSize: "2em",
                color: "#1d1184"
            }, 300);
            
            // 6. AGE GAME RETURNS TO NORMAL
            $("#age-game").stop().animate({
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderWidth: "0px"
            }, 400);
        }
    );
    
    // ==========================================================
    // ADDITIONAL INTERACTIONS - Click events for variety
    // ==========================================================
    
    // Click on fish to make them do a flip
    $("#fish1, #fish2, #fish3").click(function() {
        $(this).animate({
            top: "-=40px"
        }, 200).animate({
            top: "+=40px"
        }, 200);
    });
    
    // Double-click otter for a special animation
    $("#otter").dblclick(function() {
        $(this).animate({ rotate: "15deg" }, 150)
               .animate({ rotate: "-15deg" }, 150)
               .animate({ rotate: "10deg" }, 150)
               .animate({ rotate: "0deg" }, 150);
        
        $("#voice-output").html("<h3>Hehe! That tickles! 😄</h3>");
        
        setTimeout(function() {
            $("#voice-output").html("<h3>" + otterMessage + "</h3>");
        }, 2000);
    });
    
    // ==========================================================
    // AGE GUESSING GAME with enhanced animations
    // ==========================================================
    
    var attempts = 0;
    var maxAttempts = 5;
    
    $("#guess-button").click(function() {
        var guess = parseInt($("#age-guess").val());
        attempts++;
        
        // Check if input is valid
        if (isNaN(guess)) {
            $("#game-feedback").html("<span style='color: orange;'>Please enter a number!</span>");
            // Shake animation for invalid input
            $("#age-guess").animate({marginLeft: "-10px"}, 50)
                          .animate({marginLeft: "10px"}, 50)
                          .animate({marginLeft: "-10px"}, 50)
                          .animate({marginLeft: "0px"}, 50);
            return;
        }
        
        // Check the guess
        if (guess === otter.age) {
            $("#game-feedback").html("<span style='color: green; font-weight: bold;'>🎉 Yes! I'm " + otter.age + " years old! You got it in " + attempts + " tries!</span>");
            $("#guess-button").prop("disabled", true);
            $("#age-guess").prop("disabled", true);
            
            // CELEBRATION ANIMATION - otter jumps for joy!
            $("#otter").animate({top: "260px"}, 200)
                      .animate({top: "300px"}, 200)
                      .animate({top: "275px"}, 150)
                      .animate({top: "300px"}, 150);
            
            // All fish celebrate with a flash
            $("#fish1, #fish2, #fish3").animate({opacity: 0.3}, 200)
                                       .animate({opacity: 1}, 200)
                                       .animate({opacity: 0.3}, 200)
                                       .animate({opacity: 1}, 200);
            
            // Speech bubble celebrates too
            $("#speech").stop().animate({
                opacity: 1,
                width: "280px"
            }, 300);
            
            $("#voice-output").html("<h3>You guessed it! 🎊</h3>");
                                       
        } else if (guess < otter.age) {
            $("#game-feedback").html("<span style='color: #1d1184;'>🔼 Too low! Try higher!</span>");
            // Otter shakes head "no"
            $("#otter").animate({left: "190px"}, 100)
                      .animate({left: "210px"}, 100)
                      .animate({left: "200px"}, 100);
        } else {
            $("#game-feedback").html("<span style='color: #1d1184;'>🔽 Too high! Try lower!</span>");
            // Otter shakes head "no"
            $("#otter").animate({left: "210px"}, 100)
                      .animate({left: "190px"}, 100)
                      .animate({left: "200px"}, 100);
        }
        
        // Check if max attempts reached
        if (attempts >= maxAttempts && guess !== otter.age) {
            $("#game-feedback").html("<span style='color: red;'>Game over! I'm actually " + otter.age + " years old!</span>");
            $("#guess-button").prop("disabled", true);
            $("#age-guess").prop("disabled", true);
            
            // Sad animation
            $("#otter").animate({opacity: 0.7}, 500);
            $("#voice-output").html("<h3>Better luck next time! 🦦</h3>");
        }
        
        // Clear input for next guess
        $("#age-guess").val("");
    });
    
    // Allow pressing Enter to submit guess
    $("#age-guess").keypress(function(e) {
        if (e.which === 13) { // Enter key
            $("#guess-button").click();
        }
    });
    
    // Hover effect on guess button
    $("#guess-button").hover(
        function() {
            if (!$(this).prop("disabled")) {
                $(this).stop().animate({
                    padding: "12px 25px",
                    fontSize: "17px"
                }, 200);
            }
        },
        function() {
            $(this).stop().animate({
                padding: "10px 20px",
                fontSize: "16px"
            }, 200);
        }
    );
    
});