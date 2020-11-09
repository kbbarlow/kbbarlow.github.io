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
    const prophets = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
      let portrait = document.createElement('img');
      name.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      birthPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      portrait.setAttribute('src', prophets[i].imageurl);
      portrait.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + '-' + ' ' + prophets[i].order);
      card.appendChild(name);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(portrait);
      document.querySelector('div.cards').appendChild(card);
    }
  });