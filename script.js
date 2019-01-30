/*
api key: 82df6dbb919a7ea686a81d52e66bb3bb
*/
$(document).ready(function(){
    //global variables
    var api = 'https://api.apixu.com/v1/current.json?key=dee47108c3c84e20b81190816161511&q=amsterdam';
    var tempUnits = "celsius";
    var speedUnits = "kph";

    //getting temperature data from api
    function getTemperature(tempUnits){
        $.getJSON(api, function(data){
            if (tempUnits =="celsius"){
                var tempSulfix = "C";
                var temp = (data.current.temp_c);
                var feelslike = (data.current.feelslike_c);
            }
            else if (tempUnits == "farenheit"){
                var tempSulfix = "F";
                var temp = (data.current.temp_f);
                var feelslike = (data.current.feelslike_f);
            }
            document.getElementById("pTemp").innerHTML = temp + "&deg" + tempSulfix;
            document.getElementById("pFeel").innerHTML = feelslike + "&deg" + tempSulfix;
        });
    };
    //getting windspeed data from api
    function getWindSpeed(speedUnits){
        $.getJSON(api, function(data){
            //var humidity = (data.current.humidity);
            if (speedUnits == "kph"){
                var speedSulfix = " Kph";
                var windSpeed = (data.current.wind_kph);
            }
            else if (speedUnits == "mph"){
                var speedSulfix = " Mph";
                var windSpeed = (data.current.wind_mph);
            }
            //document.getElementById("pHumidity").innerHTML = humidity + " %";
            document.getElementById("pWindSpeed").innerHTML = + windSpeed + speedSulfix;
        });
    };
    // getting Humidity, Wind direction & weather icon
    function getWeather(){
        $.getJSON(api, function(data){
            var windDirectionData = data.current.wind_dir;
            var weatherIcon = data.current.condition.icon;
            var WindDirection = "";
            switch (windDirectionData){
                case "N":
                    WindDirection = "North";
                    break;
                case "NbE":
                    WindDirection = "North by East";
                    break;
                case "NNE":
                    WindDirection = "North-northeast";
                    break;
                case "NEbN":
                    WindDirection = "Northeast by north";
                    break;
                case "NE":
                    WindDirection = "Northeast";
                    break;
                case "NEbE":
                    WindDirection = "North";
                    break;
                case "ENE":
                    WindDirection = "East-northeast";
                    break;
                case "EbN":
                    WindDirection = "East by north";
                    break;
                case "E":
                    WindDirection = "East";
                    break;
                case "EbS":
                    WindDirection = "East by south";
                    break;
                case "ESE":
                    WindDirection = "East-southeast";
                    break;
                case "SEbE":
                    WindDirection = "Southeast by east";
                    break;
                case "SE":
                    WindDirection = "Southeast";
                    break;
                case "SEbS":
                    WindDirection = "Southeast by south";
                    break;
                case "SSE":
                    WindDirection = "South-southeast";
                    break;
                case "SbE":
                    WindDirection = "Sout by east";
                    break;
                case "S":
                    WindDirection = "South";
                    break;
                case "SbW":
                    WindDirection = "South by West";
                    break;
                case "SSW":
                    WindDirection = "South-southwest";
                    break;
                case "SWbS":
                    WindDirection = "Southwest by south";
                    break;
                case "SW":
                    WindDirection = "Soutwest";
                    break;
                case "SWbW":
                    WindDirection = "Southwest by west";
                    break;
                case "WSW":
                    WindDirection = "West-southwest";
                    break;
                case "WbS":
                    WindDirection = "West by south";
                    break;
                case "W":
                    WindDirection = "West";
                    break;
                case "WbN":
                    WindDirection = "West by North";
                    break;
                case "WNW":
                    WindDirection = "West-northwest";
                    break;
                case "NWbW":
                    WindDirection = "Northwest by west";
                    break;
                case "NW":
                    WindDirection = "Nortwest";
                    break;
                case "NWbN":
                    WindDirection = "Northwest by north";
                    break;
                case "NNW":
                    WindDirection = "North-northwest";
                    break;
                case "NbW":
                    WindDirection = "North by west";
                    break;
                                     }



            document.getElementById("pHumidity").innerHTML = data.current.humidity + " %";
            document.getElementById("pWindDirection").innerHTML = WindDirection;
            document.getElementById("iWeatherIcon").src= data.current.condition.icon;
            document.getElementById("conditionText").innerHTML = data.current.condition.text;
        });
    };

    //Setting to switch between Mph & Kph
    function mphToKph() {
        if (speedUnits == "kph"){
            speedUnits = "mph";
            document.getElementById("buttonWindSpeed").innerHTML = "speed in kph";
        }
        else if (speedUnits == "mph"){
            speedUnits = "kph";
            document.getElementById("buttonWindSpeed").innerHTML = "speed in mph";
        }
        getWindSpeed(speedUnits);
    };
    //Setting to switch between Farenheit & Celcius degree
    function farenheitToCelcius(){
        if (tempUnits == "celsius"){
            tempUnits = "farenheit";
            document.getElementById("buttonFC").innerHTML = "Temperature in Celcius";
        }
        else if (tempUnits == "farenheit"){
            tempUnits = "celsius";
            document.getElementById("buttonFC").innerHTML = "Temperature in Farenheit";
        }
        getTemperature(tempUnits);
    };

    // Buttons
    document.getElementById("buttonFC").onclick = function() {farenheitToCelcius()};    //button to switch temperature between Farenheit and Celcius.
    document.getElementById("buttonWindSpeed").onclick = function() {mphToKph()};       //button to switch temperature between Farenheit and Celcius.

    //First time loading
    getTemperature(tempUnits);
    getWindSpeed(speedUnits);
    getWeather();

});
