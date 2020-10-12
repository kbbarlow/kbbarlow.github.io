function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("hide");
}
const options = {dateStyle: "full", };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);

    function getAnswer(){
      var now = new Date();
      var month = now.getMonth();
      var dayOfMonth = now.getDate();
      var dayOfWeek = now.getDay();
      let a = document.getElementById("answer");
			
			if(dayOfWeek ==6 || dayOfWeek==0){
			  a.innerHTML ="Sleep in.";
      }
      else if((month == 0 && dayOfMonth ==1) || (month ==11 && dayOfMonth== 25) || (month == 6 && dayOfMonth ==4)) {
        a.innerHTML ="Sleep in.";
      }
      else {
        a.innerHTML ="Get up!";
      }
      
		} 