// ===========================地图部分==========
//===============================创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(102.098826,37.610502),4);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
}
//向地图添加控件
function addMapControl(){
    let scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    let navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
    let overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    map.addControl(overviewControl);
}
let map;
initMap();
//==================================定位
function setPlaceA(value,zoom) {
    let local, point, marker = null;
    local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: fn
    });

    local.search(value);

    function fn() {
        //如果搜索的有结果
        // console.log(local.getResults());
        // console.log(local.getResults().getPoi(9).point);
        if(local.getResults() !== undefined) {
            map.clearOverlays(); //清除地图上所有覆盖物
            if(local.getResults().getPoi(0)) {
                point = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
                map.centerAndZoom(point, zoom);
                // marker = new BMap.Marker(point); // 创建标注
                var redIcon = new BMap.Icon('../../images/xxb/red.png', new BMap.Size(25, 25), {
                    anchor: new BMap.Size(12, 25)
                });
                marker = new BMap.Marker(point,{icon:redIcon}); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.enableDragging(); // 可拖拽
                // alert("当前定位经度:"+point.lng+"纬度:"+point.lat);
            } else {
                // alert("未匹配到地点!可拖动地图上的红色图标到精确位置");
                sessionStorage.setItem("alertState","LW");
            }
        } else {
            // alert("未找到搜索结果")
            sessionStorage.setItem("alertState","LN");
        }
    }
}
function setPlaceB(value,zoom) {
    let local, point, marker = null;
    local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: fn
    });

    local.search(value);

    function fn() {
        //如果搜索的有结果
        // console.log(local.getResults().Br.length);
        // console.log(local.getResults().getPoi(9).point);
        if(local.getResults() !== undefined) {
            map.clearOverlays(); //清除地图上所有覆盖物
            if(local.getResults().Br.length>0) {
                for(let i=0;i<local.getResults().Br.length;i++){
                    point = local.getResults().getPoi(i).point; //获取第一个智能搜索的结果
                    map.centerAndZoom(point, zoom);
                    // marker = new BMap.Marker(point); // 创建标注
                    var blackIcon = new BMap.Icon('../../images/xxb/black.png', new BMap.Size(25, 25), {
                        anchor: new BMap.Size(12, 25)
                    });
                    marker = new BMap.Marker(point,{icon:blackIcon}); // 创建标注
                    map.addOverlay(marker); // 将标注添加到地图中
                    marker.enableDragging(); // 可拖拽
                    // alert("当前定位经度:"+point.lng+"纬度:"+point.lat);
                }
            } else {
                // alert("未匹配到地点!可拖动地图上的红色图标到精确位置");
                sessionStorage.setItem("alertState","LW");
            }
        } else {
            // alert("未找到搜索结果")
            sessionStorage.setItem("alertState","LN");
        }
    }
}
function setPlaceC(value,zoom) {
    let local, point, marker = null;
    local = new BMap.LocalSearch(map, { //智能搜索
        onSearchComplete: fn
    });

    local.search(value);

    function fn() {
        //如果搜索的有结果
        // console.log(local.getResults());
        // console.log(local.getResults().getPoi(9).point);
        if(local.getResults() !== undefined) {
            // map.clearOverlays(); //清除地图上所有覆盖物
            if(local.getResults().getPoi(0)) {
                point = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
                map.centerAndZoom(point, zoom);
                // marker = new BMap.Marker(point); // 创建标注
                var redIcon = new BMap.Icon('../../images/xxb/red.png', new BMap.Size(25, 25), {
                    anchor: new BMap.Size(12, 25)
                });
                marker = new BMap.Marker(point,{icon:redIcon}); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.enableDragging(); // 可拖拽
                // alert("当前定位经度:"+point.lng+"纬度:"+point.lat);
            } else {
                // alert("未匹配到地点!可拖动地图上的红色图标到精确位置");
                sessionStorage.setItem("alertState","LW");
            }
        } else {
            // alert("未找到搜索结果")
            sessionStorage.setItem("alertState","LN");
        }
    }
}
// 按钮事件
// $("#btn").click(function(){
//     setPlace($("#address").val());
// });
// // ============================编写自定义函数,创建标注
// function addMarker(point){
//     let marker = new BMap.Marker(point);
//     map.addOverlay(marker);
// }
// 随机向地图添加25个标注
// let bounds = map.getBounds();
// // console.log(bounds);
// let sw = bounds.getSouthWest();
// let ne = bounds.getNorthEast();
// let lngSpan = Math.abs(sw.lng - ne.lng);
// let latSpan = Math.abs(ne.lat - sw.lat);
// console.log(sw.lng + lngSpan * (Math.random() * 0.7));
// for (let i = 0; i < 50; i ++) {
//     let point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
//     addMarker(point);
// }

