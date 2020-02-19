<!--监听滚动条-->
window.onscroll = function () {
    if ($(".sectionThree").offset().top <= $(window).scrollTop()) {
        $(".hiddenDiv").css("display", "block");
    }
    if ($(".sectionThree").offset().top > $(window).scrollTop()) {
        $(".hiddenDiv").css("display", "none");
    }
};

// ==========页面加载===========
$(window).load(function () {
    getAddGoods();
    getRomdomGoods();
    getCake();
    // 将异步请求改为同步
    getGoodsComment();
    
});


// 蛋糕
function getCake(){
    // console.log(location.search)//?G_id=6
    myAjax("get", "/getCake.do","G_id="+location.search,function () {
        var data = JSON.parse(xhr.responseText);
        if (data.length > 0) {
            // console.log(data)
            // 数组去重
            // for(var j=0;j<data.length;j++){
            //     for(var k=j+1;k<data.length;k++){
            //         if(data[j].G_id==data[k].G_id){
            //             // console.log(11111);
            //             data.splice(j+1,1);
            //             k--;
            //         }
            //     }
            // }
            // console.log(data);
            //===========轮播图===========
            var imgArray=data[0].turnImg.split(",");
            if(imgArray.length==1){
                document.getElementsByClassName("sectionOne")[0].innerHTML="";
                document.getElementsByClassName("sectionOne")[0].innerHTML+="<img src=../../images/image/"+imgArray[0]+" alt=\"\">\n";
            }
            else{
                // console.log(21321);
                document.getElementsByClassName("sectionOne")[0].innerHTML="";
                document.getElementsByClassName("sectionOne")[0].innerHTML += "<div class='prev'></div>\n" +
                    "        <div class='next'></div>";
                document.getElementsByClassName("sectionOne")[0].innerHTML+="<ul class='play'> </ul>";
                // console.log(imgArray.length)
                // console.log($(".play")[0].innerHTML);
                // console.log(imgArray[0])
                $(".play")[0].innerHTML="";
                $(".play")[0].innerHTML+=" <li style=\"display: block;\"><img src='../../images/image/"+imgArray[0]+"' alt=\"\"/></li>";
                // for(var p1=1;p1<imgArray.length;p1++){
                //   $(".play")[0].innerHTML+=" <li><img src='../../images/image/"+imgArray[p1]+"' alt=\"\"/></li>"
                // }
                document.getElementsByClassName("sectionOne")[0].innerHTML+="<ul class='lunBoButton'> </ul>";
                // for (let q=0;q<imgArray.length;q++){
                //     if(q=0){
                //         $(".lunBoButton")[0].innerHTML+="<li>\n" +
                //             "                <div style=\"background: #ff4001;\"></div>\n" +
                //             "            </li>"
                //     }else{
                //         $(".lunBoButton")[0].innerHTML+="<li>\n" +
                //             "                <div></div>\n" +
                //             "            </li>"
                //     }
                // }
                // console.log(document.getElementsByClassName("sectionOne")[0].innerHTML)
                // lunbo();
            }
            // ===========商品名称===========
            $(".goodTitle>h1")[0].innerText=data[0].goodsname;
            // ===========商品标签===========
            $(".goodTitle>h2")[0].innerText=data[0].flavor;
            // ===========商品价格===========
            $(".goodTitle>h3>span")[0].innerText=data[0].price;
            // ===========商品描述===========
            let details=data[0].details.split(",");
            $(".goodInner")[0].innerHTML="";
            for(let m=0;m<details.length;m++){
                $(".goodInner")[0].innerHTML+="<p>"+details[m]+"</p>";
            }
            // ===========建议食用人数===========
            $(".chooseGood")[0].innerHTML="";
            for(let n=0;n<data.length;n++){
                $(".chooseGood")[0].innerHTML+="<button>"+data[n].specification+"</button>"
            }
            $(".chooseGoodMorePone>span")[0].innerText=data[0].number;
            $(".chooseGoodMorePtwo>span")[0].innerText=data[0].size;
            $(".chooseGoodMorePthree>span")[0].innerText=data[0].weight;
            $(".chooseGoodMorePfour")[0].innerHTML="<span>甜度：</span>";
            for(let t=0;t<data[0].sweet;t++){
                $(".chooseGoodMorePfour")[0].innerHTML+="<i class=\"iconfont icon-Donut\"></i>"
            }
            $(".chooseGood>button:nth-child(1)").css("background", "#cea461");

            //===========影藏固定部分===========
            $(".hiddenDivGoodsName")[0].innerText=data[0].goodsname;
            $(".hiddenDiv>p:nth-child(3)")[0].innerText=data[0].flavor;
            $(".hiddenDivPrice>i")[0].innerText=$(".goodTitle>h3>span")[0].innerText;
            $(".hiddenDivPrice>em>span")[0].innerText=data[0].specification;


            //============建议人数中的按钮点击事件==============
            $(".chooseGood>button").click(function () {
                $(this).css("background", "#cea461");
                $(this).siblings().css("background", "#e4dbcd");
                for (var g=0;g<data.length;g++){
                    if(data[g].specification==$(this)[0].innerText){
                        dataChoose=data[g];
                        break;
                    }
                }
                $(".chooseGoodMorePone>span")[0].innerText=dataChoose.number;
                $(".chooseGoodMorePtwo>span")[0].innerText=dataChoose.size;
                $(".chooseGoodMorePthree>span")[0].innerText=dataChoose.weight;
                $(".goodTitle>h3>span")[0].innerText=dataChoose.price;
                $(".hiddenDivPrice>i")[0].innerText=dataChoose.price;
                $(".hiddenDivPrice>em>span")[0].innerText=dataChoose.specification;
                // $(".myHref")[0].innerHTML="<div>\n" +
                //     "                    <a href='../../html/xr/carttest.html?G_id="+data[0].G_id+"&G_name="+data[0].goodsname+"&G_miaoshu="+$(".hiddenDivPrice>em>span")[0].innerText+"" +
                //     "                &G_jiage="+$(".hiddenDivPrice>i")[0].innerText+"&G_pic="+data[0].fisrtImg+"' class='myBtn cartBtn'>加入购物车 +</a>\n" +
                //     "                    <a href='../../html/xr/jiesuantest.html?G_id="+data[0].G_id+"&G_name="+data[0].goodsname+"&G_miaoshu="+$(".hiddenDivPrice>em>span")[0].innerText+"" +
                //     "&G_jiage="+$(".hiddenDivPrice>i")[0].innerText+"&G_pic="+data[0].fisrtImg+"' class=\"myBtn purBtn\">立即购买</a>\n" +
                //     "                </div>";

                // 加入购物车----选择规格
                $(".myHref")[0].innerHTML="<div>\n" +
                    "<a class='myBtn cartBtn' id='"+data[0].G_id+"' style='cursor: pointer'>加入购物车 +</a>\n" +
                    "<a class=\"myBtn purBtn\" id='"+data[0].G_id+"' style='cursor: pointer'>立即购买</a>\n" +
                    "                </div>";

                // +"&userId="+sessionStorage.getItem("userId")

                // console.log($(".hiddenDivPrice>em>span")[0].innerText)
                // console.log(data[0].G_id)


                $(".cartBtn").click(function () {
                    // console.log($(".hiddenDivPrice>em>span")[0].innerText);


                    if(sessionStorage.getItem("userId")==null){
                        ourAlertNav(500,150,"请先登录",20);
                    }else {
                        myAjax("post", "/addGoodCartNewSize.do","G_id="+$(".cartBtn").attr("id")+"&G_miaoshu="+$(".hiddenDivPrice>em>span")[0].innerText+"&userId="+sessionStorage.getItem("userId"),function () {
                            ourAlert(500,150,"加入购物车成功！",20);
                        });
                    }


                });
                $(".purBtn").click(function () {


                    if(sessionStorage.getItem("userId")==null){
                        ourAlertNav(500,150,"请先登录",20);
                    }else {
                        myAjax("post", "/addGoodCartNewSize.do","G_id="+$(".purBtn").attr("id")+"&G_miaoshu="+$(".hiddenDivPrice>em>span")[0].innerText+"&userId="+sessionStorage.getItem("userId"),function () {
                            location.href="../../html/car/gouwuche.html";
                        });

                    }

                });
                // $(".pEnd")[0].innerHTML="<a href='../../html/xr/carttest.html?G_id="+data[0].G_id+"&G_name="+data[0].goodsname+"&G_miaoshu="+$(".hiddenDivPrice>em>span")[0].innerText+"" +
                //     "&G_jiage="+$(".hiddenDivPrice>i")[0].innerText+"&G_pic="+data[0].fisrtImg+"'>加入购物车＋</a>";

                // 隐藏框
                $(".pEnd")[0].innerHTML="<a id='"+data[0].G_id+"' style='cursor: pointer'>加入购物车＋</a>";
                $(".pEnd>a").click(function () {

                    // console.log(data[0].G_id);
                    // console.log($(".pEnd>a").attr("id"))

                    // console.log($(".pEnd>a").attr("id"));
                    // console.log($(".hiddenDivPrice>em>span")[0].innerText);


                    if(sessionStorage.getItem("userId")==null){
                        ourAlertNav(500,150,"请先登录",20);
                    }else {
                        myAjax("post", "/addGoodCartNewSize.do","G_id="+$(".pEnd>a").attr("id")+"&G_miaoshu="+$(".hiddenDivPrice>em>span")[0].innerText+"&userId="+sessionStorage.getItem("userId"),function () {
                            ourAlert(500,150,"加入购物车成功！",20);
                        });

                    }
                });



            });

            //===========详情中的轮播--左边===========
            $(".sectionThreeOne")[0].innerHTML="";
            $(".sectionThreeOne")[0].innerHTML+="<img src='../../images/image/"+data[0].fisrtImg+"' alt=\"\">";
            $(".sectionThreeOne")[0].innerHTML+="<p>"+data[0].goodsname+"</p>";

            // ===========详情中的图片===========
            $(".sectionFour")[0].innerHTML="";
            var imgsNum=data[0].imgs.split(",").length;
            for (var u=0;u<imgsNum;u++){
                $(".sectionFour")[0].innerHTML+="<img src='../../images/image/"+data[0].imgs.split(",")[u]+"' alt=\"\">"
            }
            // ===========主要原材料===========
            var material=data[0].material.split(",");
            $(".materialDesc>table")[0].innerHTML="";
            $(".materialDesc>table")[0].innerHTML+="<thead>\n" +
                "            <td>食材配比</td>\n" +
                "            <td>产地</td>\n" +
                "            </thead>";
            for (var e=0;e<material.length;e++){
                $(".materialDesc>table")[0].innerHTML+="<tr>\n" +
                    "                <td>"+material[e].split(':')[0]+"</td>\n" +
                    "                <td>"+material[e].split(':')[1]+"</td>\n" +
                    "            </tr>";
            }



            // $(".pEnd")[0].innerHTML="<a href='../../html/xr/carttest.html?G_id="+data[0].G_id+"&G_name="+data[0].goodsname+"&G_miaoshu="+data[0].specification+"" +
            //     "&G_jiage="+data[0].price+"&G_pic="+data[0].fisrtImg+"'>加入购物车＋</a>";


            // console.log(data[0].G_id)
            // 未选择规格
            $(".myHref")[0].innerHTML="<div>\n" +
                "<a class='myBtn cartBtn' id='"+data[0].G_id+"' style='cursor: pointer'>加入购物车 +</a>\n" +
                "                    <a class=\"myBtn purBtn\" id='"+data[0].G_id+"' style='cursor: pointer'>立即购买</a>\n" +
                "                </div>";

            $(".cartBtn").click(function () {
                // "G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId")

                if(sessionStorage.getItem("userId")==null){
                    ourAlertNav(500,150,"请先登录",20);
                }else {
                    myAjax("post", "/addGoodCartNew.do","G_id="+$(".cartBtn").attr("id")+"&userId="+sessionStorage.getItem("userId"),function () {
                        // console.log("购物车数据插入成功");
                        ourAlert(500,150,"加入购物车成功！",20);
                    });

                }
            });

            $(".purBtn").click(function () {



                if(sessionStorage.getItem("userId")==null){
                    ourAlertNav(500,150,"请先登录",20);
                }else {

                    myAjax("post", "/addGoodCartNew.do","G_id="+$(".purBtn").attr("id")+"&userId="+sessionStorage.getItem("userId"),function () {
                        location.href="../../html/car/gouwuche.html";
                    });

                }


            });

            // 隐藏层
            $(".pEnd")[0].innerHTML="<a id='"+data[0].G_id+"' style='cursor: pointer'>加入购物车＋</a>";

            $(".pEnd").click(function () {

                if(sessionStorage.getItem("userId")==null){
                    ourAlertNav(500,150,"请先登录",20);
                }else {
                    myAjax("post", "/addGoodCartNew.do","G_id="+$(".pEnd>a").attr("id")+"&userId="+sessionStorage.getItem("userId"),function () {
                        ourAlert(500,150,"加入购物车成功！",20);
                    });

                }
            });
        }
    },false)
}

