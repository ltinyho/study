var data=['手机','皮肤','球拍','饮料','月饼','牛奶','苹果','坚果','谢谢参与'];	
var timer=null,
	flag=0;
	

window.onload=function(){
	var play=document.getElementById('play'),
		stop=document.getElementById('stop');

	//开始抽奖
	play.onclick=playFun;
	stop.onclick=stopFun;
	document.onkeyup=function(event) {
		/* Act on the event */
		event=event;
		if(event.keyCode==13){
			if(flag==0){
				playFun();
				flag=1;
			}else
			{	
				stopFun();
				flag=0;
			}
		}
	};
}

function playFun(){
	var title=document.getElementById('title'),
		play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*data.length);
	   title.innerHTML=data[random];
	},50);
	play.style.background='#E8E8E8';

    
}

function stopFun(){
		 clearInterval(timer);
	 var play=document.getElementById('play');
	 play.style.background='#036';
}
