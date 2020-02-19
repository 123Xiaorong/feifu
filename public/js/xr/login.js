function userLogin() {
   var username=$("#username")[0].value;
   var password=$("#password")[0].value;
    myAjax("post","/userLogin.do","username="+username+"&password="+password,function () {
        var data=JSON.parse(xhr.responseText);
        // console.log(data)
        if(data==""){
            // alert("查无此人！")
            ourAlertNav(400,100,"登录失败，请重新输入",16);
        }else{
            sessionStorage.setItem("userId",data[0].U_id);
            location.href="cake.html";
        }
    })
}

function sendCode() {
    $.ajax({
        url:"/sendCode.do",
        type:"post",
        data:{
            phone:$("#myPhone").val()
        },
        success:function (data) {
            // $("#sendMsg").html(data);
            console.log(data);

        }
    })
}

function verifyCode() {
    $.ajax({
        url:"/verifyCode.do",
        type:"post",
        data:{
            phone:$("#myPhone").val(),
            code:$("#myCode").val()
        },
        success:function (data) {
            // $("#verifyMsg").html(data);
            console.log(data);
            location.href="../../html/wcm/shouye.html";
        }
    })
}