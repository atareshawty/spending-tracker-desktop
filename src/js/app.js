var App = (function($) {
  return {
    validateLogin: validateLogin,
    setUpUser: setUpUser
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
  
  $('input.login-button').click(function() {
    sendLogin(username, password);    
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error
  }
}

function sendLogin(username, password) {
  var formData = {
    username: username.val(),
    password: password.val()
  };
  
  $.post('http://localhost:3000/api/users/login', formData, function(data) {
    alert('Login successful');
    localStorage.setItem('username', username.val());
    localStorage.setItem('userPassword', password.val());
    window.location.reload();
  }).fail(function(err) {
    username.val('');
    password.val('');
    $('input.login-button').attr('disabled', true);
    alert('Username or password is not correct. Try again!');
  });
}

function setUpUser() {
  $.get('./src/views/templates/user.handlebars', function(userSource) {
    var username = localStorage.getItem('username');
    username.toString = function() {
      return 'atareshawty';
    }
    var context = {
      'username': username,
      'message': 'Hey there!'
    }
    var template = Handlebars.compile(userSource);
    var userHTML = template(context);
    $('.content').html(userHTML);
  });
}