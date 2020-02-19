const feiFuModel=require("../dao/lydingzhi");
const dbpool=require("../config/dbpoolconfig");
const feiFuController={
    test(request,response){
        // console.log("进入控制")
        dbpool.connect("SELECT * FROM t_goods  WHERE goodstype=?",
            ["定制"],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },
    xianhgqing(request,response){
        // console.log("进入控制000");
       let G_id=request.body.data;
       // console.log( request.body.data)
        dbpool.connect("SELECT * FROM t_goods WHERE G_id=?",
            [G_id],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })

    },
    peifang(request,response){
        let G_id=request.body.data;
        // console.log(G_id)
        dbpool.connect("SELECT * FROM t_goodsdetail WHERE G_id=?",
            [G_id],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },
    jiage(request,response){
        console.log("0000")
        let G_id=request.body.data;
        console.log(G_id)
        let t_cun=request.body.data2;
        console.log(t_cun)
        let t_ceng=request.body.data3;
        // console.log(t_ceng)
        dbpool.connect("SELECT * FROM t_goodsprice WHERE G_id=? and specification=? and price=? ",
            [G_id,t_cun,t_ceng],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },
    xinhua(request,response){
        console.log("进入控制99900");
        let xinhua=request.body.data;
        dbpool.connect("SELECT * FROM t_goods WHERE series=? AND goodstype=? ",
            [xinhua,"定制"],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },
    gaobai(request,response){
        console.log("进入控制99900");
        let xinhua=request.body.data;
        dbpool.connect("SELECT * FROM t_goods WHERE series=? AND goodstype=?  ",
            [xinhua,"定制"],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },
    huayuan(request,response){
        console.log("进入控制99900");
        let xinhua=request.body.data;
        dbpool.connect("SELECT * FROM t_goods WHERE series=?  AND goodstype=?",
            [xinhua,"定制"],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },
    xingkong(request,response){
        console.log("进入控制99900");
        let xinhua=request.body.data;
        dbpool.connect("SELECT * FROM t_goods WHERE series=?  AND goodstype=?",
            [xinhua,"定制"],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },
    quanbu(request,response){
        // console.log("进入控制")
        dbpool.connect("SELECT * FROM t_goods  WHERE goodstype=?",
            ["定制"],
            (err,data)=>{
                response.send(data);
                // console.log(data);
            })
    },

    tijiao(request,response){
        console.log("11111")
        let mingzi=request.body.data;
        console.log(mingzi);
        let lujing=request.body.data2.split("/")[4];
        console.log(lujing);
        let t_cunn=request.body.data3;
        console.log(t_cunn);
        let jiage=request.body.data4.split("￥")[1];
        console.log(jiage);
        let kezi=request.body.data5;
        console.log(kezi);
        let id=request.body.data6;
        console.log(id);
        let DD=request.body.data7;
        dbpool.connect("INSERT INTO t_cache VALUES(?,?,?,?,?,?,?,?,?,?)",
            [DD,mingzi,t_cunn,jiage,lujing,1,"danxuan-button-active",kezi,id,null],
            (err,data)=>{
            response.send("添加成功")
            })
    },

    goumai(request,response){
        console.log("0000")
        let mingzi=request.body.data;
        console.log(mingzi);
        let lujing=request.body.data2.split("/")[4];
        console.log(lujing);
        let t_cunn=request.body.data3;
        console.log(t_cunn);
        let jiage=request.body.data4.split("￥")[1];
        console.log(jiage);
        let kezi=request.body.data5;
        console.log(kezi);
        let id=request.body.data6;
        console.log(id);
        let DD=request.body.data7;
        dbpool.connect("INSERT INTO t_cache VALUES(?,?,?,?,?,?,?,?,?,?)",
            [DD,mingzi,t_cunn,jiage,lujing,1,"danxuan-button-active",kezi,id,null],
            (err,data)=>{
                response.send("添加成功")
            })
    },
    yonghuming(request,response){
        let id=request.body.data;
        dbpool.connect("SELECT * FROM t_user WHERE U_id=?",
            [id],
            (err,data)=>{
            response.send(data)
            })
    }
};

module.exports=feiFuController;