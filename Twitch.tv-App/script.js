$(document).ready(function() {
  var usernames = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "brunofin",
    "comster404"
  ];
  var urlBase = "https://wind-bow.glitch.me/twitch-api/streams/";
  var urlBaseUsers = "https://wind-bow.glitch.me/twitch-api/users/";
  var urlBaseChannel = "https://wind-bow.glitch.me/twitch-api/channels/";

  $("#online-btn").click(function() {
    $("li").removeClass("hide");
    $(".offline").addClass("hide");
    $(".inactive").addClass("hide");
  });

  $("#offline-btn").click(function() {
    $("li").removeClass("hide");
    $(".online").addClass("hide");
    $(".inactive").addClass("hide");
  });

  $("#all-btn").click(function() {
    $("li").removeClass("hide");
  });

  for (i = 0; i < usernames.length; i++) {
    $.getJSON(urlBase + usernames[i] + "?callback=?", function(data) {
      console.log(data);
      var name = data._links.self;
      name = name.substring(37, name.length);
      if (data.stream !== null) {
        $("#output").append(
          '<li class = "online"><a href="https://www.twitch.tv/' +
            name +
            '" target="blank">' +
            name +
            "</a><p>" +
            data.stream.game +
            "</p></li>"
        );
      } else {
        $.getJSON(urlBaseUsers + name + "?callback=?", function(data2) {
          console.log(data2);
          if (data2.error === "Unprocessable Entity") {
            $("#output").append(
              '<li class = "inactive"><a href="https://www.twitch.tv/' +
                name +
                '" target="blank">' +
                name +
                "</a><p>" +
                data2.message +
                "</p></li>"
            );
          } else if (data2.error === "Not Found") {
            $("#output").append(
              '<li class = "inactive"><a href="https://www.twitch.tv/' +
                name +
                '" target="blank">' +
                name +
                "</a><p>" +
                data2.message +
                "</p></li>"
            );
          } else if (data2.type === "user") {
            $("#output").append(
              '<li class = "offline"><a href="https://www.twitch.tv/' +
                name +
                '" target="blank">' +
                name +
                "</a><p>Offline</p></li>"
            );
          }
        });
      }
    });
  }
});
