// ==================资料管理
let labelArray=document.getElementsByClassName("beforeSelect");
for(let i=0;i<labelArray.length;i++){
    labelArray[i].No=i;
    labelArray[i].nextElementSibling.onchange=function () {
        console.log(this.value);
        labelArray[i].innerText=this.value;
    }
}
let addBirthArray=document.getElementsByClassName("addBirth");
let birthShowArray=document.getElementsByClassName("birthShow");
for(let i=0;i<addBirthArray.length;i++){
    addBirthArray[i].No=i;
    addBirthArray[i].onclick=function () {
        let picNo=Math.ceil(Math.random()*11);
        this.classList.add("display-none");
        birthShowArray[this.No].classList.remove("display-none");
        // console.log(birthShowArray[this.No]);
        birthShowArray[this.No].style.backgroundImage="url('../../images/xxb/constellation/"+picNo+".png')";
        birthShowArray[this.No].style.backgroundSize="cover";
    }
}
//================订单管理
let liArray=document.getElementById("orderTitle").getElementsByTagName("li");
let orderBoxArray=document.getElementsByClassName("orderBox");
for(let i=0;i<liArray.length;i++){
    liArray[i].No=i;
    liArray[i].onclick=function () {
        for(let j=0;j<liArray.length;j++){
            if(!orderBoxArray[j].getAttribute("class").includes("display-none")){
                orderBoxArray[j].classList.add("display-none");
            }
            if(liArray[j].getAttribute("class")==="active"){
                liArray[j].classList.remove("active");
            }
        }
        this.classList.add("active");
        orderBoxArray[this.No].classList.remove("display-none");
    }
}
