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
      clockTimer.html(timeLength + ":00");
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
      clockTimer.html(timeLength + ":00");
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

    function changeBackground(bgColor, borderStyle, borderColor) {
      $("body").css('background-color', bgColor);
      $(".clock-design").css("border", borderStyle);
      $(".clock-design").css("border-color", borderColor);
    }

    function playBreak() {
      changeBackground('#a2f9b3', '10px dashed', '#a2f9b3');
      timerInSeconds = breakLength * 60;
      var breakClock = setInterval(timer, 1000);
      function timer() {
        timerInSeconds -= 1;
        if (timerInSeconds <= 0){
          buzzer.play();
          clearInterval(breakClock);
          changeBackground('#edb265', '5px solid', '#edb265');
        }
        clockTimer.html(secondsToFormat(timerInSeconds));
      }
    }

    function secondsToFormat(seconds) {
      var hours = Math.floor(timerInSeconds / 3600);
      var minutes = Math.floor(timerInSeconds / 60);
      var sec = Math.floor(timerInSeconds % 3600 % 60);
      var str = '';
      if (hours) {
        str += hours + ":";
      }

      if (minutes < 10) {
        str += '0' + minutes + ':';
      }

      else if (minutes) {
        str += minutes + ':';
      }
      
      if (sec < 10) {
        str += '0' + sec;
      }
      else {
        str += sec;
      }
      
      return str;
    }

    toggle.on("click",function(){
      timerInSeconds = timeLength * 60;
      var clock = setInterval(timer, 1000);
      function timer() {
        timerInSeconds -= 1;
        if (timerInSeconds <= 0){
          buzzer.play();
          clearInterval(clock);
          playBreak();
        }
        clockTimer.html(secondsToFormat(timerInSeconds));
      }
    });
  });

})(jQuery);