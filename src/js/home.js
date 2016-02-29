if (!localStorage.getItem('username') && !localStorage.getItem('userPassword')) {
  $.get('./src/views/login.html', function(data) {
    $('.content').html(data);
    App.validateLogin();
  });
} else {
  App.setUpUser();
}