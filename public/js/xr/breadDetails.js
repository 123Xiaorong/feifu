<!--轮播图-->

// 页面元素初始化
var sectionOne = $(".sectionOne")[0];
$("#play li img").css("height",sectionOne.offsetHeight);
$("#play li img").css("width",sectionOne.offsetWidth);
// $(".pageAll").css("width",($(".pageAll>div").length*($(".pageAll>div")[2].offsetWidth+10)));
$(".pageAll").css("width","320px");
// 页面宽度发生变化时
window.onresize=function () {
    $("#play li img").css("height",sectionOne.offsetHeight);
    $("#play li img").css("width",sectionOne.offsetWidth);
    $(".cakeImage").css("height",$(".cakeImage")[0].offsetWidth);
    $(".hotRecommendationAll").css("height",($(".hotRecommendation>div")[0].offsetHeight)*2+60);
    $(".commentPeopleLeft>div").css("height",$(".commentPeopleLeft>div>section")[0].offsetHeight);
    $(".commentPeopleLeft>div>figure>img").css("height",$(".commentPeopleLeft>div>figure>img")[0].offsetWidth);
    $(".pageAll").css("width","320px");
};
// 页面加载
window.onload = function () {
    $(".cakeImage").css("height",$(".cakeImage")[0].offsetWidth);
    $(".hotRecommendationAll").css("height",($(".hotRecommendation>div")[0].offsetHeight)*2+60);
    $(".commentPeopleLeft>div").css("height",$(".commentPeopleLeft>div>section")[0].offsetHeight);
    $(".commentPeopleLeft>div>figure>img").css("height",$(".commentPeopleLeft>div>figure>img")[0].offsetWidth);
    // 分页
    // $(".pageAll").css("width",($(".pageAll>div").length*($(".pageAll>div")[0].offsetWidth+5)));
    $(".pageAll").css("width","320px");
    // 轮播
    var oPlay = document.getElementById('play');
    var aLi = oPlay.getElementsByTagName('li');
    var lunBoButton = $("#lunBoButton")[0];
    var aDiv = lunBoButton.getElementsByTagName('div');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    $("#play li img").css("height",sectionOne.offsetHeight);
    $("#play li img").css("width",sectionOne.offsetWidth);
    var now = 0;
    var timer2 = null;
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].index = i;
        aDiv[i].onmouseover = function () {
            if (now == this.index) return;
            now = this.index;
            tab();
        }
    }
    oPrev.onclick = function () {
        now--;
        if (now == -1) {
            now = aDiv.length - 1;
        }
        tab();
    }
    oNext.onclick = function () {
        now++;
        if (now == aDiv.length) {
            now = 0;
        }
        tab();
    }
    sectionOne.onmouseover = function () {
        clearInterval(timer2);
    };
    sectionOne.onmouseout = function () {
        timer2 = setInterval(oNext.onclick, 4000);
    }
    timer2 = setInterval(oNext.onclick, 5000);

    function tab() {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.display = 'none';
        }
        for (var i = 0; i < aDiv.length; i++) {
            aDiv[i].style.background = "#DDDDDD";
        }
        aDiv[now].style.background = '#ff581c';
        aLi[now].style.display = 'block';
        aLi[now].style.opacity = 0;
        aLi[now].style.filter = "alpha(opacity=0)";
        jianbian(aLi[now]);
    }

    function jianbian(obj) {
        var alpha = 0;
        // clearInterval(timer);
        var timer = setInterval(function () {
            alpha++;
            obj.style.opacity = alpha / 100;
            obj.style.filter = "alpha(opacity=" + alpha + ")";
            if (alpha == 100) {
                clearInterval(timer);
            }
        }, 10);
    }
}

<!--食用人数点击-->

