'use strict';
window.Refresh = (function() {
  return {
    init: function() {
      $('.clear-filter').on('click', function() {
        if (App.getUserSpending() === App.getFilteredSpending()) {
          alert('There was no filter to clear');
        } else {
          DateFilter.init();
          App.buildTable();
          App.buildIncomeTable();
          App.buildCompareChart();          
        }
      });
      
      $('.refresh-data').on('click', function() {
        window.location.reload();
      })
    }
  }
}());