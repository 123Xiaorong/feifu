const dbpool=require("../config/dbpoolconfig");
const carModule = require("../dao/carDao");

const uploadController={
    getImage(req,resp){
        //SELECT t_goodsprice.G_id,goodsname,goodslabel,flavor,description,img,price FROM t_goodsprice,t_goods WHERE t_goodsprice.G_id=t_goods.G_id LIMIT 40
        dbpool.connect("SELECT t_goodsprice.G_id,goodsname,t_goodsprice.specification,img,price,goodstype FROM t_goodsprice,t_random WHERE t_goodsprice.G_id=t_random.G_id GROUP BY t_random.G_id ORDER BY RAND() LIMIT 8",
            [],
            (err,data)=>{
                // console.log(err);
                // console.log(data);
                resp.send(data);
            })
    },
    addUser(req,resp)
    {
        // console.log(req.body);
          dbpool.connect("select * from t_cache where s_name=?", [req.body.username], (err, data) => {
              // console.log(data);
           if(data==""){
               dbpool.connect("insert into t_cache values(?,?,?,?,?,?,?,?,?,?)", [null, req.body.username, req.body.miaoshu,req.body.money,req.body.picname,req.body.shuliang,req.body.zhuangtai,req.body.zhufuyu,req.body.huoquyonghu,0], (err, data) => {
                   // console.log(data);
               })
           }
           else {
               dbpool.connect("select s_shuliang from t_cache where s_name=?", [req.body.username], (err, data) => {
                   // console.log(typeof data);‘
                   // console.log(data);
                   // console.log(data.length!==0);
                   if(data.length!=0) {
                       dbpool.connect("update t_cache set s_shuliang=s_shuliang+1 where s_name=?", [req.body.username], (err, data) => {
                       })
                   }
               })
           }
        })
        // dbpool.connect("insert into linshi values(?,?,?,?,?,?)", [null, req.body.username, req.body.miaoshu,req.body.money,req.body.picname,req.body.shuliang], (err, data) => {
        //     // console.log(data);
        // })
    },
    getxinxi(req,resp){
        // console.log(req.body.huoquname);
        dbpool.connect("select * from t_cache",
            [],
            (err,data)=>{
                // console.log(err);
                // console.log(err);
                resp.send(data);
            })
    },
    addshuliang(req,resp){
        dbpool.connect("update t_cache set s_shuliang=? where s_name=?", [req.body.shuliang, req.body.username], (err, data) => {
            resp.send(data);
        })
},
    jianshuliang(req,resp){
        dbpool.connect("update t_cache set s_shuliang=? where s_name=?", [req.body.shuliang, req.body.username], (err, data) => {
            resp.send(data);
        })
    },
    changezhuangtai(req,resp){
        dbpool.connect("update t_cache set s_zhuangtai=? where s_name=?", [req.body.zhuangtai, req.body.username], (err, data) => {
            resp.send(data);
        })
    },
    deleteUser(req,resp){
        dbpool.connect("delete from t_cache where s_name=?",[req.body.username],(err,data)=>{
            // resp.send(data);
        })
    },
    getGoods(req,resp){
        carModule.getGoodsDao([req.query.getGoodsDao])
        .then(data=>{resp.send(data)})
        .catch(error=>{resp.send(error)})
    },
    quanbuzhuangtai(req,resp){
        dbpool.connect("update t_cache set s_zhuangtai=? where s_user=?",[req.body.zhuangtai,req.body.user],(err,data)=>{
            resp.send(data);
        })
    },
    huoqujifen(req,resp){
        // console.log(req.query.userid);
        dbpool.connect("select num from t_user where U_id=?",[req.query.userid],(err,data)=>{
            resp.send(data);
        })
    },
    getyouhuijuan(req,resp){
        dbpool.connect("SELECT DISTINCT cost FROM t_couponhave,t_coupon WHERE t_coupon.M_id=t_couponhave.M_id AND state=\"true\" AND U_id=4 AND typees!=\"兑换劵\"",[],(err,data)=>{
            console.log(data);
            resp.send(data);
        })
    },
    addAddress(req,resp){
        console.log(req.body)
        if(req.body.state=="默认") {
            dbpool.connect("UPDATE t_address SET state=\"备选\" WHERE U_id=?", [req.body.id], (err, data) => {
          if(data!=""){
              dbpool.connect("insert into t_address values(?,?,?,?,?,?,?,?,?)",[null,req.body.pro,req.body.city,req.body.qu,req.body.password,req.body.cperson,req.body.cphone,req.body.id,req.body.state],(err,data)=>{
                  resp.send(data);
              })
          }
            })
        }
        else {
            dbpool.connect("insert into t_address values(?,?,?,?,?,?,?,?,?)", [null, req.body.pro, req.body.city, req.body.qu, req.body.password, req.body.cperson, req.body.cphone, req.body.id, req.body.state], (err, data) => {
                resp.send(data);
            })
        }
    },
    getAdduser(req,resp){
        console.log(req.query.userid);
        dbpool.connect("SELECT name,telphone,address,province,city,district FROM t_address WHERE U_id=? AND state=\"默认\"",[req.query.userid],(error,data)=>{
            resp.send(data)
        })
    },
    getAlladress(req,resp){
        dbpool.connect("select * from t_address where U_id=?",[req.query.userid],(err,data)=>{
            // console.log(err)
            resp.send(data)
        })
    },
    insertAddress(req,resp){
        dbpool.connect("update t_address set province=?,city=?,district=?,address=?,name=?,telphone=?,state=? where U_id=? and state=\"默认\"",[req.body.pro,req.body.city,req.body.qu,req.body.password,req.body.cperson,req.body.cphone,req.body.state,req.body.id],(err,data)=>{

        })
    },
    xiugaimoren(req,resp){
        dbpool.connect("UPDATE t_address SET state=\"备选\" WHERE U_id=?", [req.body.id], (err, data) => {
            if(data!=""){
                dbpool.connect("UPDATE t_address SET state=? WHERE U_id=? AND province=? AND city=? AND district=? AND address=? AND NAME=? AND telphone=?",[req.body.state,req.body.id,req.body.pro,req.body.city,req.body.qu,req.body.password,req.body.cperson,req.body.cphone],(err,data)=>{
                    resp.send(data);
                })
            }
        })
    },
    chongfugetadder(req,resp){
        console.log(req.body)
        dbpool.connect("select * from t_address where U_id=? and state=\"默认\"",[req.query.userid],(err,data)=>{
            // console.log(err)
            resp.send(data)
        })
    },
    chongfugetAlladress(req,resp){
        dbpool.connect("select * from t_address where U_id=?",[req.query.userid],(err,data)=>{
            // console.log(err)
            console.log("Aaavvv");
            console.log(data);
            resp.send(data)
        })
    },
wanchengzhifu(req,resp){
    console.log(req.body);
    // dbpool.connect("update t_cache set s_zhuangtai='danxuan-button-active-zhifu' where s_user=? and s_zhuangtai='danxuan-button-active'",[req.body.userid],(err,data)=>{
    // if(data!=""){
        var sum=0;
            dbpool.connect("select s_num from t_cache where s_user=? and s_zhuangtai='danxuan-button-active'",[req.body.userid],(err,data)=>{
               for(var i=0;i<data.length;i++){
                   sum=parseInt(sum)+parseInt(data[i].s_num);
               }
               if(data!=""){
                   dbpool.connect("update t_cache set s_zhuangtai='danxuan-button-active-zhifu' where s_user=? and s_zhuangtai='danxuan-button-active'",[req.body.userid],(err,data)=>{
                       if(data!=""){
                           var zongsum=0;
                               dbpool.connect("select num from t_user where U_id=?",[req.body.userid],(err,data)=> {
                                     zongsum=parseInt(data[0].num)+parseInt(req.body.jifen)-parseInt(sum);
                                     if (zongsum!=""){
                                             dbpool.connect("UPDATE t_user SET num=? WHERE U_id=?",[zongsum,req.body.userid],(err,data)=>{

                                             })
                                     }
                               })
                       }
                   })

                   // console.log(sum);
                   // var zongsum=0;
                   // dbpool.connect("select num from t_user where U_id=?",[req.body.userid],(err,data)=>{
                   //     console.log(data);
                   //   zongsum=parseInt(data[0].num)+parseInt(req.body.jifen);
                   //   console.log(req.body.jifen);
                   //   console.log(zongsum);
                   //   if (zongsum!=""){
                   //           dbpool.connect("UPDATE t_user SET num=? WHERE U_id=?",[zongsum,req.body.userid],(err,data)=>{
                   //
                   //           })
                   //   }
                   // })
               }
            })
        // }
    // })
}
};
module.exports=uploadController;