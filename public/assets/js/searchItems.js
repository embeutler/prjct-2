$(document).ready(function() {
  //Getting references to the business name input
  var searchInput = $("#business-name");
  //  var businessList = $("tbody");
  //  var businessContainer = $(".businesses-container");

  //Adding event listeners to the form
  $(document).on("search", "#search-form", handleSearhFormSubmit);

  //Getting the initial list of businesses
  getBusinesses();

  function handleSearhFormSubmit(event) {
    event.preventDefault();
    console.log("You are here 1!");
    console.log(event);
    //Dont do anything if the search field is empty
    if (
      !searchInput
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
  }

  //   // Functions for retrieving a business and rendering it to the page
  //   function getBusinesses() {
  //     $.get("/api/bussinesses", function(data) {
  //         console.log("You are here 1!")
  //         console.log("You are here 1!")
  //      var rowsToAdd = [];
  //       for (var i = 0; i < data.length; i++) {
  //         rowsToAdd.push(createBusinessRow(data[i]));
  //       }
  //       renderBusinessReviews(rowsToAdd);
  //       businessName.val("");
  //     });
  //   }

  //   Function for rendering the list of businesses to the page
  //  function renderBusinessReviews(row) {
  //     businessList
  //       .children()
  //       .not(":last")
  //       .remove();
  //     businessContainer.children(".alert").remove();
  //     if (row.length) {
  //       console.log(rows);
  //       businessList.prepend(rows);
  //     } else {
  //       renderEmpty();
  //     }
  //   }

  //   Function for handleing what to render when there are no businesses
  //  function renderEmpty() {
  //     var alertDiv = $("<div>");
  //     alertDiv.addClass("alert alert-danger");
  //     alertDiv.text("You must Search for a Business");
  //     businessContainer.append(alertDiv)
  //   }
});
