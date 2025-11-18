$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append("<div>" +crName + ", " +crColor + ", " +crEyesNum + "</div> ");
        }

        // remove the name after it's added
        $("#crName").val("");

    });
});
