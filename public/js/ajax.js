/*
method：提交方法  callback:回调函数
url:提交地址   async:同步异步  param:传的参数
 */
var xhr=new XMLHttpRequest()||new ActiveXObject("Microsoft.XMLHTTP");
function myAjax(method,url,params,callback,async) {
    if (async ==undefined){
        async=true;//异步，默认
    }
    //注册回调函数
    xhr.onreadystatechange=function () {
        //控制器send数字发过来默认是xhr.status
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback();
        }
    }
    if(method=="get"){
        xhr.open(method,url+"?"+params,async);
        xhr.send(null);
    }else if(method=="post"){
        xhr.open(method,url,async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }
}