// 加价购商品
function getAddGoods() {
    myAjax("post", "/getAddGoods.do","",function () {
        var data = JSON.parse(xhr.responseText);
        // console.log(data);
        //详情中的轮播--中间1
        $(".goodsLunBoOne>section>div")[0].innerHTML="";
        for(let k=0;k<6;k++){
            // console.log(k);
            $(".goodsLunBoOne>section>div")[0].innerHTML+="<div id='"+data[k].A_id+"'>\n" +
                "                            <img src='../../images/image/"+data[k].img+"' alt=\"\">\n" +
                "                            <h3>"+data[k].goodsname+"</h3>\n" +
                "                            <h4>\n" +
                "                                <b>￥<span>"+data[k].newPrice+"</span></b>\n" +
                "                                <em>￥<span>"+data[k].oldPrice+"</span></em>\n" +
                "                                <!--<button></button>-->\n" +
                "                                <i class=\"iconfont icon-anniu\"></i>\n" +
                "                            </h4>\n" +
                "                        </div>"
        }

        //详情中的轮播--中间2
        $(".goodsLunBoTwo>section>div")[0].innerHTML="";
        for(let k=4;k<10;k++){
            // console.log(k);
            $(".goodsLunBoTwo>section>div")[0].innerHTML+="<div id='"+data[k].A_id+"'>\n" +
                "                            <img src='../../images/image/"+data[k].img+"' alt=\"\">\n" +
                "                            <h3>"+data[k].goodsname+"</h3>\n" +
                "                            <h4>\n" +
                "                                <b>￥<span>"+data[k].newPrice+"</span></b>\n" +
                "                                <em>￥<span>"+data[k].oldPrice+"</span></em>\n" +
                "                                <!--<button></button>-->\n" +
                "                                <i class=\"iconfont icon-anniu\"></i>\n" +
                "                            </h4>\n" +
                "                        </div>"
        }

        $(".goodsLunBoOne>section>div").css("width", $(".goodsLunBoOne>section")[0].offsetWidth / 3 * ($(".goodsLunBoOne>section>div>div").length));
        $(".goodsLunBoTwo>section>div").css("width", $(".goodsLunBoTwo>section")[0].offsetWidth / 3 * ($(".goodsLunBoTwo>section>div>div").length));
        $(".goodsLunBoOne>section>div>div").css("width", (1 / ($(".goodsLunBoOne>section>div>div").length) * 100) - 2 + "%");
        $(".goodsLunBoTwo>section>div>div").css("width", (1 / ($(".goodsLunBoTwo>section>div>div").length) * 100) - 2 + "%");
        // 左右移动点击事件
        $(".goodsLunBoOne>div:last-child").click(function () {
            if ($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0] > (-1) * $(".goodsLunBoOne>section")[0].offsetWidth) {
                $(".goodsLunBoOne>section>div").css("margin-left", (parseInt($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0]) + parseInt(($(".goodsLunBoOne>section>div")[0].clientWidth / ($(".goodsLunBoOne>section>div>div").length) * (-3)))));
            }
        });
        $(".goodsLunBoOne>div:nth-child(1)").click(function () {
            if ($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0] < 0) {
                $(".goodsLunBoOne>section>div").css("margin-left", (parseInt($(".goodsLunBoOne>section>div").css("margin-left").split("p")[0]) + parseInt(($(".goodsLunBoOne>section>div")[0].clientWidth / ($(".goodsLunBoOne>section>div>div").length) * (3)))));
            }
        });
        $(".goodsLunBoTwo>div:last-child").click(function () {
            if ($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0] > (-1) * $(".goodsLunBoTwo>section")[0].offsetWidth) {
                $(".goodsLunBoTwo>section>div").css("margin-left", (parseInt($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0]) + parseInt(($(".goodsLunBoTwo>section>div")[0].clientWidth / ($(".goodsLunBoTwo>section>div>div").length) * (-3)))));
            }
        });
        $(".goodsLunBoTwo>div:nth-child(1)").click(function () {
            if ($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0] < 0) {
                $(".goodsLunBoTwo>section>div").css("margin-left", (parseInt($(".goodsLunBoTwo>section>div").css("margin-left").split("p")[0]) + parseInt(($(".goodsLunBoTwo>section>div")[0].clientWidth / ($(".goodsLunBoTwo>section>div>div").length) * (3)))));
            }
        });
        // 鼠标移入事件
        $(".goodsLunBoOne>div:nth-child(1)").mouseover(function () {
            $(".goodsLunBoOne>div:nth-child(1)").css("cursor", "pointer");
        });
        $(".goodsLunBoOne>div:last-child").mouseover(function () {
            $(".goodsLunBoOne>div:last-child").css("cursor", "pointer");
        });
        $(".goodsLunBoTwo>div:nth-child(1)").mouseover(function () {
            $(".goodsLunBoTwo>div:nth-child(1)").css("cursor", "pointer");
        });
        $(".goodsLunBoTwo>div:last-child").mouseover(function () {
            $(".goodsLunBoTwo>div:last-child").css("cursor", "pointer");
        });

        $(".sectionThreeSeven")[0].innerHTML="<h4>已添加<strong>0</strong>项加购商品</h4>";
        //点击按钮背景色变化和加购商品
        addJ=0;
        addGoodsNum=new Array();
        $(".goodsLunBo>section>div>div>h4>i").click(function () {
           if ($(this).attr("class").includes("yellowRed")==false){
                $(this).addClass("yellowRed");
                addJ++;
                addGoodsNum.push($(this).parent().parent().attr("id"));
            }else {
                $(this).removeClass("yellowRed");
                addJ--;
                for(var u=0;u<addGoodsNum.length;u++){
                    if (addGoodsNum[u]==$(this).parent().parent().attr("id")) {
                        addGoodsNum.splice(u,1);
                    }
                }
            }
            $(".sectionThreeSeven>h4>strong")[0].innerText=addJ;
        });

        // 立即购买
        $(".sectionThreeSeven")[0].innerHTML+="<a style='cursor: pointer'>立即购买</a>";
        $(".sectionThreeSeven>a").click(function () {
            if(addGoodsNum!=""){


                if(sessionStorage.getItem("userId")==null){
                    ourAlertNav(500,150,"请先登录",20);
                }else {
                    myAjax("post", "/addGoodCartResult.do","G_id="+addGoodsNum+"&userId="+sessionStorage.getItem("userId"),function () {
                        location.href="../../html/car/gouwuche.html";
                    });

                }
            }
        })
    },false)
}



