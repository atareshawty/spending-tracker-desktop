var App = (function($) {
  return {
    validateLogin: validateLogin,
    validateSignup: validateSignup
  };
}($));

function validateLogin() {
  var username = $('input.login-username');
  var password = $('input.login-password');
  $('input.login-username, input.login-password').on('keyup', function() {
    if (username.val().length > 0 && password.val().length > 0) {
      $('input.login-button').attr('disabled', false);
    } else {
      $('input.login-button').attr('disabled', true);
    }      
  });
}

function validateSignup() {
  var username = $('input.signup-username');
  var password = $('input.signup-password');
  $('input.signup-username, input.signup-password').on('keyup', function() {
    if (username.val().length > 0 && password.val().length > 0) {
      $('input.signup-button').attr('disabled', false);
    } else {
      $('input.signup-button').attr('disabled', true);
    }      
  });
}