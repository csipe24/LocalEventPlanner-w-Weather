// Create current date JS
var dateEl = $("#date");
$(dateEl).text(moment(new Date()).format("DDDD, MMM Do YYYY, h:m a"));

// Create time for weather Div

// Create Onclick Function for Search
var search = $("#searchButton");
$(search).on('click', function() {
    event.preventDefault();
    console.log("buttonworks")
    getTicketInfo();

var searchInput =$("#searchInput").val();
    console.log(searchInput);
});
// Changed Name


// Create API call for ticket master
function getTicketInfo(){
var apiKey = "Thva5NLv6RrCnjjzN4yuMRNhH38NosOs";
var url = "https://app.ticketmaster.com/discovery/v2/events.json?";
var city = '';
var zipcode = '';

$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Thva5NLv6RrCnjjzN4yuMRNhH38NosOs",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                console.log(response);
                var eventimage =json.images[0];
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};





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
              console.log(response.results[0].locations[0].adminArea5);
            var weatherCity = response.results[0].locations[0].adminArea5;
//   Create API call to openWeather
function getWeather(){
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
            
            
getWeather();
          });
 });
 

// Store response object into variable

// Append spesific data from object to weather div

      

