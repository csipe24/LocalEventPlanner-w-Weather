// Create current date JS
var dateEl = $("#date");
$(dateEl).text(moment(new Date()).format("dd, MMM Do, h:mm a"));

setInterval(function(){
$(dateEl).text(moment(new Date()).format("dd, MMM Do, h:mm a"));
},60000);

getFirstInfo();
// API Call to Start Page
function getFirstInfo(){
  var apiKey = "Thva5NLv6RrCnjjzN4yuMRNhH38NosOs";
  var startDateTime = "2020-05-15T13:37:22-07:00";
  var endDateTime = "2021-01-15T13:37:22-07:00";
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=rap&startDateTime="+startDateTime+"&endDateTime="+endDateTime+"&apikey="+apiKey;
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
      console.log(response._embedded.events);
      for(i=response._embedded.events.length; i<10; i++){
      $("#div"+(i+1)).css("display", "none");
      };
      
      for(i=0; i<response._embedded.events.length; i++){
      $("#div"+(i+1)).css("display", "flex");
      var eventPic = response._embedded.events[i].images[0].url;
      var eventName = response._embedded.events[i].name;
      var eventDes = response._embedded.events[i].dates.start.localDate;
      var eventLink = response._embedded.events[i].url;

      $("#pic"+(i+1)).attr("src", eventPic);
      $("#pic"+(i+1)).addClass("link");
  
      $("#pic"+(i+1)).css({"width": "100%", "height": "80%"});
      $("#name"+(i+1)).html(eventName);
  
      $("#name"+(i+1)).attr("href", eventLink);
      $("#des"+(i+1)).text(eventDes);
      };
    })
  };

// Get Location code
navigator.geolocation.getCurrentPosition((position) => {
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
var url = "http://www.mapquestapi.com/geocoding/v1/reverse?";
var apiKey = "MvofEA2Pb5LX3ICTEmaoy3G6Nr4kHa07";
var queryURL = url+"key="+apiKey+"&location="+latitude+","+longitude;
     $.ajax({
          url: queryURL,
          method: "GET"
            }).then(function(response) {
          console.log(response.results[0].locations[0].adminArea5);
          var weatherCity = response.results[0].locations[0].adminArea5;
          getWeather(weatherCity);
          $("#locationEl").append(weatherCity);
          });
        });
        
//Create API call to openWeather
function getWeather(weatherCity){
  var url = "https://api.openweathermap.org/data/2.5/forecast?";
  var apiKey = "101700968986c9ab530374c4e3041d7b";
  var queryURL = url+"q="+weatherCity+"&appid="+apiKey;
     $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        var wDiv= $("#weather-div");
        $(wDiv).text("Five Day Forecast:");
        for(i=0; i<5; i++){
          var date = (moment(new Date()).add(i+1, 'd').format("dddd"));
          var img =  response.list[i].weather[0].icon;
          var imgURL = "https://openweathermap.org/img/wn/"+img+"@2x.png";
          var weatherIcon = new Image();
          weatherIcon.src = imgURL;
          weatherIcon.style.width = "60px";
          weatherIcon.style.height = "50px";
          weatherIcon.style.position = "inherit";

          var weathDes = response.list[i].weather[0].main;
          var cityTemp = ((Math.floor(response.list[i].main.temp - 273.15)*9/5+32));
          var cityWeather = $("<span></span>").text(date+"   "+cityTemp+"°F"+"   "+weathDes);
      
          $(wDiv).append(cityWeather);
          $(wDiv).append(weatherIcon);
 
        };
      });
    };


// Create Onclick Function for Search
var search = $("#searchButton");
$(search).on('click', function() {
    event.preventDefault();
    getTicketInfo();
});

// Create API call for ticket master
function getTicketInfo(){
// var weatherCity = $("#locationEl").text();
var weatherCity = "seattle";
var url = "https://app.ticketmaster.com/discovery/v2/events.json?";
var keyword =$("#searchInput").val();
var apiKey = "Thva5NLv6RrCnjjzN4yuMRNhH38NosOs";
var startDateTime = moment().format("YYYY-MM-DDTHH:mm:ssZ")
var queryURL = url+"keyword="+keyword+"&city="+weatherCity+"&size=10"+"&startDateTime="+startDateTime+"&apikey="+apiKey;
console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {
    for(i=response._embedded.events.length; i<10; i++){
    $("#div"+(i+1)).css("display", "none");};
    
    for(i=0; i<response._embedded.events.length; i++){
    $("#div"+(i+1)).css("display", "flex");};

    var events = response._embedded.events;
    console.log(events);

    for(var i = 0; i < events.length; i++){
      var eventPics = events[i].images;
      
      for(var j = 0; j < eventPics.length; j++){
        var eventPicWidth = 0;
        var eventPicURL = "";
        if(eventPicWidth < eventPics[j].width)
        {eventPicURL = eventPics[j].url;
        };
  
    
    var eventName = response._embedded.events[i].name;
    var eventDes = response._embedded.events[i].dates.start.localDate;
    var eventPic = eventPicURL;
    var eventLink = response._embedded.events[i].url;

    $("#pic"+(i+1)).attr("src", eventPic);
    $("#pic"+(i+1)).addClass("link");

    $("#pic"+(i+1)).css({"width": "100%", "height": "80%"});
    $("#name"+(i+1)).html(eventName);

    $("#name"+(i+1)).attr("href", eventLink);
    $("#des"+(i+1)).text(eventDes);
  };
};
});

};

$(".title").click(function() {
  var goToTicket = $(this).attr('href');
  console.log(goToTicket);
  window.location = goToTicket;
  console.log("Pic Test");
});
