
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



