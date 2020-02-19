tttt();
function tttt() {
    $("#t_tubiao>a:last-child").removeAttr("href");
    // console.log($("#t_tubiao>a:last-child").attr("href"));
    // document.getElementById("t_tubiao").getElementsByTagName("a")[document.getElementById("t_tubiao").getElementsByTagName("a").length-1].setAttribute("src","");
}


function t_dakai() {
    $("#t_shousuo").css({
        "display":"inline",
        "width":"40%",
        "height":"25px",
        "border-radius":"15px",
        "margin-left":"78%",
    })
    $("#t_ul").css({
        "display":"none"
    })
    $("#t_shousuo-1").css({
        "display":"inline"
    })
    $("#t_shanchu").css({
        "margin-left":"74%",
        "font-size": "20px",
        "display":"inline"
    })
}
function t_shanchu() {
    $("#t_shousuo").css({
        "display":"none"
    })
    $("#t_ul").css({
        "display":"inline"
    })
    $("#t_shanchu").css({
        "display":"none"
    })
    $("#t_shousuo-1").css({
        "display":"none"
    })
}

function t_zao() {
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}

function t_zaocan() {
    $("#t_zicaidan").removeClass();
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}

function t_zaobian() {
    $("#t_qita").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}
function t_qiye() {
    $("#t_qiye-x").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}
function t_tiyan() {
    $("#t_tiyan-x").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}
function t_wodefeifu() {
    $("#t_wodefeihu-x").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
}
function t_sousuo() {
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}

//覆盖层函数
function ourAlertNav(width, height,text,fontSize) {
    document.getElementById("coverLayerly").style.opacity = "0";
    document.getElementById("coverLayerOutly").style.opacity = "0";
    document.getElementById("coverLayerOutly").classList.remove("display-none");
    document.getElementById("coverLayerly").classList.remove("display-none");
    document.getElementById("coverLayerly").style.width = width + "px";
    document.getElementById("coverLayerly").style.height = height + "px";
    document.getElementById("coverLayerContently").style.width = width*0.8 + "px";
    document.getElementById("coverLayerContently").style.height = height*0.8 + "px";
    document.getElementById("coverLayerly").style.top = 60 + "px";
    document.getElementById("coverLayerly").style.left = parseFloat(document.body.offsetWidth) / 2 - width / 2 + "px";
    document.getElementById("coverLayerly").style.transition="all ease-in-out .4s";
    document.getElementById("coverLayerly").style.webkitTransition="all ease-in-out .4s";
    document.getElementById("coverLayerContently").innerText="";
    let alertText=document.createTextNode(text);
    document.getElementById("coverLayerContently").appendChild(alertText);
    document.getElementById("coverLayerContently").style.fontSize=fontSize+"px";
    setTimeout(() => {
        document.getElementById("coverLayerly").style.opacity = "1";
        document.getElementById("coverLayerOutly").style.opacity = "1";
        document.getElementById("coverLayerly").style.top = 120 + "px";
    }, 1);
    document.getElementById("coverLayerBlockly").onclick=function () {//叉叉的点击事件
        document.getElementById("coverLayerly").style.opacity = "0";
        document.getElementById("coverLayerOutly").style.opacity = "0";
        document.getElementById("coverLayerly").style.top = 60 + "px";
        setTimeout(()=>{
            document.getElementById("coverLayerOutly").classList.add("display-none");
            document.getElementById("coverLayerly").classList.add("display-none");
        },401);
    };
    document.getElementById("coverLayerButtonOnely").addEventListener("click",function () {//button1的点击事件
        document.getElementById("coverLayerly").style.opacity = "0";
        document.getElementById("coverLayerOutly").style.opacity = "0";
        document.getElementById("coverLayerly").style.top = 60 + "px";
        setTimeout(()=>{
            document.getElementById("coverLayerOutly").classList.add("display-none");
            document.getElementById("coverLayerly").classList.add("display-none");
        },401);
    });
    document.getElementById("coverLayerButtonTwoly").onclick=function () {//button2的单击事件
        document.getElementById("coverLayerly").style.opacity = "0";
        document.getElementById("coverLayerOutly").style.opacity = "0";
        document.getElementById("coverLayerly").style.top = 60 + "px";
        setTimeout(()=>{
            document.getElementById("coverLayerOutly").classList.add("display-none");
            document.getElementById("coverLayerly").classList.add("display-none");
        },401);
    }
}


//====================================nav==========
var id;
function yonghuming() {
    id=sessionStorage.getItem("userId");
    // console.log(id);
    $.ajax({
        url:"/yonghuming.do",
        type:"post",
        data:{
            data:id,
        },
        success:function (data) {
            $("#t_yonghuming").html(`${data[0].username}`)
        },
    })
}
yonghuming();
$("#t_wodefeifu").click(function () {
    var zi=$("#t_yonghuming").text();
    // console.log(zi.length)
    if(zi.length<=0){
        ourAlertNav(500,150,"请先登录",20)
    }else {
        location.href="../xxb/personalCenter.html"
    }
});

$("#coverLayerButtonOnely").mouseover(function () {
   $("#coverLayerButtonOnely").css("cursor","pointer");
});

$("#coverLayerButtonTwoly").mouseover(function () {
   $("#coverLayerButtonTwoly").css("cursor","pointer");
});


$("#coverLayerButtonOnely").click(function () {
    location.assign("../xr/login.html")
});


function yingchang() {
    var zi=$("#t_yonghuming").text();
    // console.log(zi.length);
    if(zi.length>0){
        $("#t_yingchang").css({
            "display":"none"
        })
        $("#t_zhuxiao").css({
            "display":"inline"
        })
    }else {
        $("#t_yingchang").css({
            "display":"inline"
        })

    }
    clearInterval(cc)
}
var cc=setInterval(yingchang ,40);


$("#t_zhuxiao").click(function () {
    ourAlertNav(500,150,"确认注销",20)
    $("#coverLayerButtonOnely").text("确认注销");
    $("#coverLayerButtonTwoly").text("切换账号");
    var zhuxiao=$("#t_zhuxiao").text();
    // console.log(zhuxiao);
    if(zhuxiao=="注销"){
        $("#coverLayerButtonOnely").click(function () {
            location.href="../wcm/jingxuan.html"
            sessionStorage.removeItem("userId");
        });
        $("#coverLayerButtonTwoly").click(function () {
            location.assign("../xr/login.html");
        })

    }else {
        $("#coverLayerButtonOnely").click(function () {
            location.assign("../xr/login.html")
        })
    }
});


$(".icon-gouwuche").click(function () {
    // console.log(12335434);
    // console.log($(this).parent());
    if(sessionStorage.getItem("userId")==null){
        ourAlertNav(500,150,"请先登录",20);
    }else{
        location.href="../../html/car/gouwuche.html";
    }
})



