const  express=require("express");

const uploadController=require("../controller/carController");
const router=express.Router();//调用express对象提供的路由方法获取路由对象

//获取图片
router.get("/getImage.do",uploadController.getImage);

router.post("/addUser.do",uploadController.addUser);

router.get("/huoquxinxi.do",uploadController.getxinxi);

router.post("/addshuliang.do",uploadController.addshuliang);

router.post("/jianshuliang.do",uploadController.jianshuliang);

router.post("/changezhuangtai.do",uploadController.changezhuangtai);

router.post("/deleteUser.do",uploadController.deleteUser);

router.get("/getGoodsList.do",uploadController.getGoods);

router.post("/quanbuzhuangtai.do",uploadController.quanbuzhuangtai);

router.get("/huoqujifen.do",uploadController.huoqujifen);

router.get("/getyouhuijuan.do",uploadController.getyouhuijuan);

router.post("/addAddress.do",uploadController.addAddress);

router.get("/getAdder.do",uploadController.getAdduser)
router.get("/getAlladress.do",uploadController.getAlladress)

router.post("/insertAddress.do",uploadController.insertAddress)



router.post("/xiugaimoren.do",uploadController.xiugaimoren)

router.get("/chongfugetadder.do",uploadController.chongfugetadder)

router.get("/chongfugetAlladress.do",uploadController.chongfugetAlladress)


router.post("/wanchengzhifu.do",uploadController.wanchengzhifu)
module.exports=router;
