
	const write = (txt,time) =>{
		/* autotype target */
		const js = document.querySelector(".js");
		var arr = [];
		let name = "";
		
		const writetext = time =>{
			for (var i=0;i<arr.length;i++) {
				(function(ind) {
					setTimeout(function(){
						name += arr[ind]
						js.innerText = name
					}, time * ind);
				})(i);
			}
		}
		const catchvalue = txt =>{
			var str = txt
			var newarr = str.split("")
			arr = newarr
		}
		catchvalue(txt)
		writetext(time)

	}
/*first argument: text value*/
/*second argument: time render of every letter*/
	write(text,200)
