var num1 = "";
var nStack = [];
var opStack = [];
var op = "";
var invalid = false;
var precedence = {"+":1,"-":1,"*":2,"/":2};

function reset(){
	$("#result").fadeIn(1000,function(){
		$("#result").text("0");
	num1 = "";
	op = "";
	nStack = [];
	opStack = [];
	invalid = false;
	});
}