const apiURL = "api.openweathermap.org/data/2.5/forecast?id=524901&appid={f59f532633b10d55bbf07be7f8538bff}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });