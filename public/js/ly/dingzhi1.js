function yongliao() {
    // $("#c_geju-1").removeClass();
    // $("#c_geju-3").removeClass();
    $("#c_geju-2").css({
        "display":"inline",
    });
    $("#c_geju-4").css({
        "display":"none",
    });
    $("#c_geju-1").css({
        "display":"none",
    });
    $("#c_geju-3").css({
        "display":"none",
    });
}
function peisong() {
    // $("#c_geju-1").removeClass();
    // $("#c_geju-2").removeClass();
    // $("#c_geju-3").addClass("t_yingchang");
    $("#c_geju-3").css({
        "display":"inline",
    });
    $("#c_geju-4").css({
        "display":"none",
    });
    $("#c_geju-1").css({
        "display":"none",
    });
    $("#c_geju-2").css({
        "display":"none",
    });
}
function sheji() {
    $("#c_geju-1").css({
        "display":"inline",
    });
    $("#c_geju-4").css({
        "display":"none",
    });
    $("#c_geju-3").css({
        "display":"none",
    });
    $("#c_geju-2").css({
        "display":"none",
    });
}
// function fan() {
//     $("#c_geju-4").css({
//         "display":"inline",
//     });
//     $("#c_geju-1").css({
//         "display":"none",
//     });
//     $("#c_geju-2").css({
//         "display":"none",
//     });
//     $("#c_geju-3").css({
//         "display":"none",
//     });
// }
// $("#xiala option:first").prop("selected", 'selected');
var box =  document.getElementById('box');
var smallBox = box.children[0];
var bigBox = box.children[1];
var smalImage = smallBox.children[0];
var mask = smallBox.children[1];
var bigImage = bigBox.children[0];
//鼠标经过的时候显示 mask和big,当鼠标离开的时候隐藏
box.onmouseover = function(){
    mask.style.display = 'block';
    bigBox.style.display = 'block';
}
box.onmouseout = function() {
    mask.style.display = 'none';
    bigBox.style.display = 'none';
}
//鼠标在盒子中移动的时候,让mask和鼠标一起移动
box.onmousemove = function(e) {
    var e = e||window.event;
    //获取鼠标在盒子中的位置,就是mask的坐标
    var maskX = getPage(e).pageX - box.offsetLeft;
    var maskY = getPage(e).pageY - box.offsetTop;
    //让鼠标出现在mask的中心点
    maskX = maskX-mask.offsetWidth/2;
    maskY = maskY-mask.offsetHeight/2;
    //把mask限制到box中
    maskX = maskX<0?0:maskX;
    maskY = maskY<0?0:maskY;

    maskX = maskX > box.offsetWidth-mask.offsetWidth?box.offsetWidth-mask.offsetWidth:maskX;
    maskY = maskY > box.offsetHeight-mask.offsetHeight?box.offsetHeight-mask.offsetHeight:maskY;

    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    //当mask移动的时候,让大图移动(求大图片移动的距离)
    //mask移动的距离/mask最大能够移动的距离 = 大图片移动的距离/大图片最大能够移动的距离

    //mask最大能够移动的距离
    var maskMax = box.offsetWidth - mask.offsetWidth;
    //大图片最大能够移动的距离
    var bigImageMax = bigImage.offsetWidth - bigBox.offsetWidth;

    var bigImageX = maskX * bigImageMax / maskMax;
    var bigImageY = maskY * bigImageMax / maskMax;

    bigImage.style.left = -bigImageX + 'px';
    bigImage.style.top = -bigImageY + 'px'
}