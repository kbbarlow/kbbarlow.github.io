
WebFont.load({ google: { families: ["Abril Fatface", "Poppins"] } });
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {
  dateStyle: "full",
};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

window.onload = function windChill() {
  let t = parseFloat(document.getElementById('currentTemp').textContent);
  let s= parseFloat(document.getElementById('currentWind').textContent); 
  let output = "N/A";
  if (t<= 50 && s>=3){
  let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s , 0.16))));
  output = Math.round(f);
  }
  document.getElementById("output").innerHTML = output + " &#8457;";
};

window.onload = function fridayBanner() {
  let d = new Date();
  const ban = document.querySelector('.prestonBanner');

  if (d.getDay() == 5) {
    ban.style.display = 'block';
  } else {
    ban.style.display = 'none';
  };
};

