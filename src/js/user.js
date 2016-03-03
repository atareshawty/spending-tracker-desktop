/* global fetch */
'use strict';

var username = localStorage.getItem('username');
var sessionID = localStorage.getItem('sessionID');
var getSpendingUrl = `${awsURL}/api/users/${username}?sessionID=${sessionID}`;
console.log(getSpendingUrl);
debugger;
//fetch user from remote and fill app with it
fetch(getSelection, {
  credentials: 'same-origin'
}).then(function(res) {
  return res.json();
}).then(function(user) {
  App.setUser(user);
  var userTemplate = Handlebars.templates['user_template'];
  var compiledHTML = userTemplate(App.getUser());
  $('.user-content-placeholder').html(compiledHTML);
  App.buildPieChart();
  App.buildTable();
  App.buildIncomeTable();
  App.buildCompareChart();
  Categories.init();
  DateFilter.init();
  Purchases.init();
}).catch(function(error) {
  alert('Error!', error);
});

$('.logout-button').click(function() {
  var postData = {
    username: localStorage.getItem('username')
  };
  $.post(`${awsURL}/api/users/logout`, postData, function(data) {
    localStorage.clear();
    window.location.reload();
  }).fail(function(err) {
    alert('Sorry, logout failed, try again');
  });
});

$('.get-spending-button').click(function() {
  let username = localStorage.getItem('username');
  let sessionID = localStorage.getItem('sessionID');
  let getSpendingUrl = `${awsURL}/api/spending/${username}?sessionID=${sessionID}`;

  fetch(getSpendingUrl,  {
    credentials: 'same-origin'
  }).then(function(response) {
    return response.json();
  }).then(function(spending) {
    $('.spending-div').html(spending.total);
  }).catch(function(error) {
    console.log(error);
  });
});
