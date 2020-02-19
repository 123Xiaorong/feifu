$(window).load(function () {
    getAllCake();
    numDD();
});

// 加入购物车成功
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

numState=0;

// ===========显示所有蛋糕===========
function getAllCake() {
    myAjax("post","/getAllCake.do","",function () {
        var data=JSON.parse(xhr.responseText);
        // 数组去重
        for(var j=0;j<data.length;j++){
            for(var k=j+1;k<data.length;k++){
                if(data[j].G_id==data[k].G_id){
                    data.splice(j+1,1);
                    k--;
                }
            }
        }
        document.getElementsByClassName("sectionTwo")[0].innerHTML="";
        // 添加商品
        for(var i=0;i<data.length;i++){
            document.getElementsByClassName("sectionTwo")[0].innerHTML+="<div>\n" +
                "            <a href='cakeDetails.html?G_id="+data[i].G_id+"' style='cursor: pointer'>\n" +
                "                <div class='cakeImage'>\n" +
                "                     <img src=../../images/image/"+data[i].img+" alt=\"\">\n" +
                "                </div>\n" +
                "            </a>\n" +
                "            <a href='cakeDetails.html?G_id="+data[i].G_id+"' style='cursor: pointer'>\n" +
                "                <h3>"+data[i].goodsname+"</h3>\n" +
                "            </a>\n" +
                "            <h4>"+data[i].description+"</h4>\n" +
                "            <p>\n" +
                "                <small>￥</small>\n" +
                "                <span>"+data[i].price+"</span>\n" +
                "            </p>\n" +
                "<a class=\"addCart\" id='"+data[i].G_id+"' style='cursor: pointer'>\n" +
                "                <h1>加入购物车</h1>\n" +
                "                <span>+</span>\n" +
                "            </a>\n" +
                "        </div>";
        }
        $(".sectionTwo>div>a:last-child").click(function () {

            if(sessionStorage.getItem("userId")==null){
                ourAlertNav(500,150,"请先登录",20);
            }else {
                myAjax("post", "/addGoodCartNew.do","G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId"),function () {
                    ourAlert(500,150,"加入购物车成功！",20);
                });
            }
        });
    })
}

//点击事件
$(".cakeSearch>dl:nth-child(1)>dd").click(function () {
    $(this).siblings().attr("class","");
    $(this).attr("class","tasteActive");
});
$(".cakeSearch>dl:nth-child(2)>dd").click(function () {
    $(this).siblings().attr("class","");
    $(this).attr("class","sizeActive");
    // console.log($(this)[0].innerText);
});

// ===========蛋糕查找===========
$(".cakeSearch").click(function () {
    searchCake();
});

function searchCake(){
    var someCake=$(".tasteActive")[0].innerText;
    var cakeSize=$(".sizeActive")[0].innerText;
    myAjax("post","/searchCake.do","taste="+someCake+"&cakeSize="+cakeSize,showXrGoods);
}


function numDD() {
    for(var p=0;p<$(".cakeSearch>dl:nth-child(2)>dd").length;p++){
        $(".cakeSearch>dl:nth-child(2)>dd")[p].No=p;
        $(".cakeSearch>dl:nth-child(2)>dd")[p].onclick=function () {
            numState=this.No;
        }
    }
}


function showXrGoods() {
    var data=JSON.parse(xhr.responseText);
    // 数组去重
    for(var j=0;j<data.length;j++){
        for(var k=j+1;k<data.length;k++){
            if(data[j].G_id==data[k].G_id){
                // console.log(11111);
                data.splice(j+1,1);
                k--;
            }
        }
    }

    document.getElementsByClassName("sectionTwo")[0].innerHTML="";
    for(var i=0;i<data.length;i++){
        document.getElementsByClassName("sectionTwo")[0].innerHTML+="<div>\n" +
            "            <a href='cakeDetails.html?G_id="+data[i].G_id+"'>\n" +
            "                <div class='cakeImage'>\n" +
            "                     <img src=../../images/image/"+data[i].img+" alt=\"\">\n" +
            "                </div>\n" +
            "            </a>\n" +
            "            <a href='cakeDetails.html?G_id="+data[i].G_id+"'>\n" +
            "                <h3>"+data[i].goodsname+"</h3>\n" +
            "            </a>\n" +
            "            <h4>"+data[i].description+"</h4>\n" +
            "            <p>\n" +
            "                <small>￥</small>\n" +
            "                <span>"+data[i].price+"</span>\n" +
            "            </p>\n" +
            "<a class=\"addCart\" id='"+data[i].G_id+"'>\n" +
            "                <h1>加入购物车</h1>\n" +
            "                <span>+</span>\n" +
            "            </a>\n" +
            "        </div>";
    }

    if(data.length==0){
        document.getElementsByClassName("sectionTwo")[0].innerHTML="<p style='height: 260px;display: block;width: 35%;margin: 0 auto;padding-top: 150px;font-size: 25px;color: #3e3e3e'>此分类下没有商品，请重新选择！</p>";
    }

    // 加入购物车--分类中
    $(".sectionTwo>div>a:last-child").click(function () {
      // console.log(numState);
      cakeSize="";
      if(numState==1){
          cakeSize="2-4人食";
      }
        if(numState==2){
            cakeSize="5-8人食";
        }
        if(numState==3){
            cakeSize="10-12人食";
        }
        if(numState==4){
            cakeSize="15-20人食";
        }

        if(numState==0){
            if(sessionStorage.getItem("userId")==null){
                ourAlertNav(500,150,"请先登录",20);
            }else {
                myAjax("post", "/addGoodCartNew.do","G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId"),function () {
                    ourAlert(500,150,"加入购物车成功！",20);
                });

            }

        }else{
            if(sessionStorage.getItem("userId")==null){
                ourAlertNav(500,150,"请先登录",20);
            }else {
                myAjax("post", "/addGoodCartNewSize.do","G_id="+$(this).attr("id")+"&G_miaoshu="+cakeSize+"&userId="+sessionStorage.getItem("userId"),function () {
                    ourAlert(500,150,"加入购物车成功！",20);
                });

            }
        }
    });
}

$("#coverLayerButtonOne").click(function () {
    location.assign("../car/gouwuche.html");
});

$("#coverLayerButtonOne").mouseover(function () {
    $("#coverLayerButtonOne").css("cursor","pointer");
});

$("#coverLayerButtonTwo").mouseover(function () {
    $("#coverLayerButtonTwo").css("cursor","pointer");
});
