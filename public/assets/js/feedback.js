$(document).ready(function () {
    
    // Submitting new feedback 
    // =========================================================================================

    $("#submitFeedback").on("click", function (event) {

    event.preventDefault();

    //grab all the form data and put into newPin object
    var newFeedback = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        feedback: $("#feedback").val()
    };

    console.log(newFeedback);
    
    //ajax post call to send new feedback data to db and return success/error message to user
    $.post("/api/feedback", newFeedback)
        .then(function (data) {     
            console.log(data);  

            $("#post-message").text("Thank you for your feedback!").css("color", "green");
                // location.reload();
        })
        .catch(function (error) {
            $("#post-message").text("Oops, that didn't work.");
        });    

        // empty each input box by replacing the value with an empty string
        $("#firstName").val("");
        $("#lastName").val("");
        $("#feedback").val("");
    });
});