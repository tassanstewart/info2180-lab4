window.onload = myFunction;
var arr = [];
var last = "O"

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

function clickHandler(element){

		if(last == "O"){
			element.innerHTML = "X";
			element.classList.add("X");
			last = "X";
			arr.push(last);

		}
		else{
			element.innerHTML = "O"
			element.classList.add("O");
			last = "O";
			arr.push(last);

		}

}


function hoverHandler(element){
	element.classList.add("hover");
}

function hoverOffHandler(element){
	element.classList.remove("hover")
}

function clickFunction(a,b,c,d,e,f,g,h,i){
	a.onclick = function(){
		clickHandler(a);
	}
	b.onclick = function(){
		clickHandler(b);}
	c.onclick = function(){
		clickHandler(c);}
	d.onclick = function(){
		clcikHandler(d);}
	e.onclick = function(){
		clickHandler(e);}
	f.onclick = function(){
		clickHandler(f);
	}
	g.onclick = function(){
		clickHandler(g);}
	h.onclick = function(){
		clickHandler(h);}
	i.onclick = function(){
		clickHandler(i);
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


		