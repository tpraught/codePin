$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  
  var userId = "";
  
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.name);
    var userId = data.id;
    console.log(userId);
  });


  //add button to create new pin 

  $("#newForm").on("submit", function (event) {

    event.preventDefault();

    //grab all the form data and put into newPin object
    var newPin = {
      title: $("#title").val().trim(),
      description: $("#description").val().trim(),
      language: $("#language").val(),
      content: $("#content").val().trim(),
      link: $("#link").val().trim(),
      UserId: parseInt($("#user-id").val().trim())
    };
    console.log(newPin);
    //ajax post call to send new pin data to db and return success/error message to user
    $.post("/api/pins", newPin)
      .then(function (data) {
        var id = data.id;
        console.log(id);
              
        $("#post-message").text("Successfully posted!").css("color", "green");
        // var dbId = data.id
        // location.reload();
      })
      .catch(function (error) {
        $("#post-message").text("Oops, that didn't work.");
      });    
    });

    ///ajax update call
    //event handler goes here. need to trigger modal via edit buttons
    
    // $.put("/api/pins", newPin)
    // .then(function(data){
    //   $("#post-message").text("Successfully updated.").css("color", "green");
    // })
    // .catch(function(error){
    //   $("#post-message").text("Your pin was not updated.").css("color", "red");
    // });

$("#editForm").on("submit", function(event){
  
  event.preventDefault();
  
  console.log(this);
  // var id = $("#editForm").data("type");
  var id=$("#editForm").data("type");
  console.log(id);
  // var newDescription = $("#description").val().trim();
  // console.log(newDescription);
  
  var editedPin = {
    title: $("#title").val().trim(),
    description: $("#description").val().trim(),
    language: $("#language").val().trim(),
    content: $("#content").val().trim(),
    link: $("#link").val().trim(),   
    UserId: $("#user-id").val().trim()
  };


  console.log(editedPin);

  $.ajax({
    url:"/api/pins/" + id,
    type: "PUT",
    data: editedPin,
    success: function(data){
      $("#post-message").text("Successfully updated.").css("color", "green");
    }
  });

  

  
    //   $.put("/api/pins", editedPin)
    // .then(function(data){
    //   $("#post-message").text("Successfully updated.").css("color", "green");
    // })
    // .catch(function(error){
    //   $("#post-message").text("Your pin was not updated.").css("color", "red");
    // });


})


  });