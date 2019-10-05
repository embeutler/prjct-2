$("#search").on("click", function() {
  event.preventDefault();
  $.post("api/all", {
    type: "POST",
    name: $("#search-input")
      .val()
      .trim()
  });
});
