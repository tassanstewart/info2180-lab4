window.onload = myFunction;
var arr = ["","","","","","","","",""];
var last = "O";


function myFunction(){
	var x = document.getElementById("board").children;

	var i;


	for (i=0;i<x.length;i++){
		element = x[i];
  		element.classList.add("square");
  		//element.innerHTML = "";
  	}

  	addEvents(x);
}

function addEvents(x){
	e1= x[0];
	e2= x[1];
	e3= x[2];
	e4= x[3];
	e5= x[4];
	e6= x[5];
	e7= x[6];
	e8= x[7];
	e9= x[8];
	

	clickFunction(e1,e2,e3,e4,e5,e6,e7,e8,e9);
	hoverFunction(e1,e2,e3,e4,e5,e6,e7,e8,e9);
	hoverOffFunction(e1,e2,e3,e4,e5,e6,e7,e8,e9);


	
	
}

function clickHandler(element,box){

		if(last == "O"){
			element.innerHTML = "X";
			element.classList.add("X");
			last = "X";
			arr[box]=last;
			

		}
		else{
			element.innerHTML = "O";
			element.classList.add("O");
			last = "O";
			arr[box]=last;

		
		}
		checkForWinner(arr);

}


function checkForWinner(arr){
	var lets =["X","O"];
	var l;
	var p = 0;
	while (p<2){
		l = lets[p];

		if(((arr[0]==l) && (arr[1]==l) && (arr[2]==l))
			|| ((arr[3]==l) && (arr[4]==l) && (arr[5]==l))
			|| ((arr[6]==l) && (arr[7]==l) && (arr[8]==l))
			|| ((arr[0]==l) && (arr[3]==l) && (arr[6]==l))
			|| ((arr[1]==l) && (arr[4]==l) && (arr[7]==l))
			|| ((arr[2]==l) && (arr[5]==l) && (arr[8]==l))
			|| ((arr[0]==l) && (arr[4]==l) && (arr[8]==l))
			|| ((arr[2]==l) && (arr[4]==l) && (arr[6]==l))
			){
			displayCongrats(l);
		}
		p = p +1;
	}
}

function displayCongrats(l){
	var stat = document.getElementById("status");
	stat.innerHTML = "Congratulations! " + l + " is the Winner!";
	stat.classList.add("you-won");
}

function hoverHandler(element){
	element.classList.add("hover");
}

function hoverOffHandler(element){
	element.classList.remove("hover")
}

function clickFunction(a,b,c,d,e,f,g,h,i){
	a.onclick = function(){
		clickHandler(a,0);
	}
	b.onclick = function(){
		clickHandler(b,1);
	}
	c.onclick = function(){
		clickHandler(c,2);
	}
	d.onclick = function(){
		clickHandler(d,3);
	}
	e.onclick = function(){
		clickHandler(e,4);
	}
	f.onclick = function(){
		clickHandler(f,5);
	}
	g.onclick = function(){
		clickHandler(g,6);
	}
	h.onclick = function(){
		clickHandler(h,7);
	}
	i.onclick = function(){
		clickHandler(i,8);
	}
}

function hoverFunction(a,b,c,d,e,f,g,h,i){
	a.onmouseover = function(){
		hoverHandler(a);
	}
	b.onmouseover = function(){
		hoverHandler(b)}

	c.onmouseover = function(){
		hoverHandler(c)}

	d.onmouseover = function(){
		hoverHandler(d)}
	e.onmouseover = function(){
		hoverHandler(e)}
	f.onmouseover =  function(){
		hoverHandler(f)}
	g.onmouseover = function(){
		hoverHandler(g)}
	h.onmouseover = function(){
		hoverHandler(h)}
	i.onmouseover =  function(){
		hoverHandler(i)}
}

function hoverOffFunction(a,b,c,d,e,f,g,h,i){
	a.onmouseout = function(){
		hoverOffHandler(a);}
	b.onmouseout = function(){
		hoverOffHandler(b)}

	c.onmouseout = function(){
		hoverOffHandler(c)}

	d.onmouseout = function(){
		hoverOffHandler(d)}
	e.onmouseout = function(){
		hoverOffHandler(e)}
	f.onmouseout =  function(){
		hoverOffHandler(f)}
	g.onmouseout = function(){
		hoverOffHandler(g)}
	h.onmouseout = function(){
		hoverOffHandler(h)}
	i.onmouseout =  function(){
		hoverOffHandler(i)}
}


		