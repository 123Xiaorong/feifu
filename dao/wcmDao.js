const dbpool=require("../config/dbpoolconfig");
const wcmModel={
    // test(parameter){
    //     return new Promise((resolve,reject)=>{
    //         dbpool.connect("select * from t_user where username=?",parameter,(error,data)=>{
    //             if(!error){
    //                 resolve(data);
    //             }else{
    //                 reject(error);
    //             }
    //         })
    //     })
    // }
    getGoodsDao(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT t_goodsprice.G_id,goodsname,goodslabel,flavor,description,img,price FROM t_goodsprice,t_goods WHERE t_goodsprice.G_id=t_goods.G_id LIMIT 40",parameter,(error,data)=>{
                if(!error){
                    // console.log(data)
                    resolve(data)
                }else{
                    reject(error)
                }
            })
        })
    }

};
module.exports=wcmModel;