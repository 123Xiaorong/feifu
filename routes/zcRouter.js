const express=require("express");
const zcRouter=express.Router();
const zcController=require("../controller/zcController");

zcRouter.post("/getyuyueinfo.do",zcController.getyuyueinfo);
zcRouter.post("/getVideo1Comments.do",zcController.getVideo1Comments);
zcRouter.post("/getVideo2Comments.do",zcController.getVideo2Comments);
zcRouter.post("/getVideo3Comments.do",zcController.getVideo3Comments);
zcRouter.post("/getVideo4Comments.do",zcController.getVideo4Comments);
zcRouter.post("/tasteshenqing.do",zcController.tasteshenqing);
zcRouter.post("/tijiaoyuyue.do",zcController.tijiaoyuyue);
zcRouter.post("/getallComptaste.do",zcController.getallComptaste);
zcRouter.post("/huoquusername.do",zcController.huoquUsername);
zcRouter.post("/pinglunVideo1.do",zcController.pinglunVideo1);

module.exports=zcRouter;