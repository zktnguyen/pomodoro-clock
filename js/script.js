(function($) {
  var toggle = $("#toggle-timer"),
    timer = $("#clock-timer"),
    breakTime = $("#break-time"),
    length = $("#timer-length")
    decLength = $("#dec-length"),
    incLength = $("#inc-length"),
    decBreak = $("#dec-break"),
    incBreak = $("#inc-break");
  var timeRemaining = parseFloat(length.html()),
    minimumLength = 1,
    breakLength = parseFloat(breakTime.html()),
    timerInSeconds = timeRemaining * 60,
    timerType = "S", // "S" = regular timer, "B" = break timer
    timerOn = false;

  function beginTimer() {

  }

  function stopTimer() {

  }


  toggle.on("click",function(e){
    if (!timerOn){
      beginTimer();
    }
    else {
      stopTimer();
    }
  });
  
  
    
  
})(jQuery);