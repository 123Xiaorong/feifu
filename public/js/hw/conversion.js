var kindId = ["kind1", "kind2", "kind3", "kind4"];
var fl;
var name;
var img;
var price;
$('#kind1').click(function () {
    var newKind = "<style>#kind1:before{display:block}</style>";
    $("#kind1").css({"color": "#c4a778"}).append(newKind);
    for (i = 0; i < 4; i++) {
        if (kindId[i] != "kind1") {
            var Kind = "<style> #" + kindId[i] + ":before{display:none}</style>";
            $("#" + kindId[i]).css({"color": " #9f9fa0",}).append(Kind);
        }
    }
    $(".First").css('display', 'block');
    $(".Second").css('display', 'none');
    $(".Third").css('display', 'none');
    $(".Fourth").css('display', 'none');
});
$('#kind2').click(function () {
    var newKind = "<style>#kind2:before{display:block}</style>";
    $("#kind2").css({"color": "#c4a778"}).append(newKind);
    for (i = 0; i < 4; i++) {
        if (kindId[i] != "kind2") {
            var Kind = "<style> #" + kindId[i] + ":before{display:none}</style>";
            $("#" + kindId[i]).css({"color": " #9f9fa0",}).append(Kind);
        }
    }
    $(".Second").css('display', 'block');
    $(".First").css('display', 'none');
    $(".Third").css('display', 'none');
    $(".Fourth").css('display', 'none');
    getSecondgoods()
});
$('#kind3').click(function () {
    var newKind = "<style>#kind3:before{display:block}</style>";
    $("#kind3").css({"color": "#c4a778"}).append(newKind);
    for (i = 0; i < 4; i++) {
        if (kindId[i] != "kind3") {
            var Kind = "<style> #" + kindId[i] + ":before{display:none}</style>";
            $("#" + kindId[i]).css({"color": " #9f9fa0",}).append(Kind);
        }
    }
    $(".Second").css('display', 'none');
    $(".First").css('display', 'none');
    $(".Third").css('display', 'block');
    $(".Fourth").css('display', 'none');
    getThirdgoods()
});
$('#kind4').click(function () {
    var newKind = "<style>#kind4:before{display:block}</style>";
    $("#kind4").css({"color": "#c4a778"}).append(newKind);
    for (i = 0; i < 4; i++) {
        if (kindId[i] != "kind4") {
            var Kind = "<style> #" + kindId[i] + ":before{display:none}</style>";
            $("#" + kindId[i]).css({"color": " #9f9fa0",}).append(Kind);
        }
    }
    $(".Second").css('display', 'none');
    $(".First").css('display', 'none');
    $(".Third").css('display', 'none');
    $(".Fourth").css('display', 'block');
    getFourthgoods()
});

window.onload = function () {
    getFirstgoods()
};

function getFirstgoods() {
    myAjax("get", "/getFirstgoods.do", "", Firstshow)
}

function getSecondgoods() {
    myAjax("get", "/getSecondgoods.do", "", Secondshow)
}

function getThirdgoods() {
    myAjax("get", "/getThirdgoods.do", "", Thirdshow)
}

function getFourthgoods() {
    myAjax("get", "/getFourthgoods.do", "", Fourthshow)
}

function Firstshow() {
    var data = JSON.parse(xhr.responseText);
    document.getElementById("First").innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        document.getElementById("First").innerHTML += `<li class="li_box">
                <a href='../xr/cakeDetails.html?G_id=${data[i].G_id}'>
                    <div class="pic_box" >
                        <div class="pic">
                           <img src="../../images/image/${data[i].img}">
                        </div>
                    </div>
                </a>
                <div class="text_box">
                    <a href="../xr/cakeDetails.html?G_id=${data[i].G_id}" class="aaaaaaa">${data[i].goodsname}</a>
                    <div>
                        <p>建议2-4人食</p>
                        <p style="color: #949494">${data[i].description}</p>
                    </div>
                    <div  class="red" style="color: red">立即兑换></div>
                </div>
            </li>`
    }
}

