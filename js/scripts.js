$(document).ready(function(){
  var numAddr = 0;
  $("form#survey").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var userDob = $("input#dob").val();
    var userAnimal = $("input:radio[name=animal]:checked").val();
    var faveColor = $("#fave-color").val();
    var userTrack = $("#track").val();

    numAddr++;

    $("#answers").append("<ul class='num"+numAddr+"'>");
    $(".num"+numAddr).append('<li class="colorLabel nameLabel'+numAddr+'">'+userName+"</li>");
    $(".num"+numAddr).append("<li class='child"+numAddr+"'>"+userDob+"</li>");
    $(".num"+numAddr).append("<li class='child"+numAddr+"'>"+userAnimal+"</li>");
    $(".num"+numAddr).append("<li class='child"+numAddr+"'>"+faveColor+"</li>");
    $(".num"+numAddr).append("<li class='child"+numAddr+"'>"+userTrack+"</li>");

    $(".colorLabel").click(function() {
      $(this).siblings().toggle();
    });
  //  $("#answers").mouseover(function(){
  //    $("#answers").css("background-color", faveColor);
  //  });
//    $("#answers").mouseout(function(){
  //    $("#answers").css("background-color", "white");
  });

});