// 热门推荐
function getRomdomGoods() {
    myAjax("post", "/getRomdomGoods.do","",showXrGoods1,false);
}

function showXrGoods1() {
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
    // console.log(data);
    document.getElementsByClassName("hotRecommendation")[0].innerHTML="";
    for(var i=0;i<data.length;i++){
                document.getElementsByClassName("hotRecommendation")[0].innerHTML+="<div>\n" +
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
                    // "            <a href='../../html/xr/carttest.html?G_id="+data[i].G_id+"&G_name="+data[i].goodsname+"&G_miaoshu="+data[i].specification+"" +
                    // "&G_jiage="+data[i].price+"&G_pic="+data[i].img+"' class=\"addCart\">\n" +
                    "<a class=\"addCart\" id='"+data[i].G_id+"' style='cursor: pointer'>\n" +
                    "                <h1>加入购物车</h1>\n" +
                    "                <span>+</span>\n" +
                    "            </a>\n" +
                    "        </div>";
    }
    // 加入购物车--所有商品展示中的

    $(".hotRecommendation>div>a:last-child").click(function () {

        if(sessionStorage.getItem("userId")==null){
            ourAlertNav(500,150,"请先登录",20);
        }else {
            myAjax("post", "/addGoodCartNew.do","G_id="+$(this).attr("id")+"&userId="+sessionStorage.getItem("userId"),function () {
                ourAlert(500,150,"加入购物车成功！",20);
            });

        }
    });

}

