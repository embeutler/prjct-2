// Get references to page elements
var $searchText = $("#search-text");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  getBusinesses: function() {
    return $.ajax({
      url: "api/businesses",
      type: "GET"
    });
  }
};
// refreshExamples gets new examples from the db and repopulates the list
var refreshBusinesses = function() {
  API.getBusinesses().then(function(data) {
    var $business = data.map(function(req) {
      var $a = $("<a>")
        .text(req.text)
        .attr("href", "/example/" + req.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": req.id
        })
        .append($a);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($business);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  console.log($searchText);
  var search = {
    text: $searchText.val().trim()
  };

  if (!search.text) {
    alert("You must enter an Search!");
    return;
  }

  API.getBusinesses(search).then(function() {
    refreshBusinesses();
  });

  $searchText.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
