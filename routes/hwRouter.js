const express=require("express");
const router=express.Router();
const feiFuController=require("../controller/hwController");

// router.get("/test.do",feiFuController.test);

router.get("/getFirstgoods.do",feiFuController.getFirstgoods);
router.get("/getSecondgoods.do",feiFuController.getSecondgoods);
router.get("/getThirdgoods.do",feiFuController.getThirdgoods);
router.get("/getFourthgoods.do",feiFuController.getFourthgoods);

router.post("/num.do",feiFuController.getnum);

router.post("/buy.do",feiFuController.buy);
router.post("/numbuy.do",feiFuController.numbuy);

module.exports=router;