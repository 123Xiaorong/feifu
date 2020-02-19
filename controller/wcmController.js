const wcmModel=require("../dao/wcmDao");
const dbpool = require("../config/dbpoolconfig")
const wcmController={
    // test(request,response){
    //     console.log(request.query.test);
    //     feiFuModel.test([request.query.test])
    //         .then(data=>{response.send(data)})
    //         .catch(error=>{response.send(error)});
    // }
    getAllGoods(req,resp){
        // console.log(req)
        wcmModel.getGoodsDao([req.query.getGoodsDao])
        .then(data=>{resp.send(data)})
        .catch(error=>{resp.send(error)})
    },
    getCoupons(req,resp){
        dbpool.connect("SELECT cost,conditions FROM t_coupon ORDER BY RAND() LIMIT 3",[],(err,data)=>{
            resp.send(data)
        })
    }
};
module.exports=wcmController;