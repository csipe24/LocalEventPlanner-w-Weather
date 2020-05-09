//Listner for on Submit


console.log("Test");
$("#target").submit(function(event){
event.preventDefault();
console.log("Button Pushed");

})

/*
console.log("FUCK");
$("#target").submit(function(event){

    console.log("Yo dawg nice submit");
    
//Prevent Default on submit behavior//
    event.preventDefault();

//Get locally scoped variables//
    var city = 'city'+$("#cityInput").val() +'&';
    var zipCode = 'zipcode'+ $("#zipCode").val() +'&';
    var searchterm = 'searchterm' + $("#searchterm").val() + '&';
    var startdate  = 'startdate'+ $("startdate").value +'&';
    var enddate  = 'enddate'+ $("enddate").value +'&';

    //API Query given inputs
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?city=Bellevue&apikey=Thva5NLv6RrCnjjzN4yuMRNhH38NosOs",
        //url: "https://app.ticketmaster.com/discovery/v2/events.json?"+city+zipCode+searchter+startdate+enddate+"&apikey=Thva5NLv6RrCnjjzN4yuMRNhH38NosOs";
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    console.log(json._embedded);
                    const array1 = json._embedded.events;
                    array1.forEach(element => 
                    console.log(element.name)
                    //console.log(element.image);
                    ) 
                },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                }
    });

})

//Title 
//Description
//Image*/