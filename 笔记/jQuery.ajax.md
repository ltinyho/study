# jQuery.ajax

## $.getScipt

## $.getJSON

## $.load


# 知识点
 
	*  $.param() 
		将对象转化为字符串，比如将{x:1,y:"hello"}转化为"x=1&y=hello"。
	* $.ajaxSetup({   // 给所有未设置这些属性的ajax请求设置默认的下列属性
		timeout:2000, // 两秒后取消所有Ajax请求
		cache:false   // 通过给URL添加时间戳来禁用浏览器缓存
		})