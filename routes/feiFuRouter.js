const express=require("express");
const router=express.Router();
const feiFuController=require("../controller/feiFuController");

router.get("/test.do",feiFuController.test);



module.exports=router;