const animation = fontsizegrow =>{
	/* animation target */
	const js = document.querySelector(".js");
	let fontsizenumber = parseFloat(js.style.fontSize)
	let fontsizetext = ""


	const s = fontsizegrow =>{
		for (var i=0;i<=fontsizegrow;i++) {
		   (function(ind) {
			   setTimeout(function(){
					fontsizenumber -= 0.1; 
					let fontsizenumberstr = fontsizenumber.toString(); 
					fontsizetext = fontsizenumberstr + "px"; 
					js.style.fontSize = fontsizetext;
				   }, 10 * ind);
		   })(i);
		}
		setTimeout(function() {r(fontsizegrow);}, fontsizegrow*10)
	}

	const r = fontsizegrow =>{
		for (var i=0;i<=fontsizegrow;i++) {
		   (function(ind) {
			   setTimeout(function(){
					fontsizenumber += 0.1; 
					let fontsizenumberstr = fontsizenumber.toString(); 
					fontsizetext = fontsizenumberstr + "px"; 
					js.style.fontSize = fontsizetext;
				   }, 10 * ind);
		   })(i);
		}
		setTimeout(function() {s(fontsizegrow);}, fontsizegrow*10)
	}
	r(fontsizegrow)
}
/*time of grow and reduce*/
animation(50)
