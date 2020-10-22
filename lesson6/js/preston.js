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
}
function windChill() {
  let t=49;
  let s=15; 
  let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s , 0.16))));
  document.getElementById("output").innerHTML = "Wind Chill: " +(Math.round(f)) + " &#8457;";
}
window.addEventListener('load', fridayBanner());
window.addEventListener('load', windChill());
