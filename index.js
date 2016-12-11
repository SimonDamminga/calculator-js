
window.onload = function(){
var nee = "DAAG!"
var awnser,
	calculation,
	limt,
	oparator,

	calculation = document.getElementById('display');
	var keys = document.getElementsByClassName('button');

	var len = keys.lenght;

	for(var i = 0; i < len; i++){
		keys[i].addEventListener("click", function() {
			num = this.value;
			output = calculation.innerHTML +=num;
			limt = output.lenght;
			if(limt > 16){
				alert(nee);
			}
		}, false)
	}
}



