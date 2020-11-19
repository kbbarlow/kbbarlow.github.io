

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f59f532633b10d55bbf07be7f8538bff&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('speed').textContent = jsObject.wind.speed;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('weather').textContent = jsObject.weather[1].main.weather;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });

  (function windChill() {
    let t = parseFloat(document.getElementById('current-temp').textContent);
    let s = parseFloat(document.getElementById('speed').textContent); 
    let output = "N/A";
    if (t<= 50 && s>=3){
    let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s , 0.16))));
    output = Math.round(f);
    }
    document.getElementById("output").innerHTML = output + " &#8457;";
  }());