// ==================资料管理
// let labelArray=document.getElementsByClassName("beforeSelect");
// for(let i=0;i<labelArray.length;i++){
//     labelArray[i].No=i;
//     labelArray[i].nextElementSibling.onchange=function () {
//         console.log(this.value);
//         labelArray[i].innerText=this.value;
//     }
// }
//===================生日助手
//初始化
let addBirthArray = document.getElementsByClassName("addBirth");
let birthShowArray = document.getElementsByClassName("birthShow");
function helperInit() {
    myAjax("get", "/initHelper.do", "userId=" + sessionStorage.getItem("userId"), () => {
        // console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        // console.log(data);
        for(let i=0;i<data.length;i++) {
            // let picNo = Math.ceil(Math.random() * 11);
            judgeBirthday(data[i].birthday.split("T")[0]);
            addBirthArray[i].classList.add("display-none");
            birthShowArray[i].classList.remove("display-none");
            birthShowArray[i].getElementsByTagName("p")[0].innerText=data[i].remark;
            birthShowArray[i].getElementsByTagName("p")[1].innerText=data[i].birthday.split("T")[0];
            // console.log(birthShowArray[this.No]);
            birthShowArray[i].style.backgroundImage = "url('../../images/xxb/constellation/" + bNo + ".png')";
            birthShowArray[i].style.backgroundSize = "cover";
        }
    }, false)
}

//生日助手增加事件
for (let i = 0; i < addBirthArray.length; i++) {
    addBirthArray[i].No = i;
    addBirthArray[i].onclick = function () {
        sessionStorage.setItem("alertState", "B");
    }
}
setInterval(()=>{
    if(sessionStorage.getItem("refresh")==="true"){
        location.reload();
        sessionStorage.setItem("refresh","false")
    }
    },0);
//生日助手点击事件
let deleteRemark;
for(let i=0;i<birthShowArray.length;i++){
    // birthShowArray[i].getElementsByTagName("button")[1].No=i;
    // birthShowArray[i].getElementsByTagName("button")[0].onclick=function () {
    //     sessionStorage.setItem("alertState", "B2");
    //     sessionStorage.setItem("helperNo",i)
    // };
    birthShowArray[i].getElementsByTagName("button")[1].onclick=function () {
        deleteRemark=this.parentNode.parentNode.getElementsByTagName("p")[0].innerText;
        // console.log(deleteRemark);
        sessionStorage.setItem("alertState", "B3");
    }
}
setInterval(()=>{
    if(sessionStorage.getItem("deleteState")==="true"){
        // console.log(birthShowArray[i]);
        // console.log(this.No);
        // console.log("要删！！！");
        myAjax("get","/deleteHelper.do","userId="+sessionStorage.getItem("userId")+"&remark="+deleteRemark,()=>{
            location.reload();
        });
        sessionStorage.setItem("deleteState","false");
    }
},0);



let bNo;
function judgeBirthday(birthday) {
    let monthB = Number(birthday.split("-")[1]);
    let dayB = Number(birthday.split("-")[2]);
    // console.log(monthB + "+" + dayB);
    if (monthB === 3 && dayB >= 21) {
        bNo = 1;
        //console.log(bNo);
    }
    if (monthB === 4 && dayB <= 19) {
        bNo = 1;
        //console.log(bNo);
    }
    if (monthB === 4 && dayB >= 20) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 5 && dayB <= 20) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 5 && dayB >= 21) {
        bNo = 9;
        //console.log(bNo);
    }
    if (monthB === 6 && dayB <= 21) {
        bNo = 9;
        //console.log(bNo);
    }
    if (monthB === 6 && dayB >= 22) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 7 && dayB <= 22) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 7 && dayB >= 23) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 8 && dayB <= 22) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 8 && dayB >= 23) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 9 && dayB <= 22) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 9 && dayB >= 23) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 10 && dayB <= 23) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 10 && dayB >= 24) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 11 && dayB <= 22) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 11 && dayB >= 23) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 12 && dayB <= 21) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 12 && dayB >= 22) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 1 && dayB <= 19) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 1 && dayB >= 20) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 2 && dayB <= 18) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 2 && dayB >= 19) {
        bNo = 5;
        //console.log(bNo);
    }
    if (monthB === 3 && dayB <= 20) {
        bNo = 5;
        //console.log(bNo);
    }
}//星座判断

