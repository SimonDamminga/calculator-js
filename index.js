var sum = [];
var hist = [];
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
}
function operator(o){
	sum.push(num);
	box.value += o;
	count++;
	sum.push(o);
	num = "";
	if(count == 2){
		console.log(sum);
		answer();
		console.log(sum);	
		sum.splice(1, 1, o);
		console.log(sum);
		box.value = ans.value;
		box.value += o;
	}
}
function answer(){
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
	}
	hist.push(sum);
	sum = [];
	count = 1;
	ans.value = result;
	sum.push(ans.value);
	box.value = "";
}