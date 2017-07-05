$(document).ready(function(){
  var tempC;
  var tempF;
  var locat;
  var cond;
  var w;
//button   
  var celsius = true;
 $('#unit').click(function(){
   if (celsius) {
     $("#temp").html(tempF + " &deg;F");
     celsius = false;
   } else { 
     $("#temp").html(tempC + " &deg;C");
     celsius = true;
     
   }
 }) ;
  
var getIP = 'http://ip-api.com/json/';
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
$.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units: 'metric',
        APPID: 'dba9197e5e97757c94895b1b199b7acf'
    }).done(function(weather) {
        console.log(weather);
        tempC = weather['main']['temp'];
        console.log(tempC);
        tempC = tempC.toFixed(1);
        tempF = 1.8*tempC + 32;
        tempF = tempF.toFixed(1);
        $("#temp").html(tempC + " 	&deg; C");
      
      
        locat = weather['name'];
        console.log(locat);
        $("#location").append(locat);
        cond = weather['weather'][0]['main'];
        console.log(cond);
        $("#conditions").append(cond);
      //toggle button
      
          
        //the conditional statement needs to be inside here 
          if (tempC < -10) {
            $("#sassy").append(response[0]);
            $("#gif").append('<img target = "_blank" src = "https://media.giphy.com/media/LNiAtHqX9LCYE/giphy.gif">');
          } else if (tempC < 13) {
             $("#gif").append('<img target = "_blank" src = "https://media.giphy.com/media/nmXzfuNWmGzTi/giphy.gif">');
            $("#sassy").append(response[1]);           
          } else if (tempC < 22) {
             $("#gif").append('<img target = "_blank" src = "http://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/f/f5/Adore-delano-party-gif.gif/revision/latest?cb=20160220020132">');          
             $("#sassy").append(response[2]);                      
          } else if (tempC < 32) {
            $("#gif").append('<img target = "_blank" src = "https://media.giphy.com/media/26BkNItrjPoIhB4Bi/giphy.gif">'); 
            $("#sassy").append(response[3]);
             
          } else if (tempC >= 32) {
            $("#sassy").append(response[4]);
             $("#gif").append('<img target = "_blank" src = "https://media.giphy.com/media/UJT6SY6AKcoxy/giphy.gif">');
            
          };
  
    });     
});
  //var response = ["Cold AF", "Cold", "Okay", "Hot", "Hot AF"];
  

  
   
});