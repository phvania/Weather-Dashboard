var input=document.querySelector('#input');
var searchbtn=document.querySelector('#searchbutton');
var APIkey='4ddad623ed8c8ee3f4e5485faa0239c8'  // API key for OpenWeatherMap ApI
var weatherCardDiv = document.querySelector('.weather-cards');
var mainweather =document.querySelector('#main_weather');


searchbtn.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('click')
    var cityName =input.value.trim()  //get user entered city name and remove extra spaces
    searchCity( cityName)
})

function searchCity(cityName);
    fetch(
        ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIkey}`
        //get entered city coordinates(latitude, longitude,and name) from the API response
    ) .then( function(response){
        return response.json()
    }) .then( function(weather){
        console.log(weather)
        //HTML for the main weather 
        var weatherData =`   
        <h2> ${weather.name}</h2>
        <p> tempreture  ${weather.main.temp}</p>
        <p>  humidity ${weather.main.humidity}</p>
        <p>windspeed ${weather.wind.speed}</p>

     } `
        mainweather.innerHTML=weatherData



        var lat = weather.coord.lat
        var lon = weather.coord.lon

        fetch(
            `
            https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`    
        ) .then(function(response){
            return response.json()
        })
        .then(function(fiveday) {

for(var i=0; i<=4; i++)
    console.log(fiveday.list[i]);

         } (forecast => {
        var forecastDate = new Date(forecast. dt_text).getDate();
        if( 'fiveDays'.includes(forecastDate)) {
            return uniqueForecastDays.push(forecastDate);
        }
    }));
    console.log('fiveDay');
   
        
    }

    
    








//searchbtn.addEventListener('click', function(e)
  //  e.preventDefault()
   // console.log('click')
   // var cityName =input.value.trim()
   // searchCity( cityName)