// 商品评论
function getGoodsComment() {
    myAjax("post", "/getGoodsComment.do","G_id="+location.search,showGetGoodsComment,false);
}

function showGetGoodsComment() {
    var data=JSON.parse(xhr.responseText);
    console.log(data);
    $(".commentPeopleLeft")[0].innerHTML="";
    $(".hiddenDivGoodsCommint>span")[0].innerText=data.length;
    // 有评论
    if(data.length>0){
        for(var t=0;t<data.length;t++){
            $(".commentPeopleLeft")[0].innerHTML+="<div>\n" +
                "                    <figure>\n" +
                "                        <img src='../../images/image/"+data[t].s_picname+"'>\n" +
                "                    </figure>\n" +
                "                    <section>\n" +
                "                        <p>\n" +
                "                            <span>"+data[t].telphone+"</span>\n" +
                "                            <span>"+data[t].s_mimaoshu+"</span>\n" +
                "                            <span>"+data[t].times+"</span>\n" +
                "                        </p>\n" +
                "                        <h1>"+data[t].text+"</h1>\n" +
                "                        <div>\n" +
                "                            <a href=\"\"><img src='../../images/image/'+data[t].img alt=\"\"></a>\n" +
                "                        </div>\n" +
                "                    </section>\n" +
                "                </div>";
        }
    }
    // 没有评论
    else {
        // console.log(12334)
        // $(".morePage")[0].innerHTML="";
        $(".commentPeopleRight")[0].innerHTML="";
        $(".commentPeopleLeft")[0].innerHTML+="<div style='text-align: center;margin-left: 160px;color: #5a5a5a'><h3>暂时没有评论，期待你的评论！</h3></div>";
    }
}


$(".purseThreeNine>a").click(function () {
    // console.log(12331);
    // 定位到加价购商品


    // if(sessionStorage.getItem("userId")==null){
    //     ourAlertNav(500,150,"请先登录",20);
    // }else {
    //     myAjax("post", "/purseThreeNine.do","",function () {
    //
    //     });
    //     ourAlert(500,150,"加入购物车成功！",20);
    // }
});