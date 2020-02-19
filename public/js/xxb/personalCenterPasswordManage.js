$.ajax({
    type:"post",
    url:"/getUserPassword.do",
    data:{userId:sessionStorage.getItem("userId")},
    success:data=>{
        console.log(data);
        $("#userId").val(data[0].U_id);
        $("#userPassword").val(data[0].userpassword);
        $("#userTel").val(data[0].telphone);
        $("#userEmail").val(data[0].email);
        for(let i=0;i<document.getElementById("question1").getElementsByTagName("option").length;i++){
            // console.log(document.getElementById("question1").getElementsByTagName("option")[i].innerText===data[0].question1);
            if(document.getElementById("question1").getElementsByTagName("option")[i].innerText===data[0].question1){
                document.getElementById("question1").getElementsByTagName("option")[i].selected=true;
            }
        }
        document.getElementById("question1A").value=data[0].answer1;
        for(let i=0;i<document.getElementById("question2").getElementsByTagName("option").length;i++){
            // console.log(document.getElementById("question1").getElementsByTagName("option")[i].innerText===data[0].question1);
            if(document.getElementById("question2").getElementsByTagName("option")[i].innerText===data[0].question2){
                document.getElementById("question2").getElementsByTagName("option")[i].selected=true;
            }
        }
        document.getElementById("question2A").value=data[0].answer2;
        for(let i=0;i<document.getElementById("question3").getElementsByTagName("option").length;i++){
            // console.log(document.getElementById("question1").getElementsByTagName("option")[i].innerText===data[0].question1);
            if(document.getElementById("question3").getElementsByTagName("option")[i].innerText===data[0].question3){
                document.getElementById("question3").getElementsByTagName("option")[i].selected=true;
            }
        }
        document.getElementById("question3A").value=data[0].answer3;

    },
    error:error=>{console.log(error);}
});
$("#showPwd").change(function () {
    if(this.checked===true){
        $("#userPassword").attr("type","text");
    }else {
        $("#userPassword").attr("type","password");
    }
});
$("#changePassword").click(function () {
    sessionStorage.setItem("alertState","CP");
});

let questionArray=[
    "您母亲的姓名是？","您父亲的姓名是？","您配偶的姓名是？",
    "您小学班主任的姓名是？","您初中班主任的姓名是？","您大学辅导员的姓名是？",
    "您最喜欢的运动是？","您最讨厌的东西是？","您的特长是？",
];

function questionInit() {
    for(let i=0;i<questionArray.length;i++){
        let newOption=document.createElement("option");
        let newText=document.createTextNode(questionArray[i]);
        newOption.appendChild(newText);
        document.getElementById("question1").appendChild(newOption);
    }
    for(let i=0;i<questionArray.length;i++){
        let newOption=document.createElement("option");
        let newText=document.createTextNode(questionArray[i]);
        newOption.appendChild(newText);
        document.getElementById("question2").appendChild(newOption);
    }
    for(let i=0;i<questionArray.length;i++){
        let newOption=document.createElement("option");
        let newText=document.createTextNode(questionArray[i]);
        newOption.appendChild(newText);
        document.getElementById("question3").appendChild(newOption);
    }
}
window.onload=function () {
    questionInit();
};
$("#question1").change(function () {
    $("#questionSave").attr("disabled","false");
    $("#questionSave").removeClass("disabled");
    $("#question1A").val("");
});
$("#question2").change(function () {
    $("#questionSave").attr("disabled","false");
    $("#questionSave").removeClass("disabled");
    $("#question2A").val("");
});
$("#question3").change(function () {
    $("#questionSave").attr("disabled","false");
    $("#questionSave").removeClass("disabled");
    $("#question3A").val("");
});
$("#question1A").change(function () {
    $("#questionSave").attr("disabled","false");
    $("#questionSave").removeClass("disabled");
});
$("#question2A").change(function () {
    $("#questionSave").attr("disabled","false");
    $("#questionSave").removeClass("disabled");
});
$("#question3A").change(function () {
    $("#questionSave").attr("disabled","false");
    $("#questionSave").removeClass("disabled");
});
$("#questionSave").click(function () {
    let question1=$("#question1").val();
    let question2=$("#question2").val();
    let question3=$("#question3").val();
    let answer1=$("#question1A").val();
    let answer2=$("#question2A").val();
    let answer3=$("#question3A").val();
    let nullArray=[];
    let dataArray=[question1,answer1,question2,answer2,question3,answer3,sessionStorage.getItem("userId")];
    if(answer1===""){
        nullArray.push("答案1");
    }
    if(answer2===""){
        nullArray.push("答案2");
    }
    if(answer3===""){
        nullArray.push("答案3");
    }
    if(nullArray.length===0){
        let answerArray=JSON.stringify(dataArray);
        myAjax("get","/updateAnswer.do","dataArray="+answerArray,()=>{
            sessionStorage.setItem("alertState","UA");
        })
    }
});