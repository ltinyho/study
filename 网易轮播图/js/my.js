function $(id){return document.getElementById(id);}
// scroll() 获得卷动距离
function scroll(){
		if(window.pageYOffset != null){
			return {
				left: window.pageXOffset,
				top: window.pageYOffset 
			}
		}
		else if(document.compatMode == "CSS1Compat"){
			return {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			}
		}
		else{
			return {
				left: document.body.scrollLeft,
				top: document.body.scrollTop
			}
		}
	}
	// 获得的client的宽度和高度
function client(){
		if(window.innerWidth != null){
			return {
				width: window.innerWidth,
				height: window.innerHeight 
			}
		}
		else if(document.compatMode == "CSS1Compat"){
			return {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		}
		else{
			return {
				width: document.body.clientWidth,
				height: document.body.clientHeight
			}
		}
	}
function  animate(obj,json,fn){
    clearInterval(obj.timer);
     obj.timer = setInterval(function () {
        var flag = true;
        for(var attr in json){
            var current = 0;
            if(attr =="opacity"){
                console.log(current);
                current = parseInt(getStyle(obj,attr)*100);
            }
            else{
                current = parseInt(getStyle(obj,attr));
            }
            var step = (json[attr]-current)/10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(attr == "opacity" ){
                if("opacity" in obj.style){
                    obj.style.opacity = (current +step)/100;
                }
                else{
                    obj.style.filter = "alpha(opacity = "+current +step+")";
                }
            }
            else if(attr == "zIndex"){
            	obj.style.zIndex = json[attr];
       		}
            else{
                obj.style[attr] = current + step + "px";
            }
            if(current != json[attr]){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30)
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr];
    }
}
