$(document).ready(function() {
  $(document).on("click", ".searchTerm", handleSearch);

  function handleSearch(event) {
    console.log(event);
  }
});
