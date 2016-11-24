var prompt = require('prompt');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var min = numbers[0];
var max = numbers[numbers.length - 1];
var n = Math.random();
var new_n = (n * max) + 1;
var final_n = Math.floor(new_n);
console.log(final_n);



for (var i = 0; i < 2; i++) {
  prompt.start();
  prompt.get(['guess'], function (err, result) {
    if (err) { return onErr(err); }
    if (result.guess === final_n.toString()) {
      console.log('Correct! The number is: ' + final_n);
      return
    
    }
    else {
      console.log('Sorry try again');
    }
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
}
