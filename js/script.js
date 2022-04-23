/*bezier*/
var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(55, 260.4);
		ctx.bezierCurveTo(276, 319.6, 266.1, 296, 265.3, 253.9);
		ctx.moveTo(265.3, 253.9);
		ctx.bezierCurveTo(362, 314, 279, 369.4, 55, 260.4);
		ctx.fillStyle = '#6C6E96';
		ctx.fill();
		
		document.getElementById("color").addEventListener('input', (e) => {
        let color = e.target.value;
        ctx.fillStyle = color; 
		ctx.fill();
        });
		

/*background scroll*/	
document.getElementById("body").onscroll = function Scroll() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("history");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}
 
/*calculating price*/
function calculatePrice(){
	var numberOf = parseInt(document.getElementById("quantity").value);
	var result = numberOf;
	let text = result.toString();
	
	if(isNaN(numberOf))
		void(0);
	else
		document.getElementById("price").innerHTML = "Price: $";
	
}

/*active navbar*/
var btnContainer = document.getElementById("nav");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}