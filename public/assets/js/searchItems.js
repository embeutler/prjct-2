$(document).ready(function() {
  //$(document).on("click", "#search", handleSearch);

  $("#search").on("click", function(event) {
    console.log(event);
  });

  function handleSearch(event) {
    event.preventDefalt();
    console.log(event);
  }
});
