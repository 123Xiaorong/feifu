//================优惠券管理
let liArray = document.getElementById("titleSon").getElementsByTagName("li");
for (let i = 0; i < liArray.length - 1; i++) {//导航点击事件
    liArray[i].No = i;
    liArray[i].onclick = function () {
        for (let j = 0; j < liArray.length; j++) {
            if (liArray[j].getAttribute("class") === "active") {
                liArray[j].classList.remove("active");
            }
        }
        this.classList.add("active");
        if(this.innerText==="全部券"){
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,1,3,1);
            totalCoupon(1,3,1);
            pageClick(1,3,1);
        }else if(this.innerText==="打折券"){
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,2,3,1);
            totalCoupon(2,3,1);
            pageClick(2,3,1);
        }else if(this.innerText==="满减券"){
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,3,3,1);
            totalCoupon(3,3,1);
            pageClick(3,3,1);
        }else if(this.innerText==="兑换券"){
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,4,3,1);
            totalCoupon(4,3,1);
            pageClick(4,3,1);
        }else if(this.innerText==="新人券"){
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,5,3,1);
            totalCoupon(5,3,1);
            pageClick(5,3,1);
        }
    }
}

let currentPage = 1, totalPage, showNum = 8;

function totalCoupon(type,state,userId) {
    myAjax("get", "/totalCoupon.do", "type="+type+"&state="+state+"&userId="+userId, () => {
        if(document.getElementById("personalCenterPageBox")!==null){
            document.getElementsByClassName("couponBox")[0].parentNode.removeChild(document.getElementById("personalCenterPageBox"));
        }
        let data = JSON.parse(xhr.responseText);
        // console.log(data[0].totalNum);
        createPage(Math.ceil(data[0].totalNum / showNum));
        // createPage(14);
        // console.log(document.getElementsByClassName("personalCenterPage")[0].offsetWidth);//获取元素宽度
        // console.log(document.getElementsByClassName("personalCenterPage")[13].offsetWidth);//获取元素宽度
        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.width = 30 * Math.ceil(data[0].totalNum / showNum) + "px";
        // document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.width = 30 * 14 + "px";
        if(data[0].totalNum>=40) {
            document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width = document.getElementsByClassName("personalCenterPage")[0].offsetWidth * 5 + "px";//限定显示几个page
        }else {
            document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width=document.getElementsByClassName("personalCenterPage")[0].offsetWidth * Math.ceil(data[0].totalNum / showNum) + "px";
        }
    },false);
}

