$(document).ready(function() {
    
    // CONFIG
    const CFG = {
        otter: { name: "Oliver", species: "Sea Otter", age: 3, favoriteFood: "sea urchins", personality: "friendly and playful" },
        env: { location: "Monterey Bay", temperature: "55°F", depth: "30 feet", visibility: "clear" },
        msg: {
            title: "Woah there!",
            subtitle: "I never see humans here in the bay! Welcome!",
            default: "just me<br>and my fishies ;)",
            hover: "Yay! A visitor! 🦦",
            win: "You guessed it! 🎊",
            lose: "Better luck next time! 🦦"
        },
        oceanElements: ["kelp forests", "rocky shores", "sandy bottom", "coral reefs", "sea grass"],
        fishTypes: ["salmon", "sardines", "anchovies"],
        maxAttempts: 5
    };
    
    let attempts = 0;
    
    // INITIALIZATION
    $("#title-output").html(`<h1>${CFG.msg.title}</h1>`);
    $("#subtitle-output").html(`<h2>${CFG.msg.subtitle}</h2>`);
    $("#voice-output").html(`<h3>${CFG.msg.default}</h3>`);
    
    $("#character-output").html(`
        <div class='info-box'>
            <h3>Hi! I'm ${CFG.otter.name}, a ${CFG.otter.species}!</h3>
            <p><strong>Age:</strong> ${CFG.otter.age} years old</p>
            <p><strong>Favorite Food:</strong> ${CFG.otter.favoriteFood}</p>
            <p><strong>Personality:</strong> ${CFG.otter.personality}</p>
        </div>
    `);
    
    $("#elements-output").html(`
        <div class='info-box'>
            <h3>Environment Details</h3>
            <p>You're in ${CFG.env.location} where the water is ${CFG.env.temperature} and ${CFG.env.visibility}.</p>
            <p><strong>Ocean Elements:</strong></p>
            <ul>${CFG.oceanElements.map(e => `<li>${e}</li>`).join('')}</ul>
            <p><strong>Fish spotted:</strong> ${CFG.fishTypes.join(", ")}</p>
        </div>
    `);
    
    // HOVER INTERACTION
    $("#interaction-zone").hover(
        function() {
            // Enter
            $("#otter").stop().animate({ width: "550px", top: "270px", left: "220px" }, 400, function() {
                $(this).animate({ top: "280px" }, 150).animate({ top: "270px" }, 150);
            });
            $("#speech").stop().animate({ top: "180px", width: "270px" }, 500);
            $("#voice-output").html(`<h3>${CFG.msg.hover}</h3>`);
            $("#fish1").stop().animate({ left: "10px", top: "120px", width: "280px", opacity: 0.7 }, 600, "swing");
            $("#fish2").stop().animate({ left: "550px", top: "230px", width: "230px", opacity: 0.7 }, 650, "swing");
            $("#fish3").stop().animate({ left: "650px", top: "20px", width: "130px", opacity: 0.7 }, 620, "swing");
            $(".info-box").stop().animate({ borderWidth: "3px", borderColor: "#667eea", padding: "20px", boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)" }, 400);
            $("#title-output h1").stop().animate({ fontSize: "2.5em", color: "#667eea" }, 300);
            $("#age-game").stop().css({ backgroundColor: "rgba(102, 126, 234, 0.15)", borderWidth: "3px", borderColor: "#667eea", borderStyle: "solid" });
        },
        function() {
            // Leave
            $("#otter").stop().animate({ width: "500px", top: "300px", left: "200px" }, 500);
            $("#speech").stop().animate({ top: "200px", width: "250px" }, 400);
            $("#voice-output").html(`<h3>${CFG.msg.default}</h3>`);
            $("#fish1").stop().animate({ left: "60px", top: "150px", width: "300px", opacity: 1 }, 700, "swing");
            $("#fish2").stop().animate({ left: "500px", top: "200px", width: "250px", opacity: 1 }, 750, "swing");
            $("#fish3").stop().animate({ left: "600px", top: "50px", width: "150px", opacity: 1 }, 720, "swing");
            $(".info-box").stop().animate({ borderWidth: "2px", borderColor: "transparent", padding: "15px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }, 400);
            $("#title-output h1").stop().animate({ fontSize: "2em", color: "#1d1184" }, 300);
            $("#age-game").stop().css({ backgroundColor: "rgba(255, 255, 255, 0.95)", borderWidth: "0px" });
        }
    );
    
    // FISH CLICK
    $("#fish1, #fish2, #fish3").click(function() {
        $(this).stop().animate({ top: "-=40px" }, 200).animate({ top: "+=40px" }, 200);
    });
    
    // AGE GAME
    function handleGuess() {
        const guess = parseInt($("#age-guess").val());
        
        if (isNaN(guess)) {
            $("#game-feedback").html("<span style='color: orange;'>⚠️ Please enter a number!</span>");
            $("#age-guess").stop().animate({ marginLeft: "-10px" }, 50).animate({ marginLeft: "10px" }, 50)
                .animate({ marginLeft: "-10px" }, 50).animate({ marginLeft: "0px" }, 50);
            return;
        }
        
        attempts++;
        
        if (guess === CFG.otter.age) {
            $("#game-feedback").html(`<span style='color: green;'>🎉 Yes! I'm ${CFG.otter.age} years old! You got it in ${attempts} ${attempts === 1 ? 'try' : 'tries'}!</span>`);
            $("#guess-button, #age-guess").prop("disabled", true);
            $("#otter").stop().animate({ top: "260px" }, 200).animate({ top: "300px" }, 200).animate({ top: "275px" }, 150).animate({ top: "300px" }, 150);
            $("#fish1, #fish2, #fish3").animate({ opacity: 0.3 }, 200).animate({ opacity: 1 }, 200).animate({ opacity: 0.3 }, 200).animate({ opacity: 1 }, 200);
            $("#voice-output").html(`<h3>${CFG.msg.win}</h3>`);
            
            // Hide age game then show info boxes
            setTimeout(function() {
                $("#age-game").animate({ opacity: 0, transform: "scale(0.8)" }, 400, function() {
                    $(this).hide();
                    // Show info boxes after game disappears
                    $("#character-output").animate({ opacity: 1, transform: "translateY(0)" }, 600);
                    setTimeout(function() {
                        $("#elements-output").animate({ opacity: 1, transform: "translateY(0)" }, 600);
                    }, 300);
                });
            }, 1000);
        } else if (attempts >= CFG.maxAttempts) {
            $("#game-feedback").html(`<span style='color: red;'>❌ Game over! I'm actually ${CFG.otter.age} years old!</span>`);
            $("#guess-button, #age-guess").prop("disabled", true);
            $("#otter").animate({ opacity: 0.7 }, 500);
            $("#voice-output").html(`<h3>${CFG.msg.lose}</h3>`);
        } else {
            const hint = guess < CFG.otter.age ? "🔼 Too low! Try higher!" : "🔽 Too high! Try lower!";
            $("#game-feedback").html(`<span style='color: #1d1184;'>${hint}</span>`);
            $("#otter").stop().animate({ left: "190px" }, 100).animate({ left: "210px" }, 100).animate({ left: "200px" }, 100);
        }
        
        $("#age-guess").val("");
    }
    
    $("#guess-button").click(handleGuess);
    $("#age-guess").keypress(function(e) {
        if (e.which === 13) handleGuess();
    });
});