const express=require("express");
const router=express.Router();
const feiFuController=require("../controller/xrController");

//=========================xr=============================
// 找到全部蛋糕==cake.js==finish
router.post("/getAllCake.do",feiFuController.getAllCake);

// 筛选蛋糕==cake.js
router.post("/searchCake.do",feiFuController.searchCake);

// 得到某个蛋糕的详情页==cakeDetails.js
router.get("/getCake.do",feiFuController.getCake);

// 得到加价购商品==cakeDetails.js
router.post("/getAddGoods.do",feiFuController.getAddGoods);

// 添加商品至购物车
// router.get("/addGoodCart.do",feiFuController.addGoodCart);

// 添加商品至购物车NEW
router.post("/addGoodCartNew.do",feiFuController.addGoodCartNew);

router.post("/addGoodCartBread.do",feiFuController.addGoodCartBread);
router.post("/addGoodCartBreadMore.do",feiFuController.addGoodCartBreadMore);
router.post("/addGoodCartBreadMoreMore.do",feiFuController.addGoodCartBreadMoreMore);

// 添加商品至购物车NEW--选择规格
router.post("/addGoodCartNewSize.do",feiFuController.addGoodCartNewSize);

// 添加加价购商品
router.post("/addGoodCartResult.do",feiFuController.addGoodCartResult);

//随机生成热门商品
router.post("/getRomdomGoods.do",feiFuController.getRomdomGoods);

// 找到全部面包==cake.js
router.post("/getAllBreak.do",feiFuController.getAllBreak);

// 找到全部甜品==cake.js
router.post("/getAllSweet.do",feiFuController.getAllSweet);

// 登录
router.post("/userLogin.do",feiFuController.userLogin);

//找到全部饮品
router.post("/getAllDrink.do",feiFuController.getAllDrink);

// 筛选全部早餐
router.post("/getAllBreakfast.do",feiFuController.getAllBreakfast);

// 筛选全部鲜花
router.post("/getAllFlower.do",feiFuController.getAllFlower);

// 筛选全部卡片
router.post("/getAllCard.do",feiFuController.getAllCard);

// 得到全部周边产品
router.post("/getAllNearBy.do",feiFuController.getAllNearBy);

// 得到商品评价
router.post("/getGoodsComment.do",feiFuController.getGoodsComment);
// router.post("/purseThreeNine.do",feiFuController.purseThreeNine);


// 找回密码
router.post("/zhaohuimima.do",feiFuController.zhaohuimima);


// 更改密码
router.post("/gengaimima.do",feiFuController.gengaimima);



//短信验证
router.post("/sendCode.do",feiFuController.sendCode);
//验证
router.post("/verifyCode.do",feiFuController.verifyCode);


//=========================xr=============================
module.exports=router;