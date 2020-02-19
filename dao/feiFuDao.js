const dbpool=require("../config/dbpoolconfig");
const feiFuModel={
    test(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_user where username=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    }

};
module.exports=feiFuModel;