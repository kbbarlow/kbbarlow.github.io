(function windChill() {
  let t = parseFloat(document.getElementById('current-temp').textContent);
  let s= parseFloat(document.getElementById('currentWind').textContent); 
  let output = "N/A";
  if (t<= 50 && s>=3){
  let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s , 0.16))));
  output = Math.round(f);
  }
  document.getElementById("output").innerHTML = output + " &#8457;";
}());

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f59f532633b10d55bbf07be7f8538bff&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });