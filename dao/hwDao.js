const dbpool=require("../config/dbpoolconfig");
const feiFuModel= {
    getFirstgoods(parameter) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT G_id,img,goodsname,description FROM t_goods limit 9",parameter,(error,data) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error);
                    // console.log("查找失败");
                }
            })
        })
    },
    getSecondgoods(parameter) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT G_id,img,goodsname,description FROM t_goods WHERE G_id>9 AND G_id<16",parameter,(error,data) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error);
                    // console.log("查找失败");
                }
            })
        })
    },
    getThirdgoods(parameter) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT G_id,img,goodsname,description FROM t_goods WHERE G_id>15 AND G_id<21",parameter,(error,data) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error);
                    // console.log("查找失败");
                }
            })
        })
    },
    getFourthgoods(parameter) {
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT G_id,img,goodsname,description FROM t_goods WHERE G_id>20 AND G_id<23",parameter,(error,data) => {
                if (!error) {
                    resolve(data);
                } else {
                    reject(error);
                    // console.log("查找失败");
                }
            })
        })
    },
    buy(params){
        return new Promise((resolve,reject) => {
            dbpool.connect("insert into t_cache values(null,?,?,?,?,1,'danxuan-button-active',0,?,0)",
                params,
                (err, data) => {
                    if (!err) {
                        console.log(111);
                        resolve(data);
                    } else {
                        reject(err);
                    }
                });
        })
    },
    numbuy(params){
        console.log(params);
        return new Promise((resolve,reject) => {
            dbpool.connect("insert into t_cache values(null,?,?,0,?,1,'danxuan-button-active',0,?,?)",
                params,
                (err, data) => {
                    if (!err) {
                        console.log(111);
                        resolve(data);
                    } else {
                        reject(err);
                    }
                });
        })
    },
    getnum(parameter) {
        console.log(parameter);
        return new Promise((resolve, reject) => {
            dbpool.connect("SELECT num FROM t_user where U_id=?",parameter,(error,data) => {
                if (!error) {
                    resolve(data);
                    console.log(data)
                } else {
                    reject(error);
                    // console.log("查找失败");
                }
            })
        })
    },

};

module.exports=feiFuModel;