function showCoupon(currentPage,showNum,type,state,userId) {
    myAjax("get", "/showCoupon.do", "currentPage="+currentPage+"&showNum="+showNum+"&type="+type+"&userId="+userId+"&state="+state, () => {
        let data = JSON.parse(xhr.responseText);
        for (let i = 0; i < data.length; i++) {
            let newCoupon = document.getElementsByClassName("couponBox")[0].cloneNode(true);
            newCoupon.classList.remove("display-none");
            if (data[i].cost.includes("折")) {
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].getElementsByTagName("span")[0].innerText = parseInt(data[i].cost);
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[1].innerText = "消费即可使用";
                newCoupon.getElementsByTagName("div")[2].getElementsByTagName("p")[0].innerText = data[i].conditions + "蛋糕"+"【"+data[i].typees+"】";
                // document.getElementsByClassName("personalCenterBox")[0].appendChild(newCoupon);
                document.getElementsByClassName("personalCenterBox")[0].insertBefore(newCoupon,document.getElementById("personalCenterPageBox"));
            } else if (data[i].cost.includes("满")) {
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerHTML = "";
                let newText = document.createTextNode("减");
                let newSpan = document.createElement("span");
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].appendChild(newText);
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].appendChild(newSpan);
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].getElementsByTagName("span")[0].innerText = data[i].cost.split("减")[1];
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[1].innerText = data[i].cost.split("减")[0] + "即可使用";
                newCoupon.getElementsByTagName("div")[2].getElementsByTagName("p")[0].innerText = data[i].conditions + "蛋糕"+"【"+data[i].typees+"】";
                // document.getElementsByClassName("personalCenterBox")[0].appendChild(newCoupon);
                document.getElementsByClassName("personalCenterBox")[0].insertBefore(newCoupon,document.getElementById("personalCenterPageBox"));
            } else {
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].innerHTML = "";
                let newH3 = document.createElement("h3");
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].appendChild(newH3);
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[0].getElementsByTagName("h3")[0].innerText = data[i].cost;
                newCoupon.getElementsByTagName("div")[1].getElementsByTagName("p")[1].innerText = "免费兑换";
                newCoupon.getElementsByTagName("div")[2].getElementsByTagName("p")[0].innerText = data[i].conditions + "蛋糕×1"+"【"+data[i].typees+"】";
                // document.getElementsByClassName("personalCenterBox")[0].appendChild(newCoupon);
                document.getElementsByClassName("personalCenterBox")[0].insertBefore(newCoupon,document.getElementById("personalCenterPageBox"));
            }
            // console.log(newCoupon);
            if(data[i].state==="true"){
                console.log(parseFloat(data[i].validTime));
                console.log(data[i].getTime.split("T")[0]);
                let endY=data[i].getTime.split("T")[0].split("-")[0];
                let endM=data[i].getTime.split("T")[0].split("-")[1];
                let endD=data[i].getTime.split("T")[0].split("-")[2];
                console.log(endY+"-"+endM+"-"+endD);
                newCoupon.getElementsByClassName("couponGet")[0].classList.add("display-none");
                newCoupon.getElementsByClassName("couponGet")[1].classList.add("display-none");
                newCoupon.getElementsByClassName("couponUse")[0].classList.remove("display-none");
                newCoupon.getElementsByClassName("couponUse")[1].classList.remove("display-none");
            }
            let newNo=document.createElement("p");
            let noText=document.createTextNode(data[i].M_id);
            newNo.appendChild(noText);
            newNo.setAttribute("class","display-none");
            newCoupon.appendChild(newNo);
        }
        // console.log(data);
    },false);
}

window.onload = ()=>{
    showCoupon((currentPage-1)*8,showNum,1,3,1);
    totalCoupon(1,3,1);
};

// setTimeout(()=>{console.log(document.getElementsByClassName("couponBox").length);},1000);

function createPage(totalNum) {
    let pageBox = document.createElement("p");
    pageBox.setAttribute("id", "personalCenterPageBox");
    document.getElementsByClassName("personalCenterBox")[0].appendChild(pageBox);
    let pageLeft = document.createElement("span");
    pageLeft.setAttribute("id", "personalCenterPageLeft");
    let pageLeftText = document.createTextNode("«");
    pageLeft.appendChild(pageLeftText);
    document.getElementById("personalCenterPageBox").appendChild(pageLeft);
    let pageContainer = document.createElement("div");
    let pageShowBox = document.createElement("div");
    for (let i = 1; i < totalNum + 1; i++) {
        let newPage = document.createElement("span");
        let newPageText = document.createTextNode(i);
        newPage.appendChild(newPageText);
        newPage.setAttribute("class", "personalCenterPage");
        if (i === 1) {
            newPage.classList.add("active");
        }
        pageContainer.appendChild(newPage);
    }
    pageShowBox.appendChild(pageContainer);
    document.getElementById("personalCenterPageBox").appendChild(pageShowBox);
    let pageRight = document.createElement("span");
    pageRight.setAttribute("id", "personalCenterPageRight");
    let pageRightText = document.createTextNode("»");
    pageRight.appendChild(pageRightText);
    document.getElementById("personalCenterPageBox").appendChild(pageRight);

    let pageTotal = document.createElement("span");
    let totalTextB = document.createTextNode("共");
    pageTotal.appendChild(totalTextB);
    let pageNum = document.createElement("span");
    let pageNumber = document.createTextNode(totalNum);
    pageNum.appendChild(pageNumber);
    pageNum.setAttribute("id", "totalPage");
    pageTotal.appendChild(pageNum);
    let totalTextA = document.createTextNode("页");
    pageTotal.appendChild(totalTextA);
    document.getElementById("personalCenterPageBox").appendChild(pageTotal);
}

