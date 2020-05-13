// Create current date JS
var dateEl = $("#date");
$(dateEl).text(moment(new Date()).format("dddd, MMM Do YYYY, h:mm a"));

// Create time for weather Div

// Get Location code
navigator.geolocation.getCurrentPosition((position) => {
console.log(position.coords.latitude, position.coords.longitude);
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
var url = "http://www.mapquestapi.com/geocoding/v1/reverse?";
var apiKey = "MvofEA2Pb5LX3ICTEmaoy3G6Nr4kHa07";
var queryURL = url+"key="+apiKey+"&location="+latitude+","+longitude;
     $.ajax({
          url: queryURL,
          method: "GET"
            }).then(function(response) {
              console.log(response);
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
  });
};


// Store response object into variable

// Append spesific data from object to weather div

      

