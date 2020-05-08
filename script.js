
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