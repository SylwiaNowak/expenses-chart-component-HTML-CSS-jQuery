var today = new Date().getDay() - 1;

var jsonData = '[{"day": "mon", "amount": 17.45}, {"day": "tue", "amount": 34.91}, {"day": "wed", "amount": 52.36}, {"day": "thu", "amount": 31.07}, { "day": "fri", "amount": 23.39}, {"day": "sat", "amount": 43.28}, {  "day": "sun", "amount": 25.48}]';


var myJSONObj = JSON.parse(jsonData);


$(document).ready(function() {

    $(".bar").each(function(index, oneBar) {
      $(oneBar).height((200*Math.floor(myJSONObj[index].amount))/100);

      if (index == today) {
        $(oneBar).addClass("blueBar");
      }
      $(oneBar).on("mouseenter", function() {
        $(this).addClass("barIndex");
        $(this).attr("title", ((100*(myJSONObj[index].amount))/100)); 
      });
      $(oneBar).on("mouseleave", function() {
        $(this).removeClass("barIndex");
      });
    });
});