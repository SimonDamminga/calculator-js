var sum = [];
var count = 0;
var box = document.getElementById('display-text');
var ans = document.getElementById('answer-text');
var num = "";
var result = "";
function input(x){
	box.value += x;
	if(x == 'c'){
		box.value = '';
		ans.value = '';
		sum = [];
		count = 0;
		ans.style.cssText = 'width: 400px;';
	}else{
		num += x;
	}
	console.log(sum);
}
function operator(o){
	console.log(sum);

	sum.push(num);
	box.value += o;
	count++;
	sum.push(o);
	num = "";
	console.log(sum);
	if(count == 2){
		answer();	
		sum.splice(1, 1, o);
		box.value = ans.value;
		box.value += o;
	}
}
function answer(){
	console.log(sum);
	sum.push(num);
	num = "";
	var num1 = parseFloat(sum[0]);
	var num2 = parseFloat(sum[2]);
	if(sum[1] == '+'){
		result = num1+num2;
	}else if(sum[1] == '-'){
		result = num1-num2;
	}else if(sum[1] == '*'){
		result = num1*num2;
	}else if(sum[1] == '/'){
		result = num1/num2;
	}if (result == 0.30000000000000004){
		result = result.toFixed(1);
	}else if (result == 9){
		result = "nein";
	}else if (result == 42){
		result = "The answer to life the universe and everything"
		ans.style.cssText = 'width: 800px;';
	}
	console.log(sum);
	sum = [];
	console.log(sum);
	count = 1;
	ans.value = result;
	sum.push(ans.value);
}