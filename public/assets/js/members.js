$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
    });

    // on-click function on the Add Pin button to display the New Pin modal


    //add button to create new pin

    $("#addPin").on("click", function(event){
      event.preventDefault();
      $("#newPinModal").modal("toggle");
    });

    $("#submit").on("click", function(event){

      event.preventDefault();

      //grab all the form data and put into newPin object
      var newPin = {
        $("#name").val().trim(),
        $("#description").val().trim(),
        $("#language").val().trim(),
        $("#snippet").val().trim()
      };
      console.log(newPin);
    });

  });
  