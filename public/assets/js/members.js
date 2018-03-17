$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
    });


    //add button to create new pin 


    
    $("#submit").on("click", function(event){

      event.preventDefault();
      // $("#newPinModal").modal("hide");
      

      //grab all the form data and put into newPin object
      var newPin = {
        name: $("#name").val().trim(),
        description: $("#description").val().trim(),
        language: $("#language").val().trim(),
        snippet: $("#snippet").val().trim()   
      };
      console.log("erer");
      console.log(newPin);
    });

  });
  