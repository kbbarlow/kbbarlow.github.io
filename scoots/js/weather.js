const APIurl ='https://api.openweathermap.org/data/2.5/onecall?lat=20.422984&lon=-86.922343&appid=f59f532633b10d55bbf07be7f8538bff&units=imperial';
fetch(APIurl)
.then((response) => response.json())
.then((jsObject) => {
  console.table(jsObject);
  document.getElementById('weather').innerHTML = jsObject.current.weather[0].description;
  document.getElementById('current-temp').innerHTML = Math.round(jsObject.current.temp) + "&#8457;";
  document.getElementById('feels_like').innerHTML = Math.round(jsObject.current.feels_like) + "&#8457;";
  document.getElementById('humidity').innerHTML = Math.round(jsObject.current.humidity) + "&#37;";
  var forecast = jsObject.daily.slice(0, 3);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let day = 0; day < forecast.length; day++) {
    const d = new Date(forecast[day].dt * 1000); // The new Date() function needs a milliseconds value. Convert Unix timestamp to milliseconds by multiplying by 1000.
    const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
    const desc = forecast[day].weather[0].description;
    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].temp.max);
    document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
    document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
  }
});