$(document).ready(function() {
  setTimeout(function() {
    $("#myModal").modal('show');
    setTimeout(function() {
      $("#myModal").modal('hide');
    }, 2000);
  }, 5000);
});
