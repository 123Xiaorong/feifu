//================订单管理
// let liArray=document.getElementById("titleSon").getElementsByTagName("li");
// let orderBoxArray=document.getElementsByClassName("orderBox");
// for(let i=0;i<liArray.length;i++){
//     liArray[i].No=i;
//     liArray[i].onclick=function () {
//         for(let j=0;j<liArray.length;j++){
//             if(!orderBoxArray[j].getAttribute("class").includes("display-none")){
//                 orderBoxArray[j].classList.add("display-none");
//             }
//             if(liArray[j].getAttribute("class")==="active"){
//                 liArray[j].classList.remove("active");
//             }
//         }
//         this.classList.add("active");
//         orderBoxArray[this.No].classList.remove("display-none");
//     }
// }

let liArray=document.getElementById("titleSon").getElementsByTagName("li");
for(let i=0;i<liArray.length;i++){
    liArray[i].No=i;
    liArray[i].onclick=function () {
        if(this.No===0){
            orderState="danxuan-button-active";
        }else if(this.No===1){
            orderState="danxuan-button-zhifu";
        }else if(this.No===2){
            orderState="danxuan-button-shopLater";
        }else if(this.No===3){
            orderState="danxuan-button-shopSuccess";
        }else if(this.No===4){
            orderState="danxuan-button-shopFailure";
        }
        for(let j=0;j<liArray.length;j++){
            if(liArray[j].getAttribute("class")==="active"){
                liArray[j].classList.remove("active");
            }
        }
        this.classList.add("active");
        console.log(this.innerText);
        document.getElementById("orderAlert").innerText="您暂时没有"+this.innerText+"订单";
        orderInit();
    }
}

let orderNum = 0,orderState="danxuan-button-active";

function orderInit() {
    if(document.getElementById("orderList").getElementsByTagName("table").length!==0){
        for(let i=0;i<document.getElementById("orderList").getElementsByTagName("table").length;i++){
            document.getElementById("orderList").removeChild(document.getElementById("orderList").getElementsByTagName("table")[i]);
        }
    }
    myAjax("get", "/getOrder.do", "userId=" + sessionStorage.getItem("userId") + "&state=" + orderState, () => {
        let data = JSON.parse(xhr.responseText);
        // console.log(data);
        orderNum = data.length;
        createOrderTable(data.length+3, 7,data);
    })
}

setInterval(() => {
    if (orderNum === 0) {
        if (document.getElementById("orderAlert").getAttribute("class") === "display-none") {
            document.getElementById("orderAlert").classList.remove("display-none");
        }
    } else {
        if (document.getElementById("orderAlert").getAttribute("class") !== "display-none") {
            document.getElementById("orderAlert").classList.add("display-none");
        }
    }
}, 0);

function createOrderTable(x, y,data) {
    if (x > 3) {
    let newTable = document.createElement("table");
    newTable.setAttribute("cellspacing","0");
    newTable.setAttribute("cellpadding","0");
    let newBody = document.createElement("tbody");
    newTable.appendChild(newBody);
    document.getElementById("orderList").appendChild(newTable);
    //==============创表
    for (let i = 0; i < x; i++) {
        let newTr = document.createElement("tr");
        newBody.appendChild(newTr);
        for (let j = 0; j < y; j++) {
            let newTd = document.createElement("td");
            newTr.appendChild(newTd);
        }
    }
    //===============修表
    // console.log(newBody.getElementsByTagName("tr")[2].getElementsByTagName("td")[y-1]);
        newBody.getElementsByTagName("tr")[2].getElementsByTagName("td")[y - 1].setAttribute("rowspan", x - 3);
        newBody.getElementsByTagName("tr")[2].getElementsByTagName("td")[y - 1].style.borderLeft = "1px solid #e9e9e9";
        for (let i = 3; i < x - 1; i++) {
            newBody.getElementsByTagName("tr")[i].getElementsByTagName("td")[y - 1].parentNode.removeChild(newBody.getElementsByTagName("tr")[i].getElementsByTagName("td")[y - 1]);
        }
        // console.log(newBody.getElementsByTagName("tr")[0].getElementsByTagName("td")[0]);
        newBody.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].setAttribute("colspan", 2);
        newBody.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].parentNode.removeChild(newBody.getElementsByTagName("tr")[0].getElementsByTagName("td")[1]);
        newBody.getElementsByTagName("tr")[0].getElementsByTagName("td")[2].setAttribute("colspan", 2);
        newBody.getElementsByTagName("tr")[0].getElementsByTagName("td")[3].parentNode.removeChild(newBody.getElementsByTagName("tr")[0].getElementsByTagName("td")[3]);
        newBody.getElementsByTagName("tr")[x-1].getElementsByTagName("td")[0].setAttribute("colspan", 2);
        newBody.getElementsByTagName("tr")[x-1].getElementsByTagName("td")[1].parentNode.removeChild(newBody.getElementsByTagName("tr")[x-1].getElementsByTagName("td")[1]);
        newBody.getElementsByTagName("tr")[x-1].getElementsByTagName("td")[1].setAttribute("colspan", 2);
        newBody.getElementsByTagName("tr")[x-1].getElementsByTagName("td")[2].parentNode.removeChild(newBody.getElementsByTagName("tr")[x-1].getElementsByTagName("td")[2]);
        orderReadData(data);
    }
}

