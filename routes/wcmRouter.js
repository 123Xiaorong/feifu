const express=require("express");
const router=express.Router();
const wcmController=require("../controller/wcmController");

// router.get("/getGoods.do",wcmController.getGoods);

router.get("/getGoods.do",wcmController.getAllGoods)

router.get("/getCoupon.do",wcmController.getCoupons)

module.exports=router;