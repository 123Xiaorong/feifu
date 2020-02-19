var User_id=sessionStorage.getItem("userId");
console.log(User_id);
function getallyuyueinfo() {
    myAjax("post","/getyuyueinfo.do",null,()=>{
        var data=JSON.parse(xhr.responseText);
    document.getElementById("t_yuyueInfo").innerHTML="";
    for(var i=0;i<data.length;i++){

        document.getElementById("t_yuyueInfo").innerHTML+=
            "<tr>"+
            "<td>"+data[i].username+"</td>"+
            "<td>"+data[i].telphone+"</td>"+
            "<td>"+data[i].quantity+"</td>"+
            "<td>"+data[i].times+"</td>"+
            "</tr>";
    }
})
}
window.onload=function () {
    getallyuyueinfo()
};
function tijiaoyuyue() {
    if(User_id!=null){
        var yuyuetiyan_name=$("#yuyuetiyan_name").val();
        var yuyuetiyan_tel=$("#yuyuetiyan_tel").val();
        var yuyuetiyan_Pnum=$("#yuyuetiyan_Pnum").val();
        var yuyuetiyan_time=$("#yuyuetiyan_time").val();
        var reg1=/^\d{11}$/;
        var reg2=/^\d{1,}$/;
        if(yuyuetiyan_name!=""&&(reg1.test(yuyuetiyan_tel)==true)&&(reg2.test(yuyuetiyan_Pnum)==true)&&yuyuetiyan_time!=""){
            myAjax("post","/tijiaoyuyue.do",
                "username="+yuyuetiyan_name+"&telphone="+yuyuetiyan_tel+"&quantity="+yuyuetiyan_Pnum+"&times="+yuyuetiyan_time,
                ()=>{
                console.log(xhr.responseText);
                document.getElementById("modal_body").innerHTML=`申请成功！请确认您的个人信息：
                <div>您的姓名：<span id="modal_username"></span></div>
                <div>您的电话：<span id="modal_tel"></span></div>
                <div>参加人数：<span id="modal_quantity"></span></div>
                <div>预约时间：<span id="modal_times"></span></div>`;
            $("#modal_username").text(yuyuetiyan_name);
            $("#modal_tel").text(yuyuetiyan_tel);
            $("#modal_quantity").text(yuyuetiyan_Pnum);
            $("#modal_times").text(yuyuetiyan_time);
            getallyuyueinfo();
        })
        } else {
            document.getElementById("modal_body").innerHTML=`请正确输入您的个人信息`;
        }

    }else{
        location.href="../../html/xr/login.html";
    }

}