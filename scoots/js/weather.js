const APIurl ='https://api.openweathermap.org/data/2.5/onecall?lat=20.422984&lon=-86.922343&appid=f59f532633b10d55bbf07be7f8538bff&units=imperial;'
fetch(APIurl)
.then((response) => response.json())
.then((jsObject) => {
  console.table(jsObject)
  document.getElementById('weather').innerHTML = jsObject.weather[0].description;
  document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
  document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
  document.getElementById('feels_like').innerHTML = Math.round(s) + " mph";
});
// fetch(forecastURL)
// .then((response) => response.json())
// .then((forecastObject) => {
//   var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
//   const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   for (let day = 0; day < forecast.length; day++) {
//     const d = new Date(forecast[day].dt_txt);
//     const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
//     const desc = forecast[day].weather[0].description;
//     document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
//     document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
//     document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
//     document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
//   }
// });