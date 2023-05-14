const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7b26458989mshe019d2db9b2b544p1fd97ajsn2a9217d3e029',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


async function getWeather(city) {
    cityName.innerHTML = city.toUpperCase();
    const response = await fetch(url + city, options);
    const result = await response.json();
    feels_like.innerHTML = result.feels_like
    humidity.innerHTML = result.humidity
    max_temp.innerHTML = result.max_temp
    min_temp.innerHTML = result.min_temp
    // sunrise.innerHTML = result.sunrise
    // sunset.innerHTML = result.sunset
    temp.innerHTML = result.temp
    wind_degrees.innerHTML = result.wind_degrees
    wind_speed.innerHTML = result.wind_speed
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Ahmedabad");
async function fixCityWeather(fixCity) {
    console.log(fixCity)
    const response = await fetch(url + fixCity, options);
    const result = await response.json();
    console.log(response)
    // cloud_pct.innerHTML = response.cloud_pct
    const weatherData = document.getElementById('weatherData');
    const tr = document.createElement('tr');
    tr.innerHTML = `
                            <td>${fixCity.toUpperCase()}</td>
                            <td>${result.temp}</td>
                            <td>${result.feels_like}</td>
                            <td>${result.max_temp}</td>
                            <td>${result.min_temp}</td>
                            <td>${result.humidity}</td>
                            <td>${result.wind_speed}</td>
                            <td>${result.wind_degrees}</td>
                            
                        `;
    weatherData.appendChild(tr);
}

fixCityWeather(("udaipur"));
fixCityWeather(("chennai"));
fixCityWeather(("kerala"));
fixCityWeather(("guwahati"));
fixCityWeather(("nagpur"));
fixCityWeather(("agra"));

// const getWeather = (city) => {
//     cityName.innerHTML = city.toUpperCase();
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
//         .then(response => response.json())
//         .then(response => {


//             console.log(response)

//             // cloud_pct.innerHTML = response.cloud_pct
//             feels_like.innerHTML = response.feels_like
//             humidity.innerHTML = response.humidity
//             max_temp.innerHTML = response.max_temp
//             min_temp.innerHTML = response.min_temp
//             // sunrise.innerHTML = response.sunrise
//             // sunset.innerHTML = response.sunset
//             temp.innerHTML = response.temp
//             wind_degrees.innerHTML = response.wind_degrees
//             wind_speed.innerHTML = response.wind_speed
//         })
//         .catch(err => console.error(err));
// }


