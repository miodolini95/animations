const fade = () =>{
	let colornum = 809399;
	let color = "";
	const js = document.querySelector(".js");

	const f = color => {
		colornum += 1; 
		let colorstr = colornum.toString(); 
		color = "#" + colorstr; 
		js.style.color = color
	}
	setInterval(f,50)
}
fade()

