function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

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

WebFont.load({
  google: {
    families: ["Abril Fatface", "Poppins"]
  }
});


const options = {
  dateStyle: "full",
};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('p');
      let yearFounded = document.createElement('p');
      let photo = document.createElement('img');
      name.textContent = towns[i];
      motto.textContent = towns[i].motto;
      yearFounded.textContent = towns[i].yearFounded;
      portrait.setAttribute('src', towns[i].photo);
      portrait.setAttribute('alt', towns[i].name);
      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(yearFounded);
      card.appendChild(photo);
      document.querySelector('div.cards').appendChild(card);
    }
  });