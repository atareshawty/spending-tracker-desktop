$('document').on('ready', function() {
  console.log('Hello, user!');
});

$('.logout-button').click(function() {
  localStorage.clear();
  window.location.reload();
});