const request = 'https://kbbarlow.github.io/scoots/data/pricing.json';
fetch(request)
  .then((response) => response.json())
  .then((jsObject) => {
    const rentals = jsObject['rentals'];
    for (let i = 0; i < rentals.length; i++ ) {
    document.getElementById(`rhalfday${i+1}`).innerhtml = jsObject.rentals[i].rhalfday;
    document.getElementById(`rfullday${i+1}`).innerhtml = jsObject.rentals[i].rfullday;
    document.getElementById(`whalfday${i+1}`).innerhtml = jsObject.rentals[i].whalfday;
    document.getElementById(`wfullday${i+1}`).innerhtml = jsObject.rentals[i].wfullday;
    }
  });