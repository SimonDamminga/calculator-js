var sum = [];
var count = 0;
var box = document.getElementById('display-text');
var ans = document.getElementById('answer-text');
var num = "";
function input(x){
	box.value += x;
	if(x == 'c'){
		box.value = '';
		ans.value = '';
		sum = [];
		count = 0;
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
		ans.value = num1+num2;
	}else if(sum[1] == '-'){
		ans.value = num1-num2;
	}else if(sum[1] == '*'){
		ans.value = num1*num2;
	}else if(sum[1] == '/'){
		ans.value = num1/num2;
	}
	console.log(sum);
	sum = [];
	console.log(sum);
	count = 1;
	sum.push(ans.value);
}