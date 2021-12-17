$(document).ready(function() {
  
  // --- our code goes here ---
  $("#tweet-text").on("keyup", function() {
    const charNum = $(this).val().length;
    const number = $(this).siblings("footer").children(".counter").val(140 - charNum);
    console.log(number);
    if (charNum >= 140) {
      number.css({
        
        color: '#FF1654'
       
      });
    } else {
      number.css({
        color:'#000000'
       
      });
    }
  });
});  