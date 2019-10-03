$(document).ready(function() {
  //$(document).on("click", "#search", handleSearch);
  var search = $("#search-input");

  $("#search").on("click", function() {
    console.log(search.val());
  });
});
