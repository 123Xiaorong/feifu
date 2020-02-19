var video_id=3;
var User_id=sessionStorage.getItem("userId");
function getVideo3Comments() {
    myAjax("post","/getVideo3Comments.do",null,()=>{
        console.log(xhr.responseText);
    var data=JSON.parse(xhr.responseText);
    if(data!=""){
        for(var i=0;i<data.length;i++){
            document.getElementById("pinglunBorder").innerHTML+=`<div>
            <div class="floatL">
                <img src="../../images/zc/${data[i].user_img}" alt="" class="pinglunBorder_img">
            </div>
            <div class="floatL pinglunContent">
                <div class="pinglun_PerInfo">
                    <span class="Username">${data[i].username}</span>
                    <span>评论时间：${data[i].comment_time}</span>
                </div>
                <div class="pinglun_text">
                    <span>${data[i].comment_text}</span>
                </div>
                  <div>
                    <img src="../../images/zc/${data[i].comment_img}" alt="" class="comment_img" onclick="tupianxiangqing()">
                </div>
            </div>
            <hr class="Clear">
        </div>`;}
    }else {
        document.getElementById("pinglunBorder").innerHTML+=`<div class="wupinglun">
            暂时还没有评论
        </div>`;
    }
})
}
function jiancedenglu() {
    if(User_id!=null){
        document.getElementById("pinglun_huifu").innerHTML=`<div class="Clear">
            <textarea name="pinglunqu" id="pinglunqu" cols="50" rows="5"></textarea>
            <button onclick="pinglun()">提交评论</button>
        </div>`;
    }else {
        document.getElementById("pinglun_huifu").innerHTML=`
        <div class="denglutixing">
            您还没有登录，<a href="../../html/xr/login.html">请登录</a>
        </div>`;
    }
}
window.onload=function () {
    getVideo3Comments();
    jiancedenglu();
};
function tupianxiangqing() {
    $(".comment_img").toggleClass(function () {
        return $(".comment_img").hasClass("comment_img")?"comment_img1":"comment_img"
    })
}
function pinglun() {
    var username;
    var comment_text=$("#pinglunqu").val();
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var pingluntime=year+"-"+mon+"-"+date;
    myAjax("post","/huoquusername.do","U_id="+User_id,function () {
        console.log(xhr.responseText);
        username=JSON.parse(xhr.responseText)[0].username;
        console.log(username);
        myAjax("post","/pinglunVideo1.do","U_id="+User_id+"&Video_id="+video_id+"&username="+username+"&comment_time="+pingluntime+"&comment_text="+comment_text,function () {
            console.log(xhr.responseText);
            document.getElementById("pinglunBorder").innerHTML="";
            getVideo3Comments();
            $("#pinglunqu").val(null);
        })
    });
}