//个人信息地址输入
function choose() {
    for (let i = 0; i < document.getElementsByClassName("chooseAddress").length; i++) {
        document.getElementsByClassName("chooseAddress")[i].No = i;
        document.getElementsByClassName("chooseAddress")[i].onclick = function () {
            if (this.No === 0) {
                sessionStorage.setItem("alertState", "P");
                setInterval(() => {
                    if (document.getElementsByClassName("chooseAddress")[0].value !== sessionStorage.getItem("province")) {
                        document.getElementsByClassName("chooseAddress")[1].value = "";
                        sessionStorage.setItem("city", "");
                        document.getElementsByClassName("chooseAddress")[2].value = "";
                        sessionStorage.setItem("district", "");
                        // console.log("gggg")
                    }
                }, 0);
                let provinceTimer = setInterval(() => {//持续获取session中的province值赋给input省
                    document.getElementsByClassName("chooseAddress")[0].value = sessionStorage.getItem("province");
                    // console.log(document.getElementsByClassName("chooseAddress")[0].value);
                }, 0);
                // setTimeout(()=>{clearInterval(provinceTimer)},3000);
            } else if (this.No === 1) {
                sessionStorage.setItem("alertState", "C");
                setInterval(() => {
                    if (document.getElementsByClassName("chooseAddress")[1].value !== sessionStorage.getItem("city")) {
                        document.getElementsByClassName("chooseAddress")[2].value = "";
                        sessionStorage.setItem("district", "");
                        // console.log("kkkk")
                    }
                }, 0);
                setInterval(() => {//持续获取session中的city值赋给input市
                    document.getElementsByClassName("chooseAddress")[1].value = sessionStorage.getItem("city");
                }, 0);
            } else {
                sessionStorage.setItem("alertState", "D");
                setInterval(() => {//持续获取session中的district值赋给input区
                    document.getElementsByClassName("chooseAddress")[2].value = sessionStorage.getItem("district");
                }, 0);
            }
        }
    }
}

choose();

//用户id获取
let userId = sessionStorage.getItem("userId");
// console.log(userId);

//数据管理信息呈现
let initAddress;

//显示个人信息
function getUserInformation() {
    myAjax("get", "/personalCenterGetUserInformation.do", "userId=" + userId, () => {
        let data = JSON.parse(xhr.responseText);
        // console.log(data);
        // console.log(data[0].username);
        // console.log(data[0].sex);
        // console.log(data[0].birthday);
        // console.log(data[0].address);
        // console.log(data[0].telphone);
        // console.log(data[0].num);
        // console.log(data[0].touxiang);
        //昵称
        document.getElementById("userNickname").value = data[0].username.split(".")[data[0].username.split(".").length - 1];
        //姓名
        document.getElementById("userName").value = data[0].username.split(".")[0];
        //性别
        if (data[0].sex === "男") {
            document.getElementById("man").checked = true;
        } else {
            document.getElementById("woman").checked = true;
        }
        //生日
        document.getElementById("birthYear").value = data[0].birthday.split("T")[0].split("-")[0];
        document.getElementById("birthMonth").value = data[0].birthday.split("T")[0].split("-")[1];
        document.getElementById("birthDay").value = data[0].birthday.split("T")[0].split("-")[2];
        //住址
        if (data[0].address.includes("-")) {
            document.getElementsByClassName("chooseAddress")[0].value = data[0].address.split("-")[0];
            document.getElementsByClassName("chooseAddress")[1].value = data[0].address.split("-")[1];
            document.getElementsByClassName("chooseAddress")[2].value = data[0].address.split("-")[2];
            sessionStorage.setItem("province", data[0].address.split("-")[0]);
            sessionStorage.setItem("city", data[0].address.split("-")[1]);
            sessionStorage.setItem("district", data[0].address.split("-")[2]);
            initAddress = data[0].address;
        } else {
            document.getElementsByClassName("chooseAddress")[0].value = "四川省";
            document.getElementsByClassName("chooseAddress")[1].value = "成都市";
            document.getElementsByClassName("chooseAddress")[2].value = "武侯区";
            sessionStorage.setItem("province", "四川省");
            sessionStorage.setItem("city", "成都市");
            sessionStorage.setItem("district", "武侯区");
            initAddress = "四川省-成都市-武侯区";
        }
        //电话
        document.getElementById("userTel").value = data[0].telphone;
        //积分
        document.getElementById("userScore").innerText = data[0].num;
        //头像
        if (data[0].touxiang === null) {
            // console.log(data[0].touxiang);
            let tNo = Math.ceil(Math.random() * 11);
            document.getElementById("contentBoxL").getElementsByTagName("img")[0].setAttribute("src", "../../images/touxiang/" + tNo + ".png");
        } else {
            document.getElementById("contentBoxL").getElementsByTagName("img")[0].setAttribute("src", "../../uploads/" + data[0].touxiang);
        }

    }, false)
}

