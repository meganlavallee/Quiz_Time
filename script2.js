
document.getElementById("form1").onsubmit=function() {

       modern = parseInt(document.querySelector('input[name = "modern"]:checked').value);
        
       process = parseInt(document.querySelector('input[name = "process"]:checked').value);
        
       word = parseInt(document.querySelector('input[name = "word"]:checked').value);
        
       camera = parseInt(document.querySelector('input[name = "camera"]:checked').value);
        
       composition = parseInt(document.querySelector('input[name = "composiion"]:checked').value);
        
	   
	   
	   result = modern + process + word + camera + composition;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false; // required to not refresh the page; just leave this here
} //this ends the submit function




// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



