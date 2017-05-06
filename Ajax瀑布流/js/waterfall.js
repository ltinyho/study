
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "1.json",
		success: function(data){
			callback(data);
		},
		failure:function(){
			console.log(2);
		}
	});
	$(window).on("scroll",function(){
		if(checkScrollLider()){
			$.ajax({
				type: "GET",
				dataType: "json",
				data: "",
				url: "1.json",
				success: function(data){
					callback(data);
				},
				failure:function(){
					console.log(2);
				}
			});
		}
	})

     // 检测是否到需要加载的条件
	function checkScrollLider(){
		var $lastBox = $("#main>div").last();
		var lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
		var scrollTop = $(window).scrollTop();
		var documentH = $(window).height();
		return lastBoxDis < scrollTop + documentH ? true: false;
	}

	// Ajax 回调函数
	function callback(data){
		var len = data.length;
		for(var i=0;i<2;i++){
			var a = Math.floor(Math.random()*len);
			var box = $("<div>").addClass("box").appendTo("#main");
			var pic = $("<div>").addClass("pic").appendTo(box);
			var img = $("<img>").attr("src","images/"+data[a].a).appendTo(pic);
			waterfall();
			console.log(data[a].a);	
		}
	};



// 瀑布流
function waterfall(){
	var $boxs = $("#main>div");
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	$("#main").width(w*cols);
	var hArry = [];
	$boxs.each(function(index,value){
		var h = $(this).outerHeight();
		if(index < cols){
			hArry.push(h);

		}else{
			var minH = Math.min.apply(null,hArry);
			var minHIndex = $.inArray(minH,hArry);
			$(value).css({
				"position":"absolute",
				"top": minH + "px",
				"left": minHIndex*w + "px"
			})
			hArry[minHIndex] += $(this).outerHeight();
		}
	});
}