
const searchButton = document.getElementById("search-btn")
const input = document.getElementById("input-location")
const refreshButton = document.getElementById("refresh-btn")
const locationContainer = document.getElementById("location")
const regionContainer = document.getElementById("region")
const detailsContainer = document.getElementById("container")
const title = document.getElementById("page-title")

function updateWeather(location, temperature, condition, feelsLike, wind, humidity, uvIndex, region, country, lastUpdated, dayTime, isDay, uvLevel, iconUrl) {

    locationContainer.innerHTML = `${location}`

    regionContainer.innerHTML = `${region}, ${country}`

    detailsContainer.innerHTML = `
    <div>
        <span id="temperature-c">${temperature} °C</span>
        <span id="daytime">${dayTime}</span>
    </div>
    <div id="sky-condition"><img id="icon-img" src="${iconUrl}"><span>${condition}</span></div>
    <p>Feels like ${feelsLike} °C</p>
    <p>UV Index: ${uvIndex}<span id="uv-level">${uvLevel}</span></p>
    <p>Wind Speed: ${wind}kph</p>
    <p>Humidity: ${humidity}%</p>
    <p id="last-updated">Last Updated at ${lastUpdated}</p>`

    if (isDay) {
        document.body.style.backgroundColor = "#3977b6"
        title.innerHTML = 'Weather Updates 🌤️'
    } else {
        document.body.style.backgroundColor = "#091625"
        document.body.style.color = "#d8e4ef"
        title.innerHTML = 'Weather Updates 🌙'
    }
}

function fetchThenUpdate (requestURL) {
    fetch(requestURL).then( response => {
        if (!response.ok) {
            // If the response is not OK, throw an error
            throw new Error('Network response was not ok');
          }
          // If the response is OK, parse the JSON data and return it
          return response.json();
        }).then( data => {
            console.log(data);
            // some values extracted from data
            let location = data.location.name
            let temperature = data.current.temp_c
            let condition = data.current.condition.text
            let feelsLike =  data.current.feelslike_c
            let wind = data.current.wind_kph
            let humidity = data.current.humidity
            let uvIndex = data.current.uv
            let region = data.location.region
            let country = data.location.country
            let lastUpdated = data.current.last_updated
            let isDay = data.current.is_day
            let iconUrl = data.current.condition.icon

            // last upadetd time format : "2024-04-26 10:45"

            let timeDateArray = lastUpdated.split(" ")
            let time = timeDateArray[1]
            let timeINT = Number(time.split(":").join(""))

            // console.log(timeINT);

            // Calculating the day time (morning or noon or ...)

            let dayTime = ""

            if (timeINT >= 0 && timeINT <= 100) {
                dayTime = "Mid Night"
            } else if (timeINT >= 101 && timeINT <= 330) {
                dayTime = "Late Night"
            } else if (timeINT >= 331 && timeINT <= 500) {
                dayTime = "Dawn"
            } else if (timeINT >= 501 && timeINT <= 659) {
                dayTime = "Early Morning"
            } else if (timeINT >= 700 && timeINT <= 1100) {
                dayTime = "Morning"
            } else if (timeINT >= 1101 && timeINT <= 1459) {
                dayTime = "Noon"
            } else if (timeINT >= 1500 && timeINT <= 1700) {
                dayTime = "Afternoon"
            } else if (timeINT >= 1701 && timeINT <= 1759) {
                dayTime = "Dusk"
            } else if (timeINT >= 1800 && timeINT <= 2059) {
                dayTime = "Evening"
            } else if (timeINT >= 2100 && timeINT <= 2359) {
                dayTime = "Night"
            }

            // Calculating UV index level (low, medium or high)
            let uvLevel = ""

            switch (uvIndex) {
                case 10:
                case 9:
                case 8:
                    uvLevel = "Very High"
                    break;

                case 7:
                case 6:
                    uvLevel = "High"
                    break;

                case 5:
                case 4:
                case 3:
                    uvLevel = "Medium"
                    break;
                    
                case 2:
                case 1:
                    uvLevel = "Low"
                    break;
                   
                default:
                    break;
            }
            updateWeather(location, temperature, condition, feelsLike, wind, humidity, uvIndex, region, country, lastUpdated, dayTime, isDay, uvLevel, iconUrl);

            // Daily Forcast
            
            let dayForcastElement = document.getElementById("day-forecast")
            dayForcastElement.innerHTML = ''

            for ( let i = 0; i <= 23; i++ ) {
                let hourlyData = data.forecast.forecastday[0].hour[i]

                // console.log(hourlyData);

                let hourly_temp = hourlyData.temp_c
                let hourly_icon = hourlyData.condition.icon
                let hourly_condition = hourlyData.condition.text
                let hourly_rain = hourlyData.chance_of_rain
                let hourly_time = hourlyData.time.split(" ")[1]
                
                // console.log(hourly_time);
        
                let newElem = document.createElement("div")
                newElem.className = "hour-forecast"
                newElem.innerHTML = `
                <div class="hourly-temperature">${hourly_temp}°C</div>
                <div class="hourly-icon">
                    <img src="${hourly_icon}">
                </div>
                <div class="hourly-condition">${hourly_condition}</div>
                <div class="hourly-rain">Rain - ${hourly_rain}%</div>
                <div class="hourly-time">${hourly_time}</div>`

                dayForcastElement.append(newElem)
                
            }

        }).catch(error => {
            console.log("Error: ", error);
        })

}

let apiKey = "83afff66018341d98f444727242504"
let baseLocation = "Kolkata".split(" ").join("%20")
const baseRequestURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${baseLocation}`

fetchThenUpdate(baseRequestURL);


function updateHandler() {

    let location = input.value
    let fixedLocation = location.split(" ").join("%20")
    let requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${fixedLocation}`

    fetchThenUpdate(requestURL);

    input.value = ""
}

searchButton.addEventListener('click', updateHandler);

function refreshWeather() {
    let currentLocation = locationContainer.innerText.split(" ").join("%20")
    let requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentLocation}`

    fetchThenUpdate(requestURL);
}

refreshButton.addEventListener('click', refreshWeather);


