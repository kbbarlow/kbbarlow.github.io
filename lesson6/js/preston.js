function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {
  dateStyle: "full",
};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

function fridayBanner() {
  let d = new Date();
  const banner = document.querySelector('.prestonBanner');

  if (d.getDay() == 5) {
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }
  console.log('today is ', d.getDay());
}
function windChill() {
  let t=49;
  let s=15; 
  let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s , 0.16))));
  document.getElementById("output").innerHTML = "Wind Chill: " +(Math.round(f)) + " &#8457;";
}
window.addEventListener('DOMContentLoaded', fridayBanner, windChill);
/*The formula to calculate the wind chill factor is 𝑓=35.74+0.6215𝑡−35.75𝑠0.16+0.4275𝑡𝑠0.16, 
where f is the wind chill factor in Fahrenheit, 
t is the air average temperature in Fahrenheit, 
and s is the wind speed in miles per hour. 
Input requirements: "Wind Chill Temperature is officially defined for temperatures 
at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)." */