function pageClick(type,state,userId) {
    // console.log(document.getElementById("personalCenterPageLeft"));
    // console.log(document.getElementById("personalCenterPageRight"));
    if (document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left === "") {
        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = 0 + "px";
    }
    let pageArray = document.getElementsByClassName("personalCenterPage");
    document.getElementById("personalCenterPageLeft").onclick = () => {
        if (currentPage > 1) {
            // console.log(currentPage);
            // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width);
            // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left);
            if(parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left)%parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width)===0){//左边开始
                if ((currentPage-1) % 5 === 0) {
                    // console.log(document.getElementById("totalPage").innerText);//获取总页数
                    if (currentPage - 5 >0) {//判断剩下的页数是否有5页
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0]);
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0]);
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) + parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) + "px";
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0]);
                    } else {//页面不足5页时处理方式
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) + parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) / 5 * (currentPage-1) + "px";

                    }
                }
            }else {//右边开始
                if ((parseFloat(document.getElementById("totalPage").innerText)+1-currentPage) % 5 === 0) {
                    // console.log(currentPage);
                    // console.log(parseFloat(document.getElementById("totalPage").innerText)+1-currentPage);
                    // console.log(document.getElementById("totalPage").innerText);//获取总页数
                    if (currentPage - 5 >0) {//判断剩下的页数是否有5页
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0]);
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0]);
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) + parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) + "px";
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0]);
                    } else {//页面不足5页时处理方式
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) + parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) / 5 * (currentPage - 1) + "px";

                    }
                }
            }
            pageInit();
            currentPage--;
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,type,state,userId);
            pageActive(currentPage);
        }
    };
    document.getElementById("personalCenterPageRight").onclick = () => {
        if (currentPage < pageArray.length) {
            // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left);
            if(parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left)%parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width)===0){//左边开始
                if (currentPage % 5 === 0) {
                    // console.log(document.getElementById("totalPage").innerText);//获取总页数
                    if (currentPage + 5 <= document.getElementById("totalPage").innerText) {//判断剩下的页数是否有5页
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) - parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) + "px";
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0]);
                    } else {//页面不足5页时处理方式
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) - parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) / 5 * (parseFloat(document.getElementById("totalPage").innerText) - currentPage) + "px";

                    }
                }
            }else {//右边开始
                if((parseFloat(document.getElementById("totalPage").innerText)-currentPage)%5===0){
                    // console.log(document.getElementById("totalPage").innerText);//获取总页数
                    if (currentPage + 5 <= document.getElementById("totalPage").innerText) {//判断剩下的页数是否有5页
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) - parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) + "px";
                        // console.log(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0]);
                    } else {//页面不足5页时处理方式
                        document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left = parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].getElementsByTagName("div")[0].style.left) - parseFloat(document.getElementById("personalCenterPageBox").getElementsByTagName("div")[0].style.width) / 5 * (parseFloat(document.getElementById("totalPage").innerText) - currentPage) + "px";

                    }
                }
            }
            pageInit();
            currentPage++;
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,type,state,userId);
            pageActive(currentPage);
        }
    };
    let pageBox=document.getElementsByClassName("personalCenterPage");
    for(let i=0;i<pageBox.length;i++){
        pageBox[i].No=i;
        pageBox[i].onclick=function(){
            pageInit();
            currentPage=this.No+1;
            clearCoupon();
            showCoupon((currentPage-1)*8,showNum,type,state,userId);
            pageActive(currentPage);
        }
    }
}

