// window.onload=function () {
//     $(".flowerImage").css("height",$(".flowerImage")[0].offsetWidth);
//     $(".sectionTwo").css("height",($(".sectionTwo>div")[0].offsetHeight)*2+60);
//
// }
// window.onresize=function () {
//     $(".flowerImage").css("height",$(".flowerImage")[0].offsetWidth);
//     $(".sectionTwo").css("height",($(".sectionTwo>div")[0].offsetHeight)*2+60);
// }

window.onload=function () {
    myAjax("post","/getAllFlower.do","",function () {
        var data=JSON.parse(xhr.responseText);
        // console.log(data);
        $(".sectionTwo")[0].innerHTML="";
        for(var i=0;i<data.length;i++){
            $(".sectionTwo")[0].innerHTML+=" <div title='"+data[i].description+"'>\n" +
                "            <a>\n" +
                "                <div class=\"flowerImage\">\n" +
                "                     <img src=../../images/image/"+data[i].img+" alt=\"\" >\n" +
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


        $(".sectionTwo>div>a:last-child").click(function () {

            if(sessionStorage.getItem("userId")==null){
                ourAlertNav(500,150,"请先登录",20);
            }else {
                myAjax("post", "/addGoodCartBread.do","G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId")+"&goodstype=鲜花",function () {
                    ourAlert(500,150,"加入购物车成功！",20);
                });

            }
        });
    })
}