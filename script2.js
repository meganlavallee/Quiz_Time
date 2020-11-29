
document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   
	   
	   result = variable + sub + con + ifstate;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false; // required to not refresh the page; just leave this here
} //this ends the submit function



