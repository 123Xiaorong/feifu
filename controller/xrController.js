const feiFuModel=require("../dao/xrDao");
const dbpool=require("../config/dbpoolconfig");


const AV=require("leancloud-storage");//短信验证模块

// const nodemailer=require("nodemailer");

const APP_ID = 'jfWOwHojPeufO3RAdpfXlClb-gzGzoHsz';
const APP_KEY = 'z1XkYC9gMXcjrmEaWHgtnI5h';

AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});


const feiFuController={
    //=========================xr=============================

    sendCode(req,resp){
        // console.log(req.body.phone);
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: req.body.phone,
            smsType: 'voice',
            name:"妃芙",
            op:"提醒",
            ttl:10   //单位：分钟
        }).then(function() {
            // 发送成功
            resp.send("验证码发送成功");
        }).catch(function(error) {
            // 处理异常
            resp.send("验证码发送失败，请检查手机号");
        });

    },

    verifyCode(req,resp){
        // console.log(req.body.code);
        // console.log(req.body.phone);
        AV.Cloud.verifySmsCode(req.body.code,req.body.phone).then(function(){
            //验证成功
            resp.send("验证成功")
        }, function(err){
            //验证失败
            resp.send("验证失败");
        });
    },


    // 查找所有的蛋糕===cake.html
    getAllCake(req,resp){
        feiFuModel.getAllCake()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    // 查询蛋糕===cake.html
    searchCake(req,resp){
        var flavor=req.body.taste;
        var specification=req.body.cakeSize;
        let sql="SELECT t_goodsprice.*,t_goods.* FROM t_goodsprice,t_goods WHERE t_goodsprice.G_id=t_goods.G_id AND goodstype='蛋糕' and 1=1 ";
        let param=[];
        if(flavor!="全部"){
            sql+=" and flavor=?";
            param.push(flavor);
        }
        if(specification!="全部"){
            sql+=" and specification= ?";
            param.push(specification);
        }
        dbpool.connect(sql,param,(err,data)=>{
            resp.send(data);
        })
    },
    // 跳转至详情页===cakeDetails
    getCake(req,resp){
        console.log(req.query.id)
        // PC端：
        let G_id=req.query.G_id.split("=")[1];
        // 小程序
        // let G_id=req.query.G_id;
        feiFuModel.getCake([G_id])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    //加价购商品==cakeDetails
    getAddGoods(req,resp){
        feiFuModel.getAddGoods()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    // addGoodCart(req,resp){
    //     let G_id=req.query.G_id.split("=")[1];
    //     let G_name=req.query.G_name;
    //     let G_miaoshu=req.query.G_miaoshu;
    //     let G_jiage=req.query.G_jiage;
    //     let G_pic=req.query.G_pic;
    //     feiFuModel.addGoodCart([G_id,G_name,G_miaoshu,G_jiage,G_pic])
    //         .then(data=>{
    //             resp.send(data);
    //         })
    //         .catch(error=>{
    //             resp.send(error)
    //         });
    // },
    // 不选择规格时加入购物车
    addGoodCartNew(req,resp){
        // console.log(sessionStorage.getItem("userId"));
        feiFuModel.addGoodCartNew([req.body.G_id,req.body.userId])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },


    addGoodCartBread(req,resp){
        feiFuModel.addGoodCartBread([req.body.G_id,req.body.userId,req.body.goodstype])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    addGoodCartBreadMore(req,resp){
        feiFuModel.addGoodCartBreadMore([req.body.G_id,req.body.userId,req.body.goodstype])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    addGoodCartBreadMoreMore(req,resp){
        feiFuModel.addGoodCartBreadMoreMore([req.body.G_id,req.body.userId,req.body.goodstype])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },


    // 选择规格时加入购物车
    addGoodCartNewSize(req,resp){
        feiFuModel.addGoodCartNewSize([req.body.G_id,req.body.G_miaoshu,req.body.userId])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    // 结算
    addGoodCartResult(req,resp){
        // console.log(req.body);
        feiFuModel.addGoodCartResult([req.body.G_id,req.body.userId])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    // 热门推荐
    getRomdomGoods(req,resp){
        dbpool.connect("SELECT t_goodsprice.G_id,goodsname,t_goodsprice.specification,img,price,goodstype,description FROM t_goodsprice,t_random WHERE t_goodsprice.G_id=t_random.G_id GROUP BY t_random.G_id ORDER BY RAND() LIMIT 8",
            [],
            (err,data)=>{
                resp.send(data);
            })
    },

    getAllBreak(req,resp){
        feiFuModel.getAllBreak()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    getAllSweet(req,resp){
        feiFuModel.getAllSweet()
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    // 登录
    userLogin(req,resp){
        feiFuModel.userLogin([req.body.username,req.body.password])
            .then(data=>{
                resp.send(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },
    // 找到全部饮品
    getAllDrink(req,resp){
        feiFuModel.getAllDrink()
            .then(data=>{
                resp.send(data);
                // console.log(data);
            })
            .catch(error=>{
                resp.send(error)
            });
    },

    getAllBreakfast(req,resp){
    feiFuModel.getAllBreakfast()
        .then(data=>{
            resp.send(data);
        })
        .catch(error=>{
            resp.send(error)
        });
    },
    getAllFlower(req,resp){
    feiFuModel.getAllFlower()
        .then(data=>{
            resp.send(data);
        })
        .catch(error=>{
            resp.send(error)
        });
    },
    getAllCard(req,resp){
    feiFuModel.getAllCard()
        .then(data=>{
            resp.send(data);
        })
        .catch(error=>{
            resp.send(error)
        });
    },
    getAllNearBy(req,resp){
    feiFuModel.getAllNearBy()
        .then(data=>{
            resp.send(data);
        })
        .catch(error=>{
            resp.send(error)
        });
    },

    getGoodsComment(req,resp){
        // console.log(req.body);
        var goodsId=req.body.G_id.split("=")[1];
        // console.log(goodsId);
    feiFuModel.getGoodsComment(goodsId)
        .then(data=>{
            resp.send(data);
        })
        .catch(error=>{
            resp.send(error)
        });
    },
    // purseThreeNine(req,resp){
    // feiFuModel.purseThreeNine()
    //     .then(data=>{
    //         resp.send(data);
    //     })
    //     .catch(error=>{
    //         resp.send(error)
    //     });
    // },



    zhaohuimima(req,resp){
        let t_yonghu=req.body.data;
        // console.log(t_yonghu)
        let t_haoma=req.body.data2;
        // console.log(t_haoma)
        dbpool.connect("SELECT * FROM t_user WHERE username=? AND telphone=?",
            [t_yonghu,t_haoma],
            (err,data)=>{
                if(data.length>0){
                    resp.send("验证成功")
                }else{
                    resp.send("验证失败")
                }
            })
    },

    gengaimima(req,resp){
        let t_haoma=req.body.data;
        console.log(t_haoma)
        let t_mima=req.body.data2;
        console.log(t_mima)
        dbpool.connect("UPDATE t_user SET userpassword=? WHERE telphone=?",
            [t_mima,t_haoma],
            (err,data)=>{
                resp.send("修改成功")
            })
    }

    //=========================xr=============================
};
module.exports=feiFuController;