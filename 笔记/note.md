# 1、网络概念
    ip地址
    域名
    端口
    域名解析
** 域名和IP地址并不是一一对应的。**
    1.域名解析（DNS）

# 2、计算机编程语言两种类型
    1. 解释性 JavaScript、java、php
    2. 编译型 c、c++
## 1.WAMP
    1.Apache 

## 1.B/S模式
    1. browser 
    2. server

## 2.C/S模式
    1. client
    2. Server

# 3、Ajax 知识铺垫

## 1.同步与异步
    1. 白屏（同步）
    2. 页面不刷新（异步） 
    实现异步局部更新（不使用XMLHttpRequest）
    以前是使用iframe，在页面中嵌套一个页面，
    在这个嵌套的页面中刷新。

## 2.Ajax  xhr兼容
```
    var xhr = null;
    // 先创建xhr，也就是先招一个秘书
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
        // 准备去做的事情
        xhr.open("get","./check.php",true);
        // 回调函数，事情办完之后干什么
        xhr.onreadystatechange = function(){
        // readyState 告诉事情做完了
            if（xhr.readyState == 4){
            // status 告诉事情的结果
                if(xhr.status == 200){
                    // 返回的是XML对象
                    var date = xhr.responseXML;
                    if(date == 1){
                        $("box").text("登录成功")；
                    }
                }
            }
        }
    // 开始执行
    xhr.send(null);
    // xhr.open();在send方法结束之后采取执行，事情干完了调用onreadystatechange
```
# 3.获取别人提供的json借口，动态的在页面生成
# 4.知识点
    1.try{}catch(e){}
    2.throw new Error("error");
