(function($) {
  $(function(){
    var toggle = $("#toggle-timer"),
      breakTime = $("#break-time"),
      length = $("#timer-length"),
      decLength = $("#dec-length"),
      incLength = $("#inc-length"),
      decBreak = $("#dec-break"),
      incBreak = $("#inc-break"),
      clockTimer = $("#clock-timer");
    var timeLength = parseInt(length.html()),
      minimumLength = 1,
      breakLength = parseInt(breakTime.html()),
      timerInSeconds = timeLength * 60,
      type = true, // true = session timer, false = break timer
      timerOn = false,
      displayTime = '',
      buzzer = new Audio('');
    
    decLength.on("click", function(){
      if (timeLength > 5) {
        timeLength -= 5;
      }
      else {
        timeLength = 5;
      }
      timerInSeconds = timeLength * 60;
      length.html(timeLength);
    });

    incLength.on("click", function(){
      if (timeLength < 60) {
        timeLength += 5;
      }
      else {
        timeLength = 60;
      }
      timerInSeconds = timeLength * 60;
      length.html(timeLength);
    });

    decBreak.on("click", function(){
      if (breakLength > 1){
        breakLength--;
      }
      else {
        breakLength = 1;
      }
      breakTime.html(breakLength);
    });

    incBreak.on("click", function(){
      if (breakLength < 20){
        breakLength++;
      }
      else {
        breakLength = 20;
      }
      breakTime.html(breakLength);
    });

    function changeBackground() {
      $("body").css('background-color', '#a2f9b3');
      $(".clock-design").css("border", "10px dashed #a2f9b3");
    }

    function playBreak() {
      changeBackground();
      timerInSeconds = breakLength * 60;
      var breakClock = setInterval(timer, 1000);
      function timer() {
        timerInSeconds -= 1;
        if (timerInSeconds <= 0){
          buzzer.play();
          clearInterval(breakClock);

        }
        clockTimer.html(timerInSeconds);
      }
    }

    toggle.on("click",function(){
      var clock = setInterval(timer, 1000);
      function timer() {
        timerInSeconds -= 1;
        if (timerInSeconds <= 0){
          buzzer.play();
          clearInterval(clock);
          playBreak();
        }
        clockTimer.html(timerInSeconds);
      }
    });
  });

})(jQuery);