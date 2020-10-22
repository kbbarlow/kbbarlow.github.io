function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {
  dateStyle: "full",
};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

window.onload = function fridayBanner() {
  let d = new Date();
  const banner = document.querySelector('.prestonBanner');

  if (d.getDay() == 5) {
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }
}