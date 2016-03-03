'use strict';
window.Logout = (function() {
  let logoutButton;
  return {
    init: function() {
      logoutButton = $('.logout-button');
      logoutButton.on('click', function() {
        sendLogoutRequest();
      });
    }
  };

  function sendLogoutRequest() {
    let url = `${awsURL}/api/users/logout`;
    let formData = {
      username: localStorage.getItem('username')
    }
    
    $.post({url: url, 500: handle500}, formData, function(sessionID) {
      localStorage.removeItem('username');
      localStorage.removeItem('sessionID');
      window.location.reload();
    }).fail(function() {
      alert('Logout failed... You\'re stuck with us now');
    });
  }
  
  function handle500() {
    alert('Server error. Sorry!');
  }
}());