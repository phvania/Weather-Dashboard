//variable declaration

var input=document.querySelector('#input');
var searchbtn=document.querySelector('#searchbutton');
var APIkey='4ddad623ed8c8ee3f4e5485faa0239c8' ; // API key for OpenWeatherMap ApI
var weatherCardDiv = document.querySelector('.weather-cards');
var mainweather = document.querySelector('#main_weather');
var currentTemp = document.getElementById("temp");
var currentHumidity = document.getElementById("Humidity");
var currentWindSpeed = document.getElementById("Wind");
var testContainer = document.getElementById('test');

searchbtn.addEventListener('click', function(e) {
    e.preventDefault();
   // console.log('click');
    var cityName =input.value.trim();  //get user entered city name and remove extra spaces
    searchCity( cityName);
});

function searchCity(cityName) {
    fetch(
        ` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIkey}`
        //get entered city coordinates(latitude, longitude,and name) from the API response
    ) .then( function(response){
        console.log("Response: ", response);
        return response.json();
    }) .then( function(weather){
        console.log(weather);
        //HTML for the main weather 
      var weatherData = `<div>  
        <h2> ${weather.name}</h2>
        <p> tempreture  ${weather.main.temp}</p>
        <p>  humidity ${weather.main.humidity}</p>
        <p>windspeed ${weather.wind.speed}</p>
      </div>`
       // mainweather.innerHTML = weatherData;
      /*  mainweather.innerHTML = `<div>  
        <h2> ${weather.name}</h2>
        <p> tempreture  ${weather.main.temp}</p>
        <p>  humidity ${weather.main.humidity}</p>
        <p>windspeed ${weather.wind.speed}</p>
      </div>`;
      */
       // test.append(weatherData);
    
     // Since we ALREADY have EXISITING HTML ELEMENT on the page (we GRAB reference to those element we want to CHANGE/update)
     // currentTemp.textContent = weather.main.temp;
     currentTemp.textContent = weather.main.temp;
     currentHumidity.textContent = weather.main.humidity;
     currentWindSpeed.textContent = weather.wind.speed;

    var lat = weather.coord.lat;  
    var lon = weather.coord.lon;

    mainweather()

     function mainweather(forecast)  {
        fetch(
            `
            https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`    
        ) 
        .then(function(response){
            return response.json();
        })
        .then(function(fiveday) {
            console.log(fiveday);

            console.log("Forecast Data: ", fiveday.list);
           // var startDt = dayjs().add(1,"day").startOf("day").unix();
           // var endDt = dayjs().add(5, "day").endOf("day").unix();
          //  if ( fiveday(1 , 3)) noon;
           // console.log(fiveday);

        });
    };
})

// we want to GRAB the CURRENT DATE --> using Day.js Library
var now = dayjs().format('DD/MM/YYYY');
console.log("Current Date: ", now);


for(var i=0; i<=4; i++)
   // console.log(fiveday.list[i]);

         (forecast => {
        var forecastDate = new Date(forecast. dt_text).getDate();
        if( 'fiveDays'.includes(forecastDate)) {
            return uniqueForecastDays.push(forecastDate);
        }
    });
   // console.log('fiveDay');
   
        
    

    
    








//searchbtn.addEventListener('click', function(e)
  //  e.preventDefault()
   // console.log('click')
   // var cityName =input.value.trim()
   // searchCity( cityName)
}