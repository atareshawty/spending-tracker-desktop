$(document).ready(function() {
  var username = $('input#username');
  var password = $('input#password');
  $('input#username, input#password').on('keyup', function() {
    if (username.val().length > 0 && password.val().length > 0) {
      $('input[type=submit]').attr('disabled', false);
    } else {
      $('input[type=submit]').attr('disabled', true);
    }      
  });
});