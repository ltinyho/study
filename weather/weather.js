var weekArry = ["日","一","二","三","四","五","六"]
	$(document).ready(function(){
		$("#cityName").on("click",function(){
			if($(this).val()=="请输入您要查询的城市名称"){
				$(this).val("");
			}
		});
		$("#searchBtn").on("click",function(){
			var cityName = $("#cityName").val().replace(/\s/g,"");
			cityName = encodeURIComponent(cityName);
			$.ajax({
				beforeSend: function(){
					$(".note").text("正在查询").fadeTo(100,1);
					$(this).attr("disabled","true");
				},
				type: "GET",
				dataType: "jsonp",
				url: "http://op.juhe.cn/onebox/weather/query?dtype=json&key=8546a8b9815ad6dd1ab8df32fa727948&cityname="+cityName,
				success: function(data){
					$(".note").text("已查询到您所需要的信息！");
					if(data.reason != "successed!"){ 
						$(".today-weather").hide();
						$("#weekWeather").hide();
						$(".note").text("未找到您输入的城市天气情况!");
						return ; // 查询失败，结束解析
					}
					weather(data);
				},
				error: function(){
					alert("请求失败！");
				},
				complete: function(){
					$("#searchBtn").removeAttr('disabled');
				}
			});
		});
		$.ajaxPrefilter(function( options ) {
			options.global = true;
		});
		$("#test").bind({
			ajaxStart:function(){$(this).hide();}
		})
	});


	// 数据解析
	function weather (data) {
		var data = data.result.data;
		// 今日天气
		todayWeather(data.realtime);   // 今日天气
		weekWeather(data.weather) // 一周天气
	}













	// 今日天气模块
	function todayWeather(realtime){
		var $cityName = $(".tw-cityName"); //城市
		var $rain_sun = $(".rain_sun");  // 晴雨
		$cityName.text(realtime.city_name);
		$rain_sun.text(realtime.weather.info);
		moreInfo(realtime);
	

		// 更新列表项
		function moreInfo(realtime){
			nowTime(realtime); // 今天栏目
			weather(realtime.weather);
			wind(realtime.wind);

			// 今天栏目
			function nowTime(realtime){
				$("#nowTime li:eq(0)").text(realtime.date);
				$("#nowTime li:eq(1)").text("星期"+weekArry[realtime.week]);
				$("#nowTime li:eq(3)").text(getUpTime());


				 // 获得更新时间
				function getUpTime(){
						var dataUptime = new Date(realtime.date);		
						var hour = dataUptime.getHours();
						var minute = dataUptime.getMinutes();
						hour = hour < 10 ? "0" + hour : hour;
						minute = hour < 10 ? "0" + minute : minute;
						return hour + ":"+minute+":00";
				}//获得更新时间结束
			}// 今天栏目结束


			//天气栏目
			function weather(weather){
				$("#weather li:eq(0)").text("温度:"+weather.temperature+"℃");
				$("#weather li:eq(1)").text("湿度:"+weather.humidity+"%");
				$("#weather li:eq(2)").text(weather.info);
			}//天气栏目结束


			// 风栏目
			function wind(wind){
				$("#wind li:eq(0)").text("风向:"+wind.direct);
				$("#wind li:eq(1)").text("风力:"+wind.power);
			}// 风栏目结束


		}// 更新列表项结束
		$(".today-weather").show();
	}// 今日天气模块结束

















	// 一周天气模块
	function weekWeather(weather){
		
			tbDate(weather);
			function tbDate(weather){
				for(var i = 0; i < 5; i++){
					$("th").eq(i).text("周"+weather[i].week);
					$("#tbDate td").eq(i).text(weather[i].date.substr(5));
					$("#tbRain td").eq(i).text(weather[i].info.day[1]);
					$("#tbTemp td").eq(i).text(weather[i].info.day[2]+"℃");
				}
			};
		$("#weekWeather").show();	
		var btn = document.getElementById("searchBtn");
	}// 一周天气模块结束