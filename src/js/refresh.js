'use strict';
window.Refresh = (function() {
  return {
    init: function() {
      $('.refresh-button').on('click', function() {
        window.location.reload();
      })
    }
  }
}());