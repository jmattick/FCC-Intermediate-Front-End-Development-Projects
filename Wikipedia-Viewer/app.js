$(document).ready(function() {
  var tquery;
  //making enter perform the same task as the search button
  $("#box").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#search-btn").click();
    }
  });
  $("#search-btn").click(function() {
    tquery = $("#box").val();
    console.log(tquery);

    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      tquery +
      "&format=json&callback=?";
    console.log(url);

    $.ajax({
      type: "GET",
      async: false,
      url: url,
      dataType: "json",
      success: function(data) {
        $("#output").html("");
        //used i = 1 because first result was a list of other results
        for (i = 1; i < data[1].length; i++) {
          $("#output").append(
            "<li><a href=" +
              data[3][i] +
              " target='_blank'>" +
              data[1][i] +
              "</a><p>" +
              data[2][i] +
              "</p></li>"
          );
        }
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });
  });
});
