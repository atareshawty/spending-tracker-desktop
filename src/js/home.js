if (!localStorage.getItem('loggedIn')) {
  $.get('./src/views/login.html', function(data) {
    $('.content').html(data);
    App.validateLogin();
    App.validateSignup();
  });
} else {
  alert('You are logged in');
}