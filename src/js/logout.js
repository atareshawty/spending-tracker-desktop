'use strict';
window.Logout = (function() {
  let logoutButton = $('.logout-button');
  return {
    init: function() {
      $('.logout-button').on('click', function() {
        sendLogoutRequest();
      });
    }
  };

  function sendLogoutRequest() {
    debugger;
    let url = `${awsURL}/api/users/logout`;
    let formData = {
      username: localStorage.getItem('username')
    }
    
    $.post(url, formData, function(sessionID) {
      localStorage.removeItem('username');
      localStorage.removeItem('sessionID');
      window.location.reload();
    }).fail(function() {
      alert('Logout failed... You\'re stuck with us now');
    });
  }
}());