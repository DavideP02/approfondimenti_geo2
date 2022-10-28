ReverseDisplay = function(d) { if(d.length < 1) { return; }
else{document.getElementById(d).classList.toggle("hide");}};

HideShow = function(e,f) {
document.getElementById(f).classList.remove("hide");
document.getElementById(e).classList.add("hide");};

linkTo = function(elem) {
	if( document.getElementById('body' + elem) ) {
		document.getElementById('body' + elem).classList.remove("hide");
	}
	var parent = document.getElementById(elem);
	while( parent.parentElement ) {
		parent = parent.parentElement;
		parent.classList.remove("hide");
	}
	document.getElementById(elem).scrollIntoView();
};

window.onload = function() 
      {  
       var y=document.getElementById("MyNormalView"); 
       var ys=document.getElementById("MySmallView"); 
       var yb=document.getElementById("MyLargeView"); 
       
       if (y.addEventListener) {        
// For all major browsers, except IE 8 and earlier 
          y.addEventListener("click", function(){changeClass("770px")}); 
        } else if (y.attachEvent) {                  
// For IE 8 and earlier versions 
          y.attachEvent("onclick", function(){changeClass("770px")}); 
        } 
        
       if (ys.addEventListener) {                    
// For all major browsers, except IE 8 and earlier 
          ys.addEventListener("click", function(){changeClass("650px")}); 
        } else if (ys.attachEvent) {                  
// For IE 8 and earlier versions 
          ys.attachEvent("onclick", function(){changeClass("650px")}); 
        } 
        
       if (yb.addEventListener) {                    
// For all major browsers, except IE 8 and earlier 
          yb.addEventListener("click", function(){changeClass("85%")}); 
        } else if (yb.attachEvent) {                  
// For IE 8 and earlier versions 
          yb.attachEvent("onclick", function(){changeClass("85%")}); 
        } 
      } 
    
function changeClass(dim)
     {
      var x=document.getElementById("canvas");
      x.style.width=dim;
     };

