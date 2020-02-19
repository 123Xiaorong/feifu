//express
const express=require("express");
//post
const bodyParser=require("body-parser");
//routes
// const route=require("./routes/feiFuRouter");

//-===========================
const hwroute=require("./routes/hwRouter");
const xrroute=require("./routes/xrRouter");
const carroute=require("./routes/carRouter1");
const lyroute=require("./routes/lydingzhi");
const wcmroute=require("./routes/wcmRouter");
const xxbroute=require("./routes/xxbRouter");
const zcroute=require("./routes/zcRouter");

//-===========================


//path
const path=require("path");
//session
const session=require("express-session");
//cookie
const cookieParser=require("cookie-parser");
//logger
const logger=require("morgan");
//favicon
const favicon=require("serve-favicon");

const app=express();
//post
app.use(bodyParser.urlencoded({extended:true,limit:"50mb",parameterLimit:50000}));
app.use(bodyParser.json({limit:"50mb"}));
//session cookie
app.use(cookieParser());
app.use(session({
    name:"demo205",//cookie名称，不设置时自动生成
    secret:"123123123",//秘钥
    cookie:{maxAge:1000*60*60*24*30},//毫秒为单位===30天有效
    resave:true,//更新失效时间，第二次进入时又是30天
    rolling:true,//更新保存，重新同步到cookie中
    saveUninitialized:true
}));
//ejs
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//routes
app.use(xrroute);
app.use(hwroute);
app.use(wcmroute);
app.use(lyroute);
app.use(xxbroute);
app.use(carroute);
app.use(zcroute);
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/public/html"));
app.use(express.static(__dirname+"/public/images"));
//logger
app.use(logger("dev"));
//favicon
app.use(favicon(__dirname+"/public/images/feifuicon.ico"));
//端口
app.set("port",8888);
app.listen(8888,()=>{
    console.log(app.get("port")+"启动");
});



