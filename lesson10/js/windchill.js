const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f59f532633b10d55bbf07be7f8538bff&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject); // get rid of this later
    let t = parseFloat(jsObject.main.temp);
    let s = parseFloat(jsObject.wind.speed);
    let output = "N/A";
    document.getElementById('weather').innerHTML = jsObject.weather[0].description;
    document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
    if (t<=50 && s>=3) {
      let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s, 0.16))));
      output = Math.round(f);
    };
    document.getElementById("output").innerHTML = output + "&#8457;";
    document.getElementById('humidity').innerHTML = jsObject.main.humidity + "&#37;";
    document.getElementById('speed').innerHTML = Math.round(s) + " mph";
    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    // const desc = jsObject.weather[0].description;
    // document.getElementById('imagesrc').textContent = imagesrc;
    // document.getElementById('icon').setAttribute('src', imagesrc);
    // document.getElementById('icon').setAttribute('alt', desc);
  });