//地址变化启用提交按钮
function addressIfChange() {
    let nowAddress = document.getElementsByClassName("chooseAddress")[0].value + "-" + document.getElementsByClassName("chooseAddress")[1].value + "-" + document.getElementsByClassName("chooseAddress")[2].value;
    if (initAddress !== nowAddress) {
        ifChange();
        // console.log(initAddress);
        // console.log(nowAddress);
    }
}

setTimeout(() => {
    setInterval(addressIfChange, 0)
}, 1000);

//当个人信息变化时启用提交函数
function ifChange() {
    document.getElementById("savePersonal").classList.remove("disabled");
    document.getElementById("savePersonal").disabled = "";
}

//用户头像更改
document.getElementById("contentBoxL").getElementsByTagName("img")[0].onclick = function () {
    sessionStorage.setItem("alertState", "I");
};
setInterval(() => {
    if (sessionStorage.getItem("imgUpdateState") === "true") {
        myAjax("get", "/updateImg.do", "userId=" + sessionStorage.getItem("userId"), () => {
            let imgName = JSON.parse(xhr.responseText)[0].touxiang;
            document.getElementById("contentBoxL").getElementsByTagName("img")[0].setAttribute("src", "../../uploads/" + imgName);
        });
        ifChange();
        sessionStorage.setItem("imgUpdateState", "false");
    }
}, 0);//更新头像

//用户信息保存
document.getElementById("savePersonal").onclick = function () {
    //头像信息
    let imgNew = document.getElementById("contentBoxL").getElementsByTagName("img")[0].getAttribute("src").split("/")[document.getElementById("contentBoxL").getElementsByTagName("img")[0].getAttribute("src").split("/").length - 1];
    //昵称信息
    let nicknameNew = document.getElementById("userNickname").value;
    //姓名信息
    let nameNew = document.getElementById("userName").value;
    //性别信息
    // console.log(document.getElementById("man").checked);
    let sexNew;
    if (document.getElementById("man").checked === true) {
        sexNew = "男";
    } else {
        sexNew = "女";
    }
    //生日信息
    let birthdayNew = document.getElementById("birthYear").value + "-" + document.getElementById("birthMonth").value + "-" + document.getElementById("birthDay").value;
    //城市信息
    let cityNew = document.getElementsByClassName("chooseAddress")[0].value + "-" + document.getElementsByClassName("chooseAddress")[1].value + "-" + document.getElementsByClassName("chooseAddress")[2].value;
    //电话信息
    let telphoneNew = document.getElementById("userTel").value;
    // console.log(imgNew);
    // console.log(nicknameNew);
    // console.log(nameNew);
    // console.log(sexNew);
    // console.log(birthdayNew);
    // console.log(cityNew);
    // console.log(telphoneNew);
    myAjax("get", "/saveNew.do", "userId=" + sessionStorage.getItem("userId") + "&imgNew=" + imgNew + "&nicknameNew=" + nicknameNew + "&nameNew=" + nameNew + "&sexNew=" + sexNew + "&birthdayNew=" + birthdayNew + "&cityNew=" + cityNew + "&telphoneNew=" + telphoneNew, () => {
        sessionStorage.setItem("alertState", "S");
        // getUserInformation()
    })
};

setInterval(()=>{
    if(sessionStorage.getItem("alertState")==="AS"){
        location.reload();
        sessionStorage.setItem("alertState","");
    }
},0);
window.onload = function () {
    getUserInformation();
    choose();
    helperInit();
};