//初始化
// $(".chooseGoodMorePone span")[0].innerText="含5套餐具";
$(".chooseGoodMorePtwo span")[0].innerText="约 9.5 x 10.5 x 11 cm";
$(".chooseGoodMorePthree span")[0].innerText="约300g";
$(".chooseGood>button:nth-child(1)").css("background","#cea461");
// 点击第一个按钮
$(".chooseGood>button:nth-child(1)").click(function () {
    // $(".chooseGoodMorePone span")[0].innerText="含5套餐具";
    $(".chooseGoodMorePtwo span")[0].innerText="约 9.5 x 10.5 x 11 cm";
    $(".chooseGoodMorePthree span")[0].innerText="约3000g";
    $(this).css("background","#cea461");
    $(this).siblings().css("background","#e4dbcd");
});
// 点击第二个按钮
$(".chooseGood>button:nth-child(2)").click(function () {
    // $(".chooseGoodMorePone span")[0].innerText="含10套餐具";
    $(".chooseGoodMorePtwo span")[0].innerText="19 x 10.5 x 11 cm";
    $(".chooseGoodMorePthree span")[0].innerText="约600g";
    $(this).css("background","#cea461");
    $(this).siblings().css("background","#e4dbcd");
});
// 点击第三个按钮
// $(".chooseGood>button:nth-child(3)").click(function () {
//     // $(".chooseGoodMorePone span")[0].innerText="含15套餐具";
//     $(".chooseGoodMorePtwo span")[0].innerText="约 25 x 25 x 3 cm";
//     $(".chooseGoodMorePthree span")[0].innerText="约1475g";
//     $(this).css("background","#cea461");
//     $(this).siblings().css("background","#e4dbcd");
// });
// 点击第四个按钮
// $(".chooseGood>button:nth-child(4)").click(function () {
//     // $(".chooseGoodMorePone span")[0].innerText="含20套餐具";
//     $(".chooseGoodMorePtwo span")[0].innerText="约 33 x 33 x 3 cm";
//     $(".chooseGoodMorePthree span")[0].innerText="约625g";
//     $(this).css("background","#cea461");
//     $(this).siblings().css("background","#e4dbcd");
// });

<!--轮播按钮-->
//
// $(".goodsLunBoOne>section>div").css("width",$(".goodsLunBoOne>section")[0].offsetWidth/3*($(".goodsLunBoOne>section>div>div").length));
// $(".goodsLunBoTwo>section>div").css("width",$(".goodsLunBoTwo>section")[0].offsetWidth/3*($(".goodsLunBoTwo>section>div>div").length));
// $(".goodsLunBoOne>section>div>div").css("width",(1/($(".goodsLunBoOne>section>div>div").length)*100)-2+"%");
// $(".goodsLunBoTwo>section>div>div").css("width",(1/($(".goodsLunBoTwo>section>div>div").length)*100)-2+"%");
// // 左右移动点击事件
// $(".goodsLunBoOne>div:last-child").click(function () {
//     if($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0]>(-1)*$(".goodsLunBoOne>section")[0].offsetWidth){
//         $(".goodsLunBoOne>section>div").css("margin-left",(parseInt($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0])+parseInt(($(".goodsLunBoOne>section>div")[0].clientWidth/($(".goodsLunBoOne>section>div>div").length)*(-3)))));
//     }
// });
// $(".goodsLunBoOne>div:nth-child(1)").click(function () {
//     if($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0]<0){
//         $(".goodsLunBoOne>section>div").css("margin-left",(parseInt($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0])+parseInt(($(".goodsLunBoOne>section>div")[0].clientWidth/($(".goodsLunBoOne>section>div>div").length)*(3)))));
//     }
// });
//
// $(".goodsLunBoTwo>div:last-child").click(function () {
//     if($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0]>(-1)*$(".goodsLunBoTwo>section")[0].offsetWidth){
//         $(".goodsLunBoTwo>section>div").css("margin-left",(parseInt($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0])+parseInt(($(".goodsLunBoTwo>section>div")[0].clientWidth/($(".goodsLunBoTwo>section>div>div").length)*(-3)))));
//     }
// });
// $(".goodsLunBoTwo>div:nth-child(1)").click(function () {
//     if($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0]<0){
//         $(".goodsLunBoTwo>section>div").css("margin-left",(parseInt($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0])+parseInt(($(".goodsLunBoTwo>section>div")[0].clientWidth/($(".goodsLunBoTwo>section>div>div").length)*(3)))));
//     }
// });
// // 鼠标移入事件
// $(".goodsLunBoOne>div:nth-child(1)").mouseover(function () {
//     $(".goodsLunBoOne>div:nth-child(1)").css("cursor","pointer");
// });
// $(".goodsLunBoOne>div:last-child").mouseover(function () {
//     $(".goodsLunBoOne>div:last-child").css("cursor","pointer");
// });
// $(".goodsLunBoTwo>div:nth-child(1)").mouseover(function () {
//     $(".goodsLunBoTwo>div:nth-child(1)").css("cursor","pointer");
// });
// $(".goodsLunBoTwo>div:last-child").mouseover(function () {
//     $(".goodsLunBoTwo>div:last-child").css("cursor","pointer");
// });
// //点击按钮背景色变化
// $(".goodsLunBo>section>div>div>h4>i").click(function () {
//     $(this).css("color","#ff4001");
//     $(this).parent().parent().siblings().find("i").css("color","#949494");
// });

<!--监听滚动条-->

window.onscroll=function () {
    console.log(1322)
        if($(".sectionTwo").offset().top<=$(window).scrollTop()){
            // console.log("页面滚地");
            $(".hiddenDiv").css("display","block");
        }
        if($(".sectionTwo").offset().top>$(window).scrollTop()){
            // console.log("页面滚地");
            $(".hiddenDiv").css("display","none");
        }
    };
    