// ================兼容性检测
// if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
//     let points = [];  // 添加海量点数据
//     for (let i = 0; i < data.data.length; i++) {
//         points.push(new BMap.Point(data.data[i][0], data.data[i][1]));
//     }
//     let options = {
//         shape: BMAP_POINT_SHAPE_WATERDROP
//     }
//     let pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
//     map.addOverlay(pointCollection);  // 添加Overlay
// } else {
//     alert('请用chrome、safari、IE8+以上浏览器查看');
// }

$("#mapSearch>button:nth-of-type(1)").click(function () {
    sessionStorage.setItem("alertState","PG");
    sessionStorage.setItem("mapProvince",this.innerText);
});
setInterval(()=>{
    if(sessionStorage.getItem("mapProvinceNo")==="1"){
        $("#mapSearch>button:nth-of-type(1)").text(sessionStorage.getItem("mapProvince"));
        setPlaceA($("#mapSearch>button:nth-of-type(1)").text(),5.5);
        sessionStorage.setItem("mapProvinceNo","0");
    }
},0);
$("#mapSearch>button:nth-of-type(2)").click(function () {
    sessionStorage.setItem("alertState","CG");
    sessionStorage.setItem("mapCity",this.innerText);
});
setInterval(()=>{
    if(sessionStorage.getItem("mapCityNo")==="1"){
        $("#mapSearch>button:nth-of-type(2)").text(sessionStorage.getItem("mapCity"));
        setPlaceA($("#mapSearch>button:nth-of-type(2)").text(),8.5);
        sessionStorage.setItem("mapCityNo","0");
    }
},0);
$("#mapSearch>button:nth-of-type(3)").click(function () {
    sessionStorage.setItem("alertState","DG");
    sessionStorage.setItem("mapDistrict",this.innerText);
});
setInterval(()=>{
    if(sessionStorage.getItem("mapDistrictNo")==="1"){
        $("#mapSearch>button:nth-of-type(3)").text(sessionStorage.getItem("mapDistrict"));
        // setPlaceB("好利来",20);
        // setPlaceC($("#mapSearch>button:nth-of-type(3)").text(),13);
        setPlaceA($("#mapSearch>button:nth-of-type(3)").text(),13);
        sessionStorage.setItem("mapDistrictNo","0");
    }
},0);
// $("#address").change(function () {
//     setPlace($("#address").val(),20);
// });
$(document).keydown(function (e) {
        if(e.keyCode===13){
           $("#address").blur();
        }
});
$("#address").blur(function () {
    if($("#address").val()!==""){
        setPlaceB("好利来",14.5);
        setPlaceC($("#address").val(),14.5);
    }
});
$("#btn").click(function () {
    let newProvince=$("#mapSearch>button:nth-of-type(1)").text();
    let newCity=$("#mapSearch>button:nth-of-type(2)").text();
    let newDistrict=$("#mapSearch>button:nth-of-type(3)").text();
    let newDetailAddress=$("#mapSearch>input:nth-of-type(1)").val();
    let newName=$("#mapSearch>input:nth-of-type(2)").val();
    let newTel=$("#mapSearch>input:nth-of-type(3)").val();
    let newAddress=[null,newProvince,newCity,newDistrict,newDetailAddress,newName,newTel,sessionStorage.getItem("userId"),"备选"];
    let nullArray=[];
    if(newDetailAddress===""){
        nullArray.push("详细地址");
    }
    if(newTel===""){
        nullArray.push("收货人电话");
    }
    if(newName===""){
        nullArray.push("收货人姓名");
    }
    if(nullArray.length===0){
        myAjax("post","/checkAll.do","userId="+sessionStorage.getItem("userId"),()=>{
            let data=JSON.parse(xhr.responseText);
            if(data[0].allNum<6){
                let json=JSON.stringify(newAddress);
                myAjax("post","/insertNewAddress.do","json="+json,()=>{
                    sessionStorage.setItem("alertState","SNA");
                })
            }else {
                sessionStorage.setItem("alertState","RS");
            }
        })
    }else {
        sessionStorage.setItem("alertState","FI");
        let dataContent=JSON.stringify(nullArray);
        sessionStorage.setItem("dataContent",dataContent);
    }
});