function Secondshow() {
    var data = JSON.parse(xhr.responseText);
    document.getElementById("Second").innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        document.getElementById("Second").innerHTML += `<li class="li_box">
                <a href="../xr/cakeDetails.html?G_id=${data[i].G_id}">
                    <div class="pic_box" >
                        <div class="pic">
                            <img src="../../images/image/${data[i].img}">
                        </div>
                    </div>
                </a>
                <div class="text_box">
                    <a href="../xr/cakeDetails.html?G_id=${data[i].G_id}" class="aaaaaaa">${data[i].goodsname}</a>
                    <div>
                        <p>建议5-8人食</p>
                        <p style="color: #949494">${data[i].description}</p>
                    </div>
                    <div class="red" style="color: red" >立即兑换></div>
                </div>
            </li>`
    }
}

function Thirdshow() {
    var data = JSON.parse(xhr.responseText);
    document.getElementById("Third").innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        document.getElementById("Third").innerHTML += `<li class="li_box">
                <a href="../xr/cakeDetails.html?G_id=${data[i].G_id}">
                    <div class="pic_box" >
                        <div class="pic">
                            <img src="../../images/image/${data[i].img}">
                        </div>
                    </div>
                </a>
                <div class="text_box">
                    <a href="../xr/cakeDetails.html?G_id=${data[i].G_id}" class="aaaaaaa">${data[i].goodsname}</a>
                    <div>
                        <p>建议5-8人食</p>
                        <p style="color: #949494">${data[i].description}</p>
                    </div>
                    <div class="red" style="color: red" >立即兑换></div>
                </div>
            </li>`
    }
}

function Fourthshow() {
    var data = JSON.parse(xhr.responseText);
    document.getElementById("Fourth").innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        document.getElementById("Fourth").innerHTML += `<li class="li_box">
                <a href="../xr/cakeDetails.html?G_id=${data[i].G_id}">
                    <div class="pic_box" >
                        <div class="pic">
                            <img src="../../images/image/${data[i].img}">
                        </div>
                    </div>
                </a>
                <div class="text_box">
                    <a href="../xr/cakeDetails.html?G_id=${data[i].G_id}" class="aaaaaaa">${data[i].goodsname}</a>
                    <div>
                        <p>建议5-8人食</p>
                        <p style="color: #949494">${data[i].description}</p>
                    </div>
                    <div class="red" style="color: red">立即兑换></div>
                </div>
            </li>`
    }
}

$(".First").on("click", ".red", function () {
    var user=sessionStorage.getItem("userId");
    e = this.parentNode.parentNode;
    if (user == null) {
        ourAlertNav(500, 150, "请先登录", 20)
    }
    else {
        myAjax("post", "/num.do", "Auser=" + user, num);
        myuser=user;
    }

});
$(".Second").on("click", ".red", function () {
    var user=sessionStorage.getItem("userId");
    e = this.parentNode.parentNode;
    if (user == null) {
        ourAlertNav(500, 150, "请先登录", 20)
    }
    else {
        myAjax("post", "/num.do", "Auser=" + user, num1);
        myuser=user;
    }
});
$(".Third").on("click", ".red", function () {
    var user=sessionStorage.getItem("userId");
    e = this.parentNode.parentNode;
    if (user == null) {
        ourAlertNav(500, 150, "请先登录", 20)
    }
    else {
        myAjax("post", "/num.do", "Auser=" + user, num2);
        myuser=user;
    }
});
$(".Fourth").on("click", ".red", function () {
    var user=sessionStorage.getItem("userId");
    e = this.parentNode.parentNode;
    if (user == null) {
        ourAlertNav(500, 150, "请先登录", 20)
    }
    else {
        myAjax("post", "/num.do", "Auser=" + user, num3);
        myuser=user;
    }
});

function num() {
    var data = JSON.parse(xhr.responseText);
    if (data[0].num >= 218) {
        var a = data[0].num - 218;
        var red = `兑换当前蛋糕需要<span style='color: red'>218</span>积分，
                  您目前积分为<span style='color: red'>${data[0].num}</span>,
                  <br>购买成功后预计剩余积分为<span style='color: red'>${a}</span>`;
        ourAlert1(600, 200, red, 18);
        fl = "2-4人食";
        name = e.getElementsByTagName("a")[1].innerText;
        img = e.getElementsByTagName("img")[0].src.split("/")[e.getElementsByTagName("img")[0].src.split("/").length - 1];
        price = 218;

    }
    else {
        var red = `您的积分不足,兑换当前蛋糕需要<span style='color: red'>218积分</span>，
                  <br>您目前积分为<span style='color: red'>${data[0].num}</span>`;
        ourAlert2(600, 200, red, 18)
    }

}

