window.onload = myFunction;


function myFunction(){
	x = document.querySelectorAll("div");

	var i;
	for (i = 3; i < x.length-1; i++) {
	 	x[i].classList.add('square');
	}
}

var arr = [];

