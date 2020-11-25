function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}WebFont.load({
  google: {
    families: ["Abril Fatface", "Poppins"]
  }
});
const options = {
  dateStyle: "full",
};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);