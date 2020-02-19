// window.onload=function () {
//     $(".breakfastImage").css("height",$(".breakfastImage")[0].offsetWidth);
//     $(".sectionTwo").css("height",($(".sectionTwo>div")[0].offsetHeight)*3+60);
//
// }
// window.onresize=function () {
//     $(".breakfastImage").css("height",$(".breakfastImage")[0].offsetWidth);
//     $(".sectionTwo").css("height",($(".sectionTwo>div")[0].offsetHeight)*3+60);
// }
window.onload=function () {
    getAllBreakfast();
};
function getAllBreakfast() {
    myAjax("post","/getAllBreakfast.do","",function () {
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
        // console.log(data);
        $(".sectionTwo")[0].innerHTML="";
        for(var i=0;i<data.length;i++){
            if(data[i].goodstype=="面包"){
                $(".sectionTwo")[0].innerHTML+="<div>\n" +
                    "            <a href='breadDetails.html?G_id="+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <div class='breakfastImage'>\n" +
                    "                     <img src=../../images/image/"+data[i].img+" alt=\"\">\n" +
                    "                </div>\n" +
                    "            </a>\n" +
                    "            <a href='breadDetails.html?G_id="+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <h3>"+data[i].goodsname+"</h3>\n" +
                    "            </a>\n" +
                    // "            <h4>"+data[i].goodslabel+"</h4>\n" +
                    "            <p>\n" +
                    "                <small>￥</small>\n" +
                    "                <span>"+data[i].flavor+"</span>\n" +
                    "            </p>\n" +
                    // "            <a href='../../html/xr/carttest.html?G_id="+data[i].G_id+"&G_name="+data[i].goodsname+"&G_miaoshu="+data[i].specification+"" +
                    // "&G_jiage="+data[i].price+"&G_pic="+data[i].img+"' class=\"addCart\">\n" +
                    "<a class=\"addCart\" id='"+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <h1>加入购物车</h1>\n" +
                    "                <span>+</span>\n" +
                    "            </a>\n" +
                    "        </div>";
            }
            if(data[i].goodstype=="饮品"){
                $(".sectionTwo")[0].innerHTML+=" <div title='"+data[i].description+"'>\n" +
                    "            <a>\n" +
                    "                <div class=\"breakfastImage\">\n" +
                    "                     <img src=../../images/image/"+data[i].img+" alt=\"\">\n" +
                    "                </div>\n" +
                    "            </a>\n" +
                    "            <a href=\"#\">\n" +
                    "                <h3>"+data[i].goodsname+"</h3>\n" +
                    "            </a>\n" +
                    "            <h4>"+data[i].goodslabel+"</h4>\n" +
                    "            <p>\n" +
                    "                <small>￥</small>\n" +
                    "                <span>"+data[i].flavor+"</span>\n" +
                    "            </p>\n" +
                    "<a class=\"addCart\" id='"+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <h1>加入购物车</h1>\n" +
                    "                <span>+</span>\n" +
                    "            </a>\n" +
                    "        </div>";
            }
        }

        $(".sectionTwo>div>a:last-child").click(function () {


            if(sessionStorage.getItem("userId")==null){
                ourAlertNav(500,150,"请先登录",20);
            }else {
                myAjax("post", "/addGoodCartBreadMore.do","G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId")+"&goodstype=面包%饮品",function () {
                    ourAlert(500,150,"加入购物车成功！",20);
                });

            }
        });
    })
}