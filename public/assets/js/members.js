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
  //=========================================================================================

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
        location.reload();
      })
      .catch(function (error) {
        $("#post-message").text("Oops, that didn't work.");
      });    
    });

  // delete button to delete a pin
  //=========================================================================================
  $("#deleteButton").on("click", function(event){
    console.log("delete");
    event.stopPropagation();
    var id=$("#editForm").data("type");
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "/api/pins/" + id
    }).then(function() {
      window.location.href = "/members";
    });
  });

  // edit button to update a pin
  //=========================================================================================
  $("#editForm").on("submit", function(event){
    event.preventDefault();
    
    console.log(this);
    // var id = $("#editForm").data("type");
    var id=$("#editForm").data("type");
    console.log(id);
    // var newDescription = $("#description").val().trim();
    // console.log(newDescription);
    
    var editedPin = {
      title: $("#title-edit").val().trim(),
      description: $("#description-edit").val().trim(),
      language: $("#language-edit").val(),
      content: $("#content-edit").val().trim(),
      link: $("#link-edit").val().trim(),   
      UserId: parseInt($("#user-id-edit").val().trim())
    };

    console.log(editedPin);

    $.ajax({
      url:"/api/pins/" + id,
      type: "PUT",
      data: editedPin
    }).then(function() {
      window.location.href = "/members";
    });
  });

});