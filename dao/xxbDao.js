const dbpool=require("../config/dbpoolconfig");
const feiFuModel={
    totalCoupon(parameter,sql){
        // console.log("======================================"+parameter);
        return new Promise((resolve,reject)=>{
            dbpool.connect("select count(*) as totalNum from t_coupon,t_couponhave"+sql+" and t_coupon.M_id=t_couponhave.M_id and U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    showCoupon(parameter,sql){
        return new Promise((resolve,reject)=>{
            // console.log(parameter);
            dbpool.connect("select * from t_coupon,t_couponhave"+sql+" and t_coupon.M_id=t_couponhave.M_id and U_id=? limit ?,?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    personalCenterGetUserInformation(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_user where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    sendImg(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_user set touxiang=? where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    imgUpdate(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select touxiang from t_user where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    saveNew(parameter){
        // console.log(parameter);
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_user set touxiang=?,username=?,sex=?,birthday=?,address=?,telphone=? where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    initHelper(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_birthdayhelpr where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    insertRemark(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("insert into t_birthdayhelpr values(?,?,?)",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    saveHelper(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update")
        })
    },
    deleteHelper(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("delete from t_birthdayhelpr where U_id=? and remark=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    initAddress(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_address where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    deleteAddress(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("delete from t_address where L_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    updateAddress(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_address set state='默认' where L_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    resetAddressDefault(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_address set state='备选' where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    updateClickDefault(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_address set state='默认' where L_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    checkAll(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select count(*) as allNum from t_address where U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    insertNewAddress(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("insert into t_address values(?,?,?,?,?,?,?,?,?)",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    getUserPassword(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_user,t_question where t_user.U_id=t_question.U_id and t_user.U_id=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    updateAnswer(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("update t_question set question1=?,answer1=?,question2=?,answer2=?,question3=?,answer3=? where U_id=?)",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    },
    getOrder(parameter){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_cache where s_user=? and s_zhuangtai=?",parameter,(error,data)=>{
                if(!error){
                    resolve(data);
                }else {
                    reject(error);
                }
            })
        })
    }
};
module.exports=feiFuModel;