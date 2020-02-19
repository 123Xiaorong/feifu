var user=sessionStorage.getItem("userId");
$(".bg3_box").on("click",".bg3_buy",function () {
    if (user == null) {
        ourAlertNav(500, 150, "请先登录", 20)
    }
    else {
        var name="咸蛋皇";
        var img="goods13_1.jpg";
        var fl="2-4人食";
        var price="258";
        myAjax("post","/buy.do","Aname="+name+"&Afl="+fl+"&Aprice="+price+"&Aimg="+img+"&Auser="+user,tobuy);
        location.href="../car/gouwuche.html";
    }


});
$(".bg4_box").on("click",".bg4_buy",function () {
    if (user == null) {
        ourAlertNav(500, 150, "请先登录", 20)
    }
    else {
        var name = "茶草京都";
        var img = "goods17_1.jpg";
        var fl = "2-4人食";
        var price = "218";
        myAjax("post", "/buy.do", "Aname=" + name + "&Afl=" + fl + "&Aprice=" + price + "&Aimg=" + img + "&Auser=" + user, tobuy);
        location.href="../car/gouwuche.html";
    }
});
$(".bg5_box").on("click",".bg5_buy",function () {
    if (user == null) {
        ourAlertNav(500, 150, "请先登录", 20)
    }
    else {
        var name = "果然倾心";
        var img = "goods19_1.jpg";
        var fl = "2-4人食";
        var price = "218";
        myAjax("post", "/buy.do", "Aname=" + name + "&Afl=" + fl + "&Aprice=" + price + "&Aimg=" + img + "&Auser=" + user, tobuy);
        location.href="../car/gouwuche.html";
    }
});
function tobuy() {

}