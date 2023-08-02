function countdownTimer(seconds: number): number {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        console.log(i);
      }, (seconds - i) * 1000);
    }
    return setTimeout(function() {
      console.log("Time's up!");
    }, (seconds + 1) * 1000);
  }
  
  const seconds = 10; // Change this value to set the countdown time
  const timerId = countdownTimer(seconds);
  