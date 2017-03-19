$(document).ready(function(){
  var content;
  var author;
  $.ajaxSetup({ cache: false });
  
   $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  content = a[0].content;
  content = content.replace('<p>', '');
  content = content.replace('</p>', '');
  content = content.replace(/(\r\n|\n|\r)/gm,"").trim();
  author = a[0].title;   
  $("#quote").append(a[0].content + "<p>— " + a[0].title + "</p>")
}); 
  
  $("#quote-btn").on("click", function(){
  
    $("#quote").empty();
    
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  content = a[0].content;
  content = content.replace('<p>', '');
  content = content.replace('</p>', '');
  content = content.replace(/(\r\n|\n|\r)/gm,"").trim();
  author = a[0].title;
  $("#quote").append(a[0].content + "<p> — " + a[0].title + "</p>")
}); 
  });
 $("#twitter-share").click(function(){
   window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + content + '" -' +author), '_blank');
 }); 
 
});
