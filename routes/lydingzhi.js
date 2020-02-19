const express=require("express");
const router=express.Router();
const feiFuController=require("../controller/lydingzhi");
router.post("/tupian.do",feiFuController.test);

router.post("/xiangqiang.do",feiFuController.xianhgqing);

router.post("/peifang.do",feiFuController.peifang);

router.post("/jiage.do",feiFuController.jiage);

router.post("/xinhua.do",feiFuController.xinhua);

router.post("/gaobai.do",feiFuController.gaobai);

router.post("/huayuan.do",feiFuController.huayuan);

router.post("/xingkong.do",feiFuController.xingkong);

router.post("/quanbu.do",feiFuController.quanbu);

router.post("/tijiao.do",feiFuController.tijiao);

router.post("/goumai.do",feiFuController.goumai);

router.post("/yonghuming.do",feiFuController.yonghuming);
module.exports=router;