$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });

});

function getWeather(){
    var city = $("#city").val();

    if(city != ''){

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial&appid=65c2d57d5385fc26b3814a24c68ff22b";
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data)

                $("#showWeather").html(widget);
                $("#city").val('');
            }

        });
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&time;</a>City field cannot be empty>");
    }
}




