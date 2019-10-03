$(document).ready(function() {
  //$(document).on("click", "#search", handleSearch);
  var search = $("#search-input");

  $("#search").on("click", function() {
    getBusinesses();
  });

  // This function grabs businesses from the database
  function getBusinesses() {
    $.get("/api/all", function(req) {
      for (var i = 0; i < req.length; i++) {
        if (search.val() === req[i].name) {
          console.log(req[i].name);
          for (var j = 0; j < req[i].Reviews.length; j++) {
            if (req[i].Reviews[j].stars < 3)
              console.log(req[i].Reviews[j].text);
          }
        }
      }
    });
  }
});
