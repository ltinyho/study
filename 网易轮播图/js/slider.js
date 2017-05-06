/**
 * Created by LiuZihao on 2016/10/4.
 */
window.onload =function(){
    var w_slider = $("w_slider");// 最大的盒子
    var slider = $("slider");  // 轮播图盒子
    var slider_main = $("slider_main"); //放图片的盒子
    var imgs = slider_main.children; // 所有的图片组
    var slider_ctrl = $("slider_ctrl"); // 控制播放的盒子

    // 生成span
    for(var i= 0;i<imgs.length;i++){
        var span = document.createElement("span");
        span.className = "slider-ctrl-con";
        span.innerHTML = imgs.length-i;
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }
    // 给第一个span加上样式
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");

    // 将所有的图片的left设置为大盒子的宽度
    var scrollWidth = w_slider.offsetWidth;
    for(var i = 1;i < imgs.length;i++){
        imgs[i].style.left = scrollWidth + "px";
    }

    // 监听按钮
    var iNow = 0; // 设置当前播放的为第几张图片;
    for(var k in spans){
        spans[k].onclick = function () {
            if(this.className == "slider-ctrl-prve"){
                animate(imgs[iNow],{left: scrollWidth});
                --iNow < 0 ? iNow = imgs.length-1 : iNow;
                imgs[iNow].style.left = -scrollWidth + "px";
                animate(imgs[iNow],{left:0});
                setSquare();
            }
            else if(this.className == "slider-ctrl-next"){
                autoplay();
            }
            else{
                var that = this.innerHTML - 1;
                if(that > iNow){
                    animate(imgs[iNow],{left: -scrollWidth});
                    imgs[that].style.left = scrollWidth + "px";

                }
                else if(that < iNow){
                    animate(imgs[iNow],{left: scrollWidth});
                    imgs[that].style.left = -scrollWidth + "px";
                }
                iNow = that;
                animate(imgs[that],{left:0});
                setSquare();
            }
        }
    }
    // 设置小方块变色
    function setSquare(){
        for(var i= 1;i<spans.length-1;i++){
            spans[i].setAttribute("class","slider-ctrl-con");
        }
        spans[iNow+1].setAttribute("class","slider-ctrl-con current");
    }
    //  定时器
    var timer = null;
    timer = setInterval(autoplay,2000);
    function autoplay(){
        animate(imgs[iNow],{left: -scrollWidth});
        ++iNow > imgs.length-1 ? iNow = 0 : iNow;
        imgs[iNow].style.left = scrollWidth + "px";
        animate(imgs[iNow],{left:0});
        setSquare();
    }
    w_slider.onmouseover = function () {
        clearInterval(timer);
    }
    w_slider.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(autoplay,2000);
    }

}