function orderReadData(array){
    document.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerHTML=`<p>订单号:<span style="color: red">123456789</span></p>`;
    document.getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML=`<p>订单状态:<span style="color: red">待付款</span></p>`;
    document.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].innerHTML=`<p>商品编号</p>`;
    document.getElementsByTagName("tr")[1].getElementsByTagName("td")[1].innerHTML=`<p>商品名称</p>`;
    document.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].innerHTML=`<p>商品图片</p>`;
    document.getElementsByTagName("tr")[1].getElementsByTagName("td")[3].innerHTML=`<p>商品描述</p>`;
    document.getElementsByTagName("tr")[1].getElementsByTagName("td")[4].innerHTML=`<p>商品单价</p>`;
    document.getElementsByTagName("tr")[1].getElementsByTagName("td")[5].innerHTML=`<p>商品数量</p>`;
    document.getElementsByTagName("tr")[1].getElementsByTagName("td")[6].innerHTML=`<p>合计</p>`;
    let sum=0;
    for(let i=0;i<array.length;i++){
        document.getElementsByTagName("tr")[i+2].getElementsByTagName("td")[0].innerHTML=`<p>${array[i].s_id}</p>`;
        document.getElementsByTagName("tr")[i+2].getElementsByTagName("td")[1].innerHTML=`<p>${array[i].s_name}</p>`;
        document.getElementsByTagName("tr")[i+2].getElementsByTagName("td")[2].innerHTML=`<img src="../../images/image/${array[i].s_picname}">`;
        document.getElementsByTagName("tr")[i+2].getElementsByTagName("td")[3].innerHTML=`<p>${array[i].s_mimaoshu}</p>`;
        document.getElementsByTagName("tr")[i+2].getElementsByTagName("td")[4].innerHTML=`<p>${array[i].s_jiage}</p>`;
        document.getElementsByTagName("tr")[i+2].getElementsByTagName("td")[5].innerHTML=`<p>${array[i].s_shuliang}</p>`;
        sum+=array[i].s_jiage*array[i].s_shuliang;
    }
    document.getElementsByTagName("tr")[2].getElementsByTagName("td")[6].innerHTML="<p style='font-size: 15px'>￥<span style='font-size: 20px;color: red'>"+sum+"</span></p>";
    document.getElementsByTagName("tr")[array.length+2].getElementsByTagName("td")[0].innerHTML="<p>可用优惠卷:<span>全类商品<b style='font-size: 20px;color: red'>5</b>折券</span></p>";
    document.getElementsByTagName("tr")[array.length+2].getElementsByTagName("td")[1].innerHTML="<p>实际需支付金额:￥<span style='font-size: 20px;color: red'>"+sum*0.5+"</span></p>";
    document.getElementsByTagName("tr")[array.length+2].getElementsByTagName("td")[3].innerHTML="<button>支付订单</button>";
    document.getElementsByTagName("tr")[array.length+2].getElementsByTagName("td")[4].innerHTML="<button>取消订单</button>";
    // console.log(document.getElementsByTagName("tr")[array.length+2].getElementsByTagName("td")[5]);
}

window.onload = function () {
    orderInit();
};