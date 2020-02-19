function t_dakai() {
    $("#t_shousuo").css({
        "display":"inline",
        "width":"40%",
        "height":"25px",
        "border-radius":"15px",
        "margin-left":"78%",
    })
    $("#t_ul").css({
        "display":"none"
    })
    $("#t_shousuo-1").css({
        "display":"inline"
    })
    $("#t_shanchu").css({
        "margin-left":"74%",
        "font-size": "20px",
        "display":"inline"
    })
}
function t_shanchu() {
    $("#t_shousuo").css({
        "display":"none"
    })
    $("#t_ul").css({
        "display":"inline"
    })
    $("#t_shanchu").css({
        "display":"none"
    })
    $("#t_shousuo-1").css({
        "display":"none"
    })
}

function t_zao() {
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}

function t_zaocan() {
    $("#t_zicaidan").removeClass();
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}

function t_zaobian() {
    $("#t_qita").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}
function t_qiye() {
    $("#t_qiye-x").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}
function t_tiyan() {
    $("#t_tiyan-x").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}
function t_wodefeifu() {
    $("#t_wodefeihu-x").removeClass();
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
}
function t_sousuo() {
    $("#t_zicaidan").addClass("display_none");
    $("#t_qita").addClass("display_none");
    $("#t_qiye-x").addClass("display_none");
    $("#t_tiyan-x").addClass("display_none");
    $("#t_wodefeihu-x").addClass("display_none");
}

var id;
function yonghuming() {
    id=sessionStorage.getItem("userId");
    $.ajax({
        url:"/yonghuming.do",
        type:"post",
        data:{
            data:id,
        },
        success:function (data) {
            $("#t_yonghuming").html(`${data[0].username}`)
        },
    })
}
// yonghuming();