window.onload = function(){
	var lis = document.getElementsByTagName("li");
	var timer = null;
	var colorArry = ["red","green","blue"]; // 颜色数组
	// 变色函数
	function changeColor(){
		clearInterval(timer);  // 先清除定时器
		timer = setInterval(function(){
			for(var i=0;i<=8;i++){ // 先清除所有格子的背景颜色
			lis[i].style.backgroundColor ="";
			}
			var idNum = Math.floor(Math.random()*9); // 产生0-8的随机数字;
			var colorNum = Math.floor(Math.random()*3); // 产生0-2的随机数字，对应相应的颜色值
			lis[idNum].style.backgroundColor= colorArry[colorNum];
			console.log("格子"+(idNum+1) + "的颜色变为" +colorArry[colorNum]);
		},1000);
		
	}
	changeColor();
}