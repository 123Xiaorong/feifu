const dbpool = require("../config/dbpoolconfig")
const carModel = {
    getGoodsDao(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_cache WHERE s_zhuangtai='danxuan-button-active'",parameter,(error,data)=>{
                if(!error){
                    // console.log(data)
                    resolve(data)
                }else{
                    reject(error)
                }
            })
        })
    },
    getAdduserDao(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT name,telphone,address,province,city,district FROM t_address WHERE U_id=?",req.query.userid,(error,data)=>{
                if(!error){
                    resolve(data)
                }else{
                    reject(error)
                }
            })
        })
    }

}
module.exports = carModel