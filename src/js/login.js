'use strict';
window.Login = (function() {
  let username = $('input.login-username');
  let password = $('input.login-password');
  let loginButton = $('input.login-button');
  return {
    init: function() {
      username = $('input.login-username');
      password = $('input.login-password');
      loginButton = $('input.login-button');
      validateLogin();
      loginButton.click(function() {
        sendLoginRequest();
      });
    }
  };
  
  function validateLogin() {
    $('input.login-username, input.login-password').on('keyup', function() {
      if (username.val().length > 0 && password.val().length > 0) {
        loginButton.attr('disabled', false);
      } else {
        loginButton.attr('disabled', true);
      }      
    });
  }
  
  function sendLoginRequest() {
    debugger;
    let usernameVal = username.val();
    let passwordVal = password.val();
    let formData = {
      username: usernameVal,
      password: passwordVal
    };
    let url = `${awsURL}/api/users/login`;
    $.post(url, formData, function(sessionID) {
      localStorage.setItem('username', usernameVal);
      localStorage.setItem('password', passwordVal);
      localStorage.setItem('sessionID', sessionID);
      window.location.reload();
    }).fail(function() {
      username.val('');
      password.val('');
      loginButton.attr('disabled', true);
      alert('Username or password is incorrect. Try again');
    });
  }
}());