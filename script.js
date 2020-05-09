// Create current date JS
var dateEl = $("#date");
$(dateEl).text(moment(new Date()).format("DDDD, MMM Do YYYY, h:m a"));

// Create dates for weather Div
var date1 = $("#date1");
var date2 = $("#date2");
var date3 = $("#date3");
var date4 = $("#date4");
var date5 = $("#date5");

$(date1).text(moment(new Date()).add(1, 'd').format("ddd"));
$(date2).text(moment(new Date()).add(2, 'd').format("ddd"));
$(date3).text(moment(new Date()).add(3, 'd').format("ddd"));
$(date4).text(moment(new Date()).add(4, 'd').format("ddd"));
$(date5).text(moment(new Date()).add(5, 'd').format("ddd"));


// Create Onclick Function for Search

// Changed Name


// Create API call for ticket master

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
                var eventimage =json.images[0];
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });



//   Create API call to openWeather 
var url = "https://api.openweathermap.org/data/2.5/forecast?";
var city = "seattle";
var zipcode = "98101";
var apiKey = "101700968986c9ab530374c4e3041d7b";

var queryURL = url+"q="+city+"&zip="+zipcode+"&appid="+apiKey;

   $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {
      console.log(response);
      });



// Get Location code

navigator.geolocation.getCurrentPosition((position) => {
   console.log(position.coords.latitude, position.coords.longitude);
 });

function getLocation(){
   var url = "http://www.mapquestapi.com/geocoding/v1/reverse?";
   var apiKey = "MvofEA2Pb5LX3ICTEmaoy3G6Nr4kHa07";
   var latitude = "47.445134";
   var longitude ="-122.161948";
   var queryURL = url+"key="+apiKey+"&location="+latitude+","+longitude;

     $.ajax({
             url: queryURL,
             method: "GET"
           }).then(function(response) {
             console.log(response.results[0].locations[0].adminArea5);
           });
};

// Store response object into variable

// Append spesific data from object to weather div

      

