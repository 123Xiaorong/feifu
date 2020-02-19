// 弹框规范
//覆盖层函数
function ourAlert(width, height,text,fontSize) {
    document.getElementById("coverLayer").style.opacity = "0";
    document.getElementById("coverLayerOut").style.opacity = "0";
    document.getElementById("coverLayerOut").classList.remove("display-none");
    document.getElementById("coverLayer").classList.remove("display-none");
    document.getElementById("coverLayer").style.width = width + "px";
    document.getElementById("coverLayer").style.height = height + "px";
    document.getElementById("coverLayerContent").style.width = width*0.8 + "px";
    document.getElementById("coverLayerContent").style.height = height*0.8 + "px";
    document.getElementById("coverLayer").style.top = 60 + "px";
    document.getElementById("coverLayer").style.left = parseFloat(document.body.offsetWidth) / 2 - width / 2 + "px";
    document.getElementById("coverLayer").style.transition="all ease-in-out .4s";
    document.getElementById("coverLayer").style.webkitTransition="all ease-in-out .4s";
    document.getElementById("coverLayerContent").innerText="";
    let alertText=document.createTextNode(text);
    document.getElementById("coverLayerContent").appendChild(alertText);
    document.getElementById("coverLayerContent").style.fontSize=fontSize+"px";
    setTimeout(() => {
        document.getElementById("coverLayer").style.opacity = "1";
        document.getElementById("coverLayerOut").style.opacity = "1";
        document.getElementById("coverLayer").style.top = 120 + "px";
    }, 1);
    document.getElementById("coverLayerBlock").onclick=function () {//叉叉的点击事件
        document.getElementById("coverLayer").style.opacity = "0";
        document.getElementById("coverLayerOut").style.opacity = "0";
        document.getElementById("coverLayer").style.top = 60 + "px";
        setTimeout(()=>{
            document.getElementById("coverLayerOut").classList.add("display-none");
            document.getElementById("coverLayer").classList.add("display-none");
        },401);
    };
    document.getElementById("coverLayerButtonOne").addEventListener("click",function () {//button1的点击事件
        document.getElementById("coverLayer").style.opacity = "0";
        document.getElementById("coverLayerOut").style.opacity = "0";
        document.getElementById("coverLayer").style.top = 60 + "px";
        setTimeout(()=>{
            document.getElementById("coverLayerOut").classList.add("display-none");
            document.getElementById("coverLayer").classList.add("display-none");
        },401);
    });
    document.getElementById("coverLayerButtonTwo").onclick=function () {//button2的单击事件
        document.getElementById("coverLayer").style.opacity = "0";
        document.getElementById("coverLayerOut").style.opacity = "0";
        document.getElementById("coverLayer").style.top = 60 + "px";
        setTimeout(()=>{
            document.getElementById("coverLayerOut").classList.add("display-none");
            document.getElementById("coverLayer").classList.add("display-none");
        },401);
    }
}
//调用函数
// setTimeout(()=>{ourAlert(600,200,"请先登录",30)},1000);