function num1() {
    var data = JSON.parse(xhr.responseText);
    if (data[0].num >= 298) {
        var a = data[0].num - 298;
        var red = `兑换当前蛋糕需要<span style='color: red'>298</span>积分，
                  您目前积分为<span style='color: red'>${data[0].num}</span>,
                  <br>购买成功后预计剩余积分为<span style='color: red'>${a}</span>`;
        ourAlert1(600, 200, red, 20);
        fl = "2-4人食";
        name = e.getElementsByTagName("a")[1].innerText;
        img = e.getElementsByTagName("img")[0].src.split("/")[e.getElementsByTagName("img")[0].src.split("/").length - 1];
        price = 298;
    }
    else {
        var red = `您的积分不足,兑换当前蛋糕需要<span style='color: red'>298积分</span>，
                  <br>您目前积分为<span style='color: red'>${data[0].num}</span>`;
        ourAlert2(600, 200, red, 18)
    }
}

function num2() {
    var data = JSON.parse(xhr.responseText);
    if (data[0].num >= 336) {
        var a = data[0].num - 336;
        var red = `兑换当前蛋糕需要<span style='color: red'>336</span>积分，
                  您目前积分为<span style='color: red'>${data[0].num}</span>,
                  <br>购买成功后预计剩余积分为<span style='color: red'>${a}</span>`;
        ourAlert1(600, 200, red, 18);
        fl = "5-8人食";
        name = e.getElementsByTagName("a")[1].innerText;
        img = e.getElementsByTagName("img")[0].src.split("/")[e.getElementsByTagName("img")[0].src.split("/").length - 1];
        price = 336;
    }
    else {
        var red = `您的积分不足,兑换当前蛋糕需要<span style='color: red'>336积分</span>，
                  <br>您目前积分为<span style='color: red'>${data[0].num}</span>`;
        ourAlert2(600, 200, red, 18)
    }

}

function num3() {
    var data = JSON.parse(xhr.responseText);
    if (data[0].num >= 458) {
        var a = data[0].num - 458;
        var red = `兑换当前蛋糕需要<span style='color: red'>458</span>积分，
                  您目前积分为<span style='color: red'>${data[0].num}</span>,
                  <br>购买成功后预计剩余积分为<span style='color: red'>${a}</span>`;
        ourAlert1(600, 200, red, 18);
        fl = "5-8人食";
        name = e.getElementsByTagName("a")[1].innerText;
        img = e.getElementsByTagName("img")[0].src.split("/")[e.getElementsByTagName("img")[0].src.split("/").length - 1];
        price = 458;
    }
    else {
        var red = `您的积分不足,兑换当前蛋糕需要<span style='color: red'>458积分</span>，
                  <br>您目前积分为<span style='color: red'>${data[0].num}</span>`;
        ourAlert2(600, 200, red, 18)
    }

}

function tobuy() {
}


