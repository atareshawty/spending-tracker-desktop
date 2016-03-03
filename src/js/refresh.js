'use strict';
window.Refresh = (function() {
  return {
    init: function() {
      $('.clear-filter').on('click', function() {
        if (!App.isFilterEnabled()) {
          alert('There was no filter to clear');
        } else {
          DateFilter.init();
          App.buildPieChart();
          App.buildTable();
          App.buildIncomeTable();
          App.buildCompareChart();
          App.removeFilterFlag();
        }
      });

      $('.refresh-data').on('click', function() {
        window.location.reload();
      })
    }
  }
}());