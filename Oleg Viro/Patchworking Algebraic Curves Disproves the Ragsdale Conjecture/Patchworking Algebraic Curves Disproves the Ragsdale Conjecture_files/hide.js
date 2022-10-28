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