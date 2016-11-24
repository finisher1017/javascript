  var prompt = require('prompt');

  

  prompt.start();

  prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    if (result.username === 'Jonathan' && result.email === 'finisher1017@gmail.com') {
      console.log('  Username: ' + result.username);
      console.log('  Email: ' + result.email);
    }
    else {
      console.log('Invalid User.')
    }
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
