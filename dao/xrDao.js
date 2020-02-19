const dbpool=require("../config/dbpoolconfig");
const feiFuModel={

    //=========================xr=============================
    //查到所有蛋糕
    getAllCake(){
         return new Promise((resolve,reject)=>{
                dbpool.connect("SELECT t_goodsprice.G_id,t_goodsprice.specification,goodsname,goodslabel,goodstype,flavor,description,img,price FROM t_goodsprice,t_goods \n" +
                    "WHERE t_goodsprice.G_id=t_goods.G_id AND goodstype='蛋糕'","",(error,data)=>{
                    if(!error){
                        // console.log(data)
                        resolve(data);
                    }else{
                        reject(error);
                    }
                })
            })
    },
    // 跳转蛋糕详情页
    getCake(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT t_goodsdetail.*,t_goods.goodsname,t_goods.img AS fisrtImg,t_goods.flavor,t_goodsprice.* FROM t_goodsdetail,t_goods,t_goodsprice WHERE t_goodsdetail.G_id=t_goods.G_id AND t_goodsdetail.G_id=t_goodsprice.G_id AND t_goodsdetail.G_id=?",params,(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    // 得到加价购商品
    getAddGoods(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_goodsadd","",(error,data)=>{
                if(!error){
                    resolve(data);
                    // console.log("查找成功");
                }else{
                    reject(error);
                }
            })
        })
    },

    getAllBreak(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT t_goodsprice.G_id,t_goodsprice.specification,goodsname,goodslabel,goodstype,flavor,description,img,price FROM t_goodsprice,t_goods WHERE t_goodsprice.G_id=t_goods.G_id AND goodstype='面包'","",(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    getAllSweet(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT t_goodsprice.G_id,t_goodsprice.specification,goodsname,goodslabel,goodstype,flavor,description,img,price FROM t_goodsprice,t_goods WHERE t_goodsprice.G_id=t_goods.G_id AND goodstype='甜点'","",(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    getAllDrink(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_goods WHERE goodstype='饮品'","",(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    getAllFlower(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_goods WHERE goodstype='鲜花'","",(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    getAllCard(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_goods WHERE goodstype='卡片'","",(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    getAllBreakfast(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_goods WHERE (goodstype='饮品'OR goodstype='面包')","",(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    getAllNearBy(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_goods WHERE (goodstype='鲜花'OR goodstype='卡片' or goodstype='甜点')","",(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },
    userLogin(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM t_user WHERE U_id=? AND userpassword=?",params,(error,data)=>{
                if(!error){
                    if(data==""){
                        dbpool.connect("SELECT * FROM t_user WHERE telphone=? AND userpassword=?",params,(error,data)=>{
                            if(!error){
                                resolve(data);
                                // console.log(data1);
                            }else{
                                reject(error);
                            }
                        })
                    }else{
                        resolve(data);
                    }
                }else{
                    reject(error);
                }
            })
        })
    },

    // 添加商品至购物车未选择规格===
    addGoodCartNew(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT t_goodsprice.G_id,t_goodsprice.specification,goodsname,goodslabel,goodstype,flavor,description,img,price FROM t_goodsprice,t_goods WHERE t_goodsprice.G_id=t_goods.G_id AND goodstype='蛋糕' AND t_goods.G_id=? LIMIT 0,1",params,(error,data)=>{
                if(!error){
                    var param=[data[0].G_id,data[0].goodsname,data[0].specification,data[0].price,data[0].img,params[1]];//需要插入的信息
                    var param1=[data[0].G_id,params[1]];
                    var username=[params[1]];
                    var param2=[data[0].specification,data[0].G_id,params[1]];
                    dbpool.connect("SELECT * FROM t_cache WHERE s_user=?",username,(error,data)=>{//查看是否有此用户
                        if(!error){
                            if(data==""){//没有此用户
                                dbpool.connect("insert into t_cache values(?,?,?,?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                    if(!error){
                                        resolve(data);
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                            else {//有该用户
                                dbpool.connect("SELECT * FROM t_cache WHERE s_id=? and s_user=?",param1,(error,data)=>{//此用户是否有商品
                                    if(!error){
                                        if(data==""){//没有商品
                                            dbpool.connect("insert into t_cache values(?,?,?,?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                                if(!error){
                                                    resolve(data);
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                        else{//有商品
                                            dbpool.connect("SELECT * FROM t_cache WHERE s_mimaoshu=? and s_id=? and s_user=?",param2,(error,data)=>{
                                                if(!error){
                                                    if(data==""){
                                                        dbpool.connect("insert into t_cache values(?,?,?,?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                                            if(!error){
                                                                resolve(data);
                                                            }else{
                                                                reject(error);
                                                            }
                                                        })
                                                    }else{
                                                        var param6=[data[0].s_shuliang,param2[0],param2[1],param2[2]];
                                                        dbpool.connect("UPDATE t_cache SET s_shuliang=?+1 WHERE s_mimaoshu=? and s_id=? and s_user=?",param6,(error,data)=>{
                                                            if(!error){
                                                                resolve(data);
                                                            }else{
                                                                reject(error);
                                                            }
                                                        })
                                                    }
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                        }else{
                            reject(error);
                        }
                    })
                }
                else{
                    reject(error);
                }
            })
        })
    },

    addGoodCartNewSize(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT t_goods.*,t_goodsprice.* FROM t_goods,t_goodsprice WHERE t_goods.G_id=t_goodsprice.G_id AND t_goods.G_id=? AND t_goodsprice.specification=?",params,(error,data)=>{
                if(!error){
                    var param=[data[0].G_id,data[0].goodsname,data[0].specification,data[0].price,data[0].img,params[2]];
                    var param1=[data[0].G_id,params[2]];
                    // var param2=[param[2],data[0].s_id];
                    var param2=[data[0].specification,data[0].G_id,params[2]];
                    var username=[params[2]];
                    dbpool.connect("SELECT * FROM t_cache WHERE s_user=?",username,(error,data)=>{
                        if(data==""){
                            dbpool.connect("insert into t_cache values(?,?,?,?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                if(!error){
                                    resolve(data);
                                }else{
                                    reject(error);
                                }
                            })
                        }
                        else{
                            dbpool.connect("SELECT * FROM t_cache WHERE s_id=? and s_user=?",param1,(error,data)=>{
                                if(!error){
                                    if(data==""){
                                        dbpool.connect("insert into t_cache values(?,?,?,?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                            if(!error){
                                                resolve(data);
                                                // console.log(data);
                                            }else{
                                                reject(error);
                                            }
                                        })
                                    }
                                    else{
                                        dbpool.connect("SELECT * FROM t_cache WHERE s_mimaoshu=? and s_id=? and s_user=?",param2,(error,data)=>{
                                            if(!error){
                                                if(data==""){
                                                    dbpool.connect("insert into t_cache values(?,?,?,?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                                        if(!error){
                                                            resolve(data);
                                                        }else{
                                                            reject(error);
                                                        }
                                                    })
                                                }else{
                                                    var param6=[data[0].s_shuliang,param2[0],param2[1],param2[2]];
                                                    dbpool.connect("UPDATE t_cache SET s_shuliang=?+1 WHERE s_mimaoshu=? and s_id=? and s_user=?",param6,(error,data)=>{
                                                        if(!error){
                                                            resolve(data);
                                                        }else{
                                                            reject(error);
                                                        }
                                                    })
                                                }
                                            }else{
                                                reject(error);
                                            }
                                        })
                                    }
                                }else{
                                    reject(error);
                                }
                            })
                        }
                    })
                }
                else{
                    reject(error);
                }
            })
        })
    },


    // 结算加价购商品
    addGoodCartResult(params){
        return new Promise((resolve,reject)=>{
           var goodsIdArray=params[0].split(",");
            for (var t=0;t<goodsIdArray.length;t++){
                dbpool.connect("SELECT * FROM t_goodsadd WHERE A_id=?",goodsIdArray[t],(error,data)=>{
                    if(!error){
                        resolve(data);
                        var param=[data[0].A_id,data[0].goodsname,data[0].newPrice,data[0].img,params[1]];
                        var param1=[data[0].A_id,params[1]];
                        dbpool.connect("SELECT * FROM t_cache WHERE s_user=?",params[1],(error,data)=>{
                            if(!error){
                                resolve(data);
                                if(data==""){
                                    dbpool.connect("insert into t_cache values(?,?,'加价购商品',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                        if(!error){
                                            resolve(data);
                                        }else{
                                            reject(error);
                                        }
                                    })
                                }
                                else{
                                    dbpool.connect("SELECT * FROM t_cache WHERE s_id=? and s_user=?",param1,(error,data)=>{
                                        if(!error){
                                            if(data==""){
                                                dbpool.connect("insert into t_cache values(?,?,'加价购商品',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                                    if(!error){
                                                        resolve(data);
                                                    }else{
                                                        reject(error);
                                                    }
                                                })
                                            }
                                            else{
                                                var params9=[data[0].s_shuliang,param1[0],param1[1]];
                                                dbpool.connect("UPDATE t_cache SET s_shuliang=?+1 WHERE s_id=? and s_user=?",params9,(error,data)=>{
                                                    if(!error){
                                                        resolve(data);
                                                    }else{
                                                        reject(error);
                                                    }
                                                })
                                            }
                                        }else{
                                            reject(error);
                                        }
                                    })
                                }
                            }else{
                                reject(error);
                            }
                        });
                    }else{
                        reject(error);
                    }
                })
            }
        })
    },


    addGoodCartBread(params){
        return new Promise((resolve,reject)=>{
            // console.log(params);
            dbpool.connect("SELECT * FROM t_goods WHERE goodstype=? and G_id=?",[params[2],params[0]],(error,data)=>{
                if(!error){
                    // console.log(data);
                    var param=[data[0].G_id,data[0].goodsname,data[0].flavor,data[0].img,params[1]];
                    dbpool.connect("SELECT * FROM t_cache WHERE s_user=?",params[1],(error,data)=>{
                        if(!error){
                            if(data==""){
                                dbpool.connect("insert into t_cache values(?,?,'一份',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                    if(!error){
                                        resolve(data);
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                            else{
                                var tf=[params[1],params[0]];
                                dbpool.connect("SELECT * FROM t_cache WHERE s_user=? AND s_id=?",tf,(error,data)=>{
                                    if(!error){
                                        if (data==""){
                                            dbpool.connect("insert into t_cache values(?,?,'一份',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                                if(!error){
                                                    resolve(data);
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                        else {
                                            var bread=[data[0].s_shuliang,params[0],params[1]];
                                            dbpool.connect("UPDATE t_cache SET s_shuliang=?+1 WHERE s_id=? and s_user=?",bread,(error,data)=>{
                                                if(!error){
                                                    resolve(data);
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                        }else{
                            reject(error);
                        }
                    })
                }
                else{
                    reject(error);
                }
            })
        })
    },

    addGoodCartBreadMore(params){
        return new Promise((resolve,reject)=>{
            // console.log(params[2].split("%")[1]);
            dbpool.connect("SELECT * FROM t_goods WHERE (goodstype=? or goodstype=?) and G_id=?",[params[2].split("%")[0],params[2].split("%")[1],params[0]],(error,data)=>{
                if(!error){
                    // console.log(data);
                    var param=[data[0].G_id,data[0].goodsname,data[0].flavor,data[0].img,params[1]];
                    dbpool.connect("SELECT * FROM t_cache WHERE s_user=?",params[1],(error,data)=>{
                        if(!error){
                            if(data==""){
                                dbpool.connect("insert into t_cache values(?,?,'一份',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                    if(!error){
                                        resolve(data);
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                            else{
                                var tf=[params[1],params[0]];
                                dbpool.connect("SELECT * FROM t_cache WHERE s_user=? AND s_id=?",tf,(error,data)=>{
                                    if(!error){
                                        if (data==""){
                                            dbpool.connect("insert into t_cache values(?,?,'一份',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                                if(!error){
                                                    resolve(data);
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                        else {
                                            var bread=[data[0].s_shuliang,params[0],params[1]];
                                            dbpool.connect("UPDATE t_cache SET s_shuliang=?+1 WHERE s_id=? and s_user=?",bread,(error,data)=>{
                                                if(!error){
                                                    resolve(data);
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                        }else{
                            reject(error);
                        }
                    })
                }
                else{
                    reject(error);
                }
            })
        })
    },

    addGoodCartBreadMoreMore(params){
        return new Promise((resolve,reject)=>{
            // console.log(params[2].split("%")[1]);
            dbpool.connect("SELECT * FROM t_goods WHERE (goodstype=? or goodstype=? or goodstype=?) and G_id=?",[params[2].split("%")[0],params[2].split("%")[1],params[2].split("%")[2],params[0]],(error,data)=>{
                if(!error){
                    // console.log(data);
                    var param=[data[0].G_id,data[0].goodsname,data[0].flavor,data[0].img,params[1]];
                    dbpool.connect("SELECT * FROM t_cache WHERE s_user=?",params[1],(error,data)=>{
                        if(!error){
                            if(data==""){
                                dbpool.connect("insert into t_cache values(?,?,'一份',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                    if(!error){
                                        resolve(data);
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                            else{
                                var tf=[params[1],params[0]];
                                dbpool.connect("SELECT * FROM t_cache WHERE s_user=? AND s_id=?",tf,(error,data)=>{
                                    if(!error){
                                        if (data==""){
                                            dbpool.connect("insert into t_cache values(?,?,'一份',?,?,1,'danxuan-button-active','',?,0)",param,(error,data)=>{
                                                if(!error){
                                                    resolve(data);
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                        else {
                                            var bread=[data[0].s_shuliang,params[0],params[1]];
                                            dbpool.connect("UPDATE t_cache SET s_shuliang=?+1 WHERE s_id=? and s_user=?",bread,(error,data)=>{
                                                if(!error){
                                                    resolve(data);
                                                }else{
                                                    reject(error);
                                                }
                                            })
                                        }
                                    }else{
                                        reject(error);
                                    }
                                })
                            }
                        }else{
                            reject(error);
                        }
                    })
                }
                else{
                    reject(error);
                }
            })
        })
    },

    getGoodsComment(param){
        // console.log(param);
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT t_cache.s_picname,t_cache.s_mimaoshu,t_user.telphone,t_comment.times,t_comment.text,t_comment.img FROM t_comment,t_cache,t_user WHERE t_user.U_id=t_comment.U_id AND t_comment.C_id=t_cache.s_id AND t_cache.s_id=?",param,(error,data)=>{
                if(!error){
                    resolve(data);
                }else{
                    reject(error);
                }
            })
        })
    },

    // purseThreeNine(){
    //     return new Promise((resolve,reject)=>{
    //         dbpool.connect("","",(error,data)=>{
    //             if(!error){
    //                 resolve(data);
    //             }else{
    //                 reject(error);
    //             }
    //         })
    //     })
    // }


    //=========================xr=============================

};
module.exports=feiFuModel;