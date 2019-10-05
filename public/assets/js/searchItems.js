$(document).ready(function() {
  //$(document).on("click", "#search", handleSearch);
  var search = $("#search-input");
  
  $("#search").on("click", function() {
    event.preventDefault();
    $.post("api/all", {
      type: "POST",
      name: $("#search-input")
        .val()
        .trim()
    });
  });