setInterval(()=>{
    if(sessionStorage.getItem("alertState")==="ANSA"){
        location.reload();
        sessionStorage.setItem("alertState","")
    }
});

let deleteAddress,deleteAddressNext,isDefault=false;
function addressInit() {
    // 收货地址初始化
    myAjax("get","/initAddress.do","userId="+sessionStorage.getItem("userId"),()=>{
        let data=JSON.parse(xhr.responseText);
        // console.log(data);
        for(let i=0;i<data.length;i++){
            let newAddress=document.getElementsByClassName("addressInformation")[0].cloneNode(true);
            newAddress.classList.remove("display-none");
            newAddress.getElementsByTagName("p")[0].getElementsByTagName("span")[0].innerText=data[i].name;
            newAddress.getElementsByTagName("p")[0].getElementsByTagName("em")[0].innerText=data[i].telphone;
            newAddress.getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText=data[i].L_id;
            newAddress.getElementsByTagName("b")[0].innerHTML=`
                <span>${data[i].province}</span>
                <span>${data[i].city}</span>
                <span>${data[i].district}</span>${data[i].address}`;
            if(data[i].state==="默认"){
                newAddress.getElementsByTagName("input")[0].checked=true;
            }
            // console.log(document.getElementsByClassName("addressInformation")[0].parentNode);
            document.getElementsByClassName("addressInformation")[0].parentNode.appendChild(newAddress);
        }
        //收货地址删除
        let addressButton=document.getElementsByClassName("contentContainer")[1].getElementsByTagName("button");
        // console.log(addressButton.length);
        for(let i=0;i<addressButton.length;i++){
            addressButton[i].onclick=function () {
                deleteAddress=this.parentNode.getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText;
                //判断已有地址数量，再决定是否随机获取删除地址以外的地址
                if(addressButton.length>2) {
                    let q=Math.floor(Math.random()*(addressButton.length));
                    for(let j=0;j<1;j++){
                        if(q===i||q===0){
                            q=Math.floor(Math.random()*(addressButton.length));
                            j--;
                        }
                    }
                    // console.log(i+"+"+q);
                    deleteAddressNext = addressButton[q].parentNode.getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText;
                }
                if(this.parentNode.getElementsByTagName("input")[0].checked===true){
                    isDefault=true;
                }
                // console.log(deleteAddress);
                // console.log(deleteAddressNext);
                // console.log(isDefault);
                //判断地址数量
                if(addressButton.length>2){
                    // console.log("1");
                    sessionStorage.setItem("alertState","DA");
                    if(this.parentNode.getElementsByTagName("input")[0].checked===true) {
                        sessionStorage.setItem("isDefaultAddress","true");
                    }
                }else {
                    // console.log("2");
                    sessionStorage.setItem("alertState","DW");
                }
            }
        }
        //默认收货地址修改
        let addressInput=document.getElementsByClassName("contentContainer")[1].getElementsByTagName("input");
        // console.log(addressInput);
        for(let i=0;i<addressInput.length;i++){
            addressInput[i].onclick=function () {
                // console.log(this.checked);
                let updateDefault=this.parentNode.parentNode.getElementsByTagName("p")[0].getElementsByTagName("span")[1].innerText;
                myAjax("get","/resetAddressDefault.do","userId="+sessionStorage.getItem("userId"),()=>{
                    myAjax("get","/updateClickDefault.do","updateClickAddress="+updateDefault,()=>{})
                });
            }
        }
    })
}

setInterval(()=>{
    if(sessionStorage.getItem("addressDeleteState")==="1"){
        myAjax("get","/deleteAddress.do","deleteAddress="+deleteAddress,()=>{
            if(isDefault===true){
                myAjax("get","/updateDefault.do","updateAddress="+deleteAddressNext,()=>{
                    location.reload()
                })
            }
            isDefault=false;
            location.reload()
        })
    }
    sessionStorage.setItem("addressDeleteState","0");
},0);