function ourAlert1(width, height, text, fontSize) {
    document.getElementById("coverLayer1").style.opacity = "0";
    document.getElementById("coverLayerOut1").style.opacity = "0";
    document.getElementById("coverLayerOut1").classList.remove("display-none");
    document.getElementById("coverLayer1").classList.remove("display-none");
    document.getElementById("coverLayer1").style.width = width + "px";
    document.getElementById("coverLayer1").style.height = height + "px";
    document.getElementById("coverLayerContent1").style.width = width * 0.8 + "px";
    document.getElementById("coverLayerContent1").style.height = height * 0.8 + "px";
    document.getElementById("coverLayer1").style.top = 60 + "px";
    document.getElementById("coverLayer1").style.left = parseFloat(document.body.offsetWidth) / 2 - width / 2 + "px";
    document.getElementById("coverLayer1").style.transition = "all ease-in-out .4s";
    document.getElementById("coverLayer1").style.webkitTransition = "all ease-in-out .4s";
    document.getElementById("coverLayerContent1").innerHTML = "";
    // let alertText=document.createTextNode(text);
    document.getElementById("coverLayerContent1").innerHTML = text;
    document.getElementById("coverLayerContent1").style.fontSize = fontSize + "px";
    setTimeout(() => {
        document.getElementById("coverLayer1").style.opacity = "1";
        document.getElementById("coverLayerOut1").style.opacity = "1";
        document.getElementById("coverLayer1").style.top = 120 + "px";
    }, 1);
    document.getElementById("coverLayerBlock1").onclick = function () {//叉叉的点击事件
        document.getElementById("coverLayer1").style.opacity = "0";
        document.getElementById("coverLayerOut1").style.opacity = "0";
        document.getElementById("coverLayer1").style.top = 60 + "px";
        // $("#coverLayerContent").v
        setTimeout(() => {
            document.getElementById("coverLayerOut1").classList.add("display-none");
            document.getElementById("coverLayer1").classList.add("display-none");
        }, 401);
    };
    $('#coverLayerButtonOne1').unbind('click');
    document.getElementById("coverLayerButtonOne1").onclick= function () {//button1的点击事件
        document.getElementById("coverLayer1").style.opacity = "0";
        document.getElementById("coverLayerOut1").style.opacity = "0";
        document.getElementById("coverLayer1").style.top = 60 + "px";
        setTimeout(() => {
            document.getElementById("coverLayerOut1").classList.add("display-none");
            document.getElementById("coverLayer1").classList.add("display-none");
        }, 401);
        console.log(111);
        myAjax("post", "/numbuy.do", "Aname=" + name + "&Afl=" + fl + "&Aprice=" + price + "&Aimg=" + img + "&Auser=" + myuser, tobuy);
    };
    document.getElementById("coverLayerButtonTwo1").onclick = function () {//button2的单击事件
        document.getElementById("coverLayer1").style.opacity = "0";
        document.getElementById("coverLayerOut1").style.opacity = "0";
        document.getElementById("coverLayer1").style.top = 60 + "px";
        setTimeout(() => {
            document.getElementById("coverLayerOut1").classList.add("display-none");
            document.getElementById("coverLayer1").classList.add("display-none");
        }, 401);
    }
}

function ourAlert2(width, height, text, fontSize) {
    document.getElementById("coverLayer2").style.opacity = "0";
    document.getElementById("coverLayerOut2").style.opacity = "0";
    document.getElementById("coverLayerOut2").classList.remove("display-none");
    document.getElementById("coverLayer2").classList.remove("display-none");
    document.getElementById("coverLayer2").style.width = width + "px";
    document.getElementById("coverLayer2").style.height = height + "px";
    document.getElementById("coverLayerContent2").style.width = width * 0.8 + "px";
    document.getElementById("coverLayerContent2").style.height = height * 0.8 + "px";
    document.getElementById("coverLayer2").style.top = 60 + "px";
    document.getElementById("coverLayer2").style.left = parseFloat(document.body.offsetWidth) / 2 - width / 2 + "px";
    document.getElementById("coverLayer2").style.transition = "all ease-in-out .4s";
    document.getElementById("coverLayer2").style.webkitTransition = "all ease-in-out .4s";
    document.getElementById("coverLayerContent2").innerHTML = "";
    // let alertText=document.createTextNode(text);
    document.getElementById("coverLayerContent2").innerHTML = text;
    document.getElementById("coverLayerContent2").style.fontSize = fontSize + "px";
    setTimeout(() => {
        document.getElementById("coverLayer2").style.opacity = "1";
        document.getElementById("coverLayerOut2").style.opacity = "1";
        document.getElementById("coverLayer2").style.top = 120 + "px";
    }, 1);
    document.getElementById("coverLayerBlock2").onclick = function () {//叉叉的点击事件
        document.getElementById("coverLayer2").style.opacity = "0";
        document.getElementById("coverLayerOut2").style.opacity = "0";
        document.getElementById("coverLayer2").style.top = 60 + "px";
        setTimeout(() => {
            document.getElementById("coverLayerOut2").classList.add("display-none");
            document.getElementById("coverLayer2").classList.add("display-none");
        }, 401);
    };
    document.getElementById("coverLayerButtonOne2").addEventListener("click", function () {//button1的点击事件
        document.getElementById("coverLayer2").style.opacity = "0";
        document.getElementById("coverLayerOut2").style.opacity = "0";
        document.getElementById("coverLayer2").style.top = 60 + "px";
        setTimeout(() => {
            document.getElementById("coverLayerOut2").classList.add("display-none");
            document.getElementById("coverLayer2").classList.add("display-none");
        }, 401);
    });
}
