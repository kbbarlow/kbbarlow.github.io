(function fridayBanner() {
  let d = new Date();
  const ban = document.querySelector('.prestonBanner');

  if (d.getDay() == 5)
   {
    ban.style.display = 'block';
  } else {
    ban.style.display = 'none';
  };
}());