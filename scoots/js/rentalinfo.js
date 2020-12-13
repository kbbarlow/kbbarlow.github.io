const request = 'https://kbbarlow.github.io/scoots/data/pricing.json';
fetch(request)
  .then((response) => response.json())
  .then((jsObject) => {
    if (document.getElementById("metro")){
      document.getElementById("whalfday1").innerHTML = rentals[0].whalfday;
      document.getElementById("wfullday1").innerHTML = rentals[0].wfullday;
    }
    else if (document.getElementById("dio")){
      document.getElementById("whalfday2").innerHTML = rentals[1].whalfday;
      document.getElementById("wfullday2").innerHTML = rentals[1].wfullday;
    }
    else if (document.getElementById("pcx150")){
      document.getElementById("whalfday3").innerHTML = rentals[2].whalfday;
      document.getElementById("wfullday3").innerHTML = rentals[2].wfullday;
    }
    else if (document.getElementById("atv")){
      document.getElementById("whalfday4").innerHTML = rentals[3].whalfday;
      document.getElementById("wfullday4").innerHTML = rentals[3].wfullday;
    }
    else if (document.getElementById("wrangler2")){
      document.getElementById("whalfday5").innerHTML = rentals[4].whalfday;
      document.getElementById("wfullday5").innerHTML = rentals[4].wfullday;
    }
    else if (document.getElementById("wrangler4")){
      document.getElementById("whalfday6").innerHTML = rentals[5].whalfday;
      document.getElementById("wfullday6").innerHTML = rentals[5].wfullday;
    }

    });