//地址按钮状态
// function addressState(){
//     if($("#mapSearch>button:nth-of-type(1)").text()==="省"){
//         $("#mapSearch>button:nth-of-type(2)").disabled=true;
//         $("#mapSearch>button:nth-of-type(2)").addClass("disabled");
//         $("#mapSearch>button:nth-of-type(3)").disabled=true;
//         $("#mapSearch>button:nth-of-type(3)").addClass("disabled");
//         $("#mapSearch>button:nth-of-type(4)").disabled=true;
//         $("#mapSearch>button:nth-of-type(4)").addClass("disabled");
//         $("#mapSearch>input:nth-of-type(1)").disabled=true;
//         $("#mapSearch>input:nth-of-type(1)").addClass("disabled");
//         $("#mapSearch>input:nth-of-type(2)").disabled=true;
//         $("#mapSearch>input:nth-of-type(2)").addClass("disabled");
//         $("#mapSearch>input:nth-of-type(3)").disabled=true;
//         $("#mapSearch>input:nth-of-type(3)").addClass("disabled");
//     }
// }
// setInterval(addressState,0);
setInterval(()=>{
    if($("#mapSearch>button:nth-of-type(1)").text()==="省"){
        $("#mapSearch>button:nth-of-type(2)").attr("disabled",true);
        $("#mapSearch>button:nth-of-type(2)").addClass("disabled");
        $("#mapSearch>button:nth-of-type(3)").attr("disabled",true);
        $("#mapSearch>button:nth-of-type(3)").addClass("disabled");
        $("#mapSearch>button:nth-of-type(4)").attr("disabled",true);
        $("#mapSearch>button:nth-of-type(4)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(1)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(1)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(2)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(2)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(3)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(3)").addClass("disabled");
    }else {
        $("#mapSearch>button:nth-of-type(2)").attr("disabled",false);
        $("#mapSearch>button:nth-of-type(2)").removeClass("disabled");
        $("#mapSearch>button:nth-of-type(3)").attr("disabled",false);
        $("#mapSearch>button:nth-of-type(3)").removeClass("disabled");
        $("#mapSearch>button:nth-of-type(4)").attr("disabled",false);
        $("#mapSearch>button:nth-of-type(4)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(1)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(1)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(2)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(2)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(3)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(3)").removeClass("disabled");
    }
    if($("#mapSearch>button:nth-of-type(2)").text()==="市"){
        $("#mapSearch>button:nth-of-type(3)").attr("disabled",true);
        $("#mapSearch>button:nth-of-type(3)").addClass("disabled");
        $("#mapSearch>button:nth-of-type(4)").attr("disabled",true);
        $("#mapSearch>button:nth-of-type(4)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(1)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(1)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(2)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(2)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(3)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(3)").addClass("disabled");
    }else {
        $("#mapSearch>button:nth-of-type(3)").attr("disabled",false);
        $("#mapSearch>button:nth-of-type(3)").removeClass("disabled");
        $("#mapSearch>button:nth-of-type(4)").attr("disabled",false);
        $("#mapSearch>button:nth-of-type(4)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(1)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(1)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(2)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(2)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(3)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(3)").removeClass("disabled");
    }
    if($("#mapSearch>button:nth-of-type(3)").text()==="区"){
        $("#mapSearch>button:nth-of-type(4)").attr("disabled",true);
        $("#mapSearch>button:nth-of-type(4)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(1)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(1)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(2)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(2)").addClass("disabled");
        $("#mapSearch>input:nth-of-type(3)").attr("disabled",true);
        $("#mapSearch>input:nth-of-type(3)").addClass("disabled");
    }else {
        $("#mapSearch>button:nth-of-type(4)").attr("disabled",false);
        $("#mapSearch>button:nth-of-type(4)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(1)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(1)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(2)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(2)").removeClass("disabled");
        $("#mapSearch>input:nth-of-type(3)").attr("disabled",false);
        $("#mapSearch>input:nth-of-type(3)").removeClass("disabled");
    }
},0);


window.onload=function(){
    addressInit();
    // deleteAddress()
    sessionStorage.setItem("mapProvince","省");
    $("#mapSearch>button:nth-of-type(1)").text("省");
    // addressState();
};