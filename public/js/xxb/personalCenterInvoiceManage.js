//================发票管理
let liArray=document.getElementById("titleSon").getElementsByTagName("li");
for(let i=0;i<liArray.length;i++){
    liArray[i].No=i;
    liArray[i].onclick=function () {
        for(let j=0;j<liArray.length;j++){
            if(liArray[j].getAttribute("class")==="active"){
                liArray[j].classList.remove("active");
            }
        }
        this.classList.add("active");
    }
}