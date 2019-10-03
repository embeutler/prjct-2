$(document).ready(function() {
  //$(document).on("click", "#search", handleSearch);
  var search = $("#search-input");

  $("#search").on("click", function() {
    console.log(search.val());
  });
});

function getBusinesses() {
  $.get("/api/all", function(req) {
    // for (var i = 0; i < req.legnth; i++) {
    //   console.log(req[i]);
    // }
    console.log("Business", req);
  });
}
