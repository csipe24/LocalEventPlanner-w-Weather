//Global Variables//
var apiKey = "Thva5NLv6RrCnjjzN4yuMRNhH38NosOs";



//Get List of Type of Events//
$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=Thva5NLv6RrCnjjzN4yuMRNhH38NosOs",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                console.log(json.classifications.type.name)
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });




var url = "https://app.ticketmaster.com/discovery/v2/events.json?";

var city = 'city='+[json.] +'&'
var zipCode = 'zipcode='[json.]+"&"
var eventClass = 'classificationName='+[json.]+ "&"


$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?"+city+zipCodesize+eventClassapikey+apiKey",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);


                var eventimage =json.images[0];
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });*/