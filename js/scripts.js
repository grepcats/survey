$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var userDob = $("input#dob").val();
    var userAnimal = $("input:radio[name=animal]:checked").val();
    var faveColor = $("#fave-color").val();
    var userTrack = $("#track").val();

    $("#answers").append('<li class="nameLabel">'+userName+"</li>")
    $("#answers").append("<li>"+userDob+"</li>");
    $("#answers").append("<li>"+userAnimal+"</li>");
    $("#answers").append("<li>"+faveColor+"</li>");
    $("#answers").append("<li>"+userTrack+"</li>");

  //  $("#answers").mouseover(function(){
  //    $("#answers").css("background-color", faveColor);
  //  });
//    $("#answers").mouseout(function(){
  //    $("#answers").css("background-color", "white");
  });
  $(".nameLabel").click(function(){
    console.log("hello");
  });
});
