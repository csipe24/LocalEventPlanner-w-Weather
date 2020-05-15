// Create current date JS
var dateEl = $("#date");
$(dateEl).text(moment(new Date()).format("dddd, MMM Do YYYY, h:mm a"));

// Create time for weather Div

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
        console.log(response);
        for(i=0; i<5; i++){
          var wDiv= $("#weather-div");
          var cityTemp = ("Temp: "+(Math.floor(response.list[i].main.temp - 273.15)*9/5+32)+"°F");
          var cityHumidity = response.list[i].main.humidity;
          var cityWindSpeed = response.list[i].wind.speed;
          $(wDiv).append(cityTemp+"°F");
          $(wDiv).append("Humidity: "+cityHumidity+"%");
          $(wDiv).append("Wind Spd: "+cityWindSpeed+"MPH");
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
function getTicketInfo(weatherCity){
weatherCity = "seattle";
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
    console.log(response._embedded.events);
  for(i=0; i<10; i++){
    var eventPic = response._embedded.events[i].images[0].url;
    var eventName = response._embedded.events[i].name;
    var eventDes = response._embedded.events[i].dates.start.localDate;
    var eventLink = response._embedded.events[i].url;

    $("#pic"+(i+1)).attr("src", eventPic);
    $("#pic"+(i+1)).css({"width": "100%", "height": "80%"});
    $("#name"+(i+1)).html(eventName);
    $("#des"+(i+1)).text(eventDes);

    };
  })
};


// Store response object into variable

// Append spesific data from object to weather div

      

