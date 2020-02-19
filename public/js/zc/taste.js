var User_id=sessionStorage.getItem("userId");
console.log(User_id);
function submitshenqing() {
    if(User_id!=null){
        var companyname=$("#companyname").val();
        var companyadd=$("#companyadd").val();
        var tastePnum=$("#tastePnum").val();
        var tastePname=$("#tastePname").val();
        var officephone=$("#officephone").val();
        var usertelp=$("#usertelp").val();
        var e_mail=$("#e_mail").val();
        var reg1=/^\d{8,}$/;
        var reg2=/^\d{11}$/;
        var reg3=/^[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{1,}.[a-zA-Z]{2,}$/;
        var reg4=/^\d{1,}$/;
        if(companyname!=""&&companyadd!=""&&(reg4.test(tastePnum)==true)&&tastePname!=""&&(reg1.test(officephone)==true)&&(reg2.test(usertelp)==true)){
            myAjax("post","/tasteshenqing.do","companyname="+companyname+"&companyadd="+companyadd+"&tastePnum="+tastePnum+"&tastePname="+tastePname+"&officephone="+officephone+"&usertelp="+usertelp+"&e_mail="+e_mail,function () {
                console.log(xhr.responseText);
                document.getElementById("modal_body").innerHTML=`申请已提交！请确认您的信息：
                <div>您的公司名称：<span id="modal_companyname"></span></div>
                <div>您的公司地址：<span id="modal_companyadd"></span></div>
                <div>参加人数：<span id="modal_tastePnum"></span></div>
                <div>您的姓名：<span id="modal_tastePname"></span></div>
                <div>您的办公电话：<span id="modal_officephone"></span></div>
                <div>您的手机：<span id="modal_usertelp"></span></div>
                <div>您的邮箱：<span id="modal_e_mail"></span></div>`;
                $("#modal_companyname").text(companyname);
                $("#modal_companyadd").text(companyadd);
                $("#modal_tastePnum").text(tastePnum);
                $("#modal_tastePname").text(tastePname);
                $("#modal_officephone").text(officephone);
                $("#modal_usertelp").text(usertelp);
                $("#modal_e_mail").text(e_mail);
                getallComptaste();
            })
        } else{
            document.getElementById("modal_body").innerHTML=`请正确填写所有必要信息`;
        }
    }else {
        location.href="../../html/xr/login.html";
    }
}
function getallComptaste() {
    myAjax("post","/getallComptaste.do",null,function () {
        console.log(xhr.responseText);
        var data=JSON.parse(xhr.responseText);
        console.log(data);
        for(var i=0;i<data.length;i++){
            document.getElementById("t_companytaste").innerHTML+=`<tr>
                        <td>${data[i].companyname}</td>
                        <td>${data[i].companyadd}</td>
                        <td>${data[i].quantity}</td>
                        <td>${data[i].username}</td>
                        <td>${data[i].officephone}</td>
                        <td>${data[i].cellphone}</td>
                        <td>${data[i].email}</td>
                    </tr>`;
        }
    })
}
window.onload=function () { getallComptaste() };