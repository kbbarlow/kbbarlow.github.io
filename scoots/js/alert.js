const request = 'https://kbbarlow.github.io/scoots/data/alert.json';
fetch(request)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    if (jsObject.hasOwnProperty('alerts')) {
      document.querySelector('.weatheralert').style.display = 'block';
      document.getElementById('alert').innerHTML = jsObject.alerts[0].event;
      document.getElementById('alertdesc').innerHTML = jsObject.alerts[0].description;
    } else {
      document.querySelector('.weatheralert').style.display = 'none';
    }
  });