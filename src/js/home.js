'use strict';
let awsURL = 'http://ec2-54-172-168-185.compute-1.amazonaws.com';

if (!localStorage.getItem('username') && !localStorage.getItem('userPassword')) {
  $.get('./src/views/login.html', function(data) {
    $('.content').html(data);
    Login.init();
  });
} else {
  $.get('./src/views/templates/user.handlebars', function(source) {
    let username = localStorage.getItem('username');
    let sessionID = localStorage.getItem('sessionID');
    let getUserURL = `${awsURL}/api/users/${username}?sessionID=${sessionID}`;
    fetch(getUserURL, {
      credentials: 'same-origin'
    }).then(function(res) {
      return res.json();
    }).then(function(user) {
      App.setUser(user);
      let userTemplate = Handlebars.compile(source);
      let compiledHTML = userTemplate(App.getUser());
      $('.content').html(compiledHTML);
      App.buildPieChart();
      App.buildTable();
      App.buildIncomeTable();
      App.buildCompareChart();
      Categories.init();
      DateFilter.init();
      Purchases.init();
      Logout.init();
      Refresh.init();
    });    
  });
}
