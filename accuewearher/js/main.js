//지도 호출//

var map = new Map();
map.getKakaoMap();

//날씨 호출//
var forecast = new Forecast();
var cityList = ["seoul", "incheon","busan", "gwangju", "jeju", "jeonju"];

$(function() {
    $(".temp").each(function(i) {
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "°C");
    });

    $(".location").on({
        "click" : function() {
            var q = $(this).children(".q").attr("id");
            var redirectURL= "pages/weather_location.html?q=" + q;
            location.href = redirectURL;
        }
    });
});