setTimeout(()=>{
    let state;
    if(isHave.split(".")[0]==="true"&&isHave.split(".")[1]==="false"){
        state=1;
    }else if(isHave.split(".")[0]==="false"&&isHave.split(".")[1]==="true"){
        state=2;
    }else {
        state=3;
    }
    pageClick(1,state,1)
}, 1000);

function pageInit() {
    let pageArray = document.getElementsByClassName("personalCenterPage");
    for (let i = 0; i < pageArray.length; i++) {
        if (pageArray[i].getAttribute("class").includes("active")) {
            pageArray[i].classList.remove("active");
        }
    }
}

function pageActive(currentPage) {
    let pageArray = document.getElementsByClassName("personalCenterPage");
    for (let i = 0; i < pageArray.length; i++) {
        if (i + 1 === currentPage) {
            pageArray[i].classList.add("active");
        }
    }
}

function clearCoupon() {
    let couponArray=document.getElementsByClassName("couponBox");
    // console.log(couponArray[0].parentNode);
    for(let i=1;i<couponArray.length;i++){
        couponArray[0].parentNode.removeChild(couponArray[i]);
        i--;
    }
}

let isHave="true"+"."+"true";
function isHaveCoupon() {
    let couponYes=document.getElementById("couponYes").checked;
    let couponNo=document.getElementById("couponNo").checked;
    document.getElementById("couponChoose").onclick=function () {
        setTimeout(()=>{
            if(couponYes!==document.getElementById("couponYes").checked||couponNo!==document.getElementById("couponNo").checked){
                // console.log(document.getElementById("couponYes").checked+"."+document.getElementById("couponNo").checked);
                couponYes=document.getElementById("couponYes").checked;
                couponNo=document.getElementById("couponNo").checked;
                isHave=document.getElementById("couponYes").checked+"."+document.getElementById("couponNo").checked;
                // console.log(isHave);
                // console.log(document.getElementById("titleSon").getElementsByClassName("active")[0]);
                // console.log(typeof isHave.split(".")[0]);
                let state;
                if(isHave.split(".")[0]==="true"&&isHave.split(".")[1]==="false"){
                    state=1;
                }else if(isHave.split(".")[0]==="false"&&isHave.split(".")[1]==="true"){
                    state=2;
                }else {
                    state=3;
                }
                let couponType=document.getElementById("titleSon").getElementsByClassName("active")[0];
                if(couponType.innerText==="全部券"){
                    clearCoupon();
                    showCoupon((currentPage-1)*8,showNum,1,state,1);
                    totalCoupon(1,state,1);
                    pageClick(1,state,1);
                }else if(couponType.innerText==="打折券"){
                    clearCoupon();
                    showCoupon((currentPage-1)*8,showNum,2,state,1);
                    totalCoupon(2,state,1);
                    pageClick(2,state,1);
                }else if(couponType.innerText==="满减券"){
                    clearCoupon();
                    showCoupon((currentPage-1)*8,showNum,3,state,1);
                    totalCoupon(3,state,1);
                    pageClick(3,state,1);
                }else if(couponType.innerText==="兑换券"){
                    clearCoupon();
                    showCoupon((currentPage-1)*8,showNum,4,state,1);
                    totalCoupon(4,state,1);
                    pageClick(4,state,1);
                }else if(couponType.innerText==="新人券"){
                    clearCoupon();
                    showCoupon((currentPage-1)*8,showNum,5,state,1);
                    totalCoupon(5,state,1);
                    pageClick(5,state,1);
                }
            }
        },1);
    }
}
setTimeout(isHaveCoupon,10);

function lockHave() {
    if(document.getElementById("couponYes").checked!==document.getElementById("couponNo").checked){
        if(document.getElementById("couponYes").checked===true){
            document.getElementById("couponYes").disabled=true;
        }else {
            document.getElementById("couponNo").disabled=true;
        }
    }else {
        document.getElementById("couponYes").disabled=false;
        document.getElementById("couponNo").disabled=false;
    }
}
setInterval(lockHave,0);//限定有券无券至少选择一个