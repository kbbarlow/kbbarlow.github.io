const request = 'data/pricing.json';
fetch(request)
  .then((response) => response.json())
  .then((jsObject) => {
    const rentals = jsonObject['rentals'];
    for (let i = -1; i < rentals.length; i++ ) {
    document.getElementById(`rhalfday${i+1}`).innerhtml = jsObject.rentals[0].rhalfday;
    document.getElementById(`rfullday${i+1}`).innerhtml = jsObject.rentals[0].rfullday;
    document.getElementById(`whalfday${i+1}`).innerhtml = jsObject.rentals[0].whalfday;
    document.getElementById(`wfullday${i+1}`).innerhtml = jsObject.rentals[0].wfullday;
    }
  });