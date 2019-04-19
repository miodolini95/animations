const nick = () =>{
    	var nicks = ["nick1","nick2","nick3","nick4","nick5","nick6","nick7","nick8"];
        var z = nicks.length - 1;
    	var x = Math.floor(Math.random() * z);
		/*target*/
    	document.getElementById("nick").innerHTML = nicks[x];
    }
	
const password = () =>{
    var haslo =  "";
   	var znaki = ["A","B","C","D","F","G","H","I","J","K","L","M","N","P","R","S","T","U","V","a","b","c","d","e","g","h","i","j","k","l","m","n","s","t","u","w","y","z","v"];
    var z = znaki.length - 1;
		for(i=0;i<10;i++)
        {
       		var x = Math.floor(Math.random() * z);
            haslo += znaki[x];
		}
	/*target*/
	document.getElementById("pass").innerHTML = haslo;
}