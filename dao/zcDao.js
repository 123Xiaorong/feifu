const dbpool=require("../config/dbpoolconfig");
const zcModel={
    Daogeiyuyueinfo(params,callback){
        dbpool.connect(
            "select * from t_experience order by times DESC limit 7",
            params,
            (err,data)=>{
            callback(data);
        })
    },
    DaogetVideo1Comments(params,callback){
        dbpool.connect(
            "select * from video_comment where Video_id=1",
            params,(err,data)=>{
                callback(data);
        })
    },
    DaogetVideo2Comments(params,callback){
        dbpool.connect(
            "select * from video_comment where Video_id=2",
            params,(err,data)=>{
            callback(data);
    })
    },
    DaogetVideo3Comments(params,callback){
        dbpool.connect(
            "select * from video_comment where Video_id=3",
            params,(err,data)=>{
            callback(data);
    })
    },
    DaogetVideo4Comments(params,callback){
        dbpool.connect(
            "select * from video_comment where Video_id=4",
            params,(err,data)=>{
            callback(data);
    })
    },
    Daotasteshenqing(params,callback){
        dbpool.connect("insert into companytaste(companyname,companyadd,quantity,username,officephone,cellphone,email) value(?,?,?,?,?,?,?)",
            params,(err,data)=>{
            callback("申请已提交");
        })
    },
    Daotijiaoyuyue(params,callback){
        dbpool.connect("insert into t_experience value(null,null,null,?,?,?,null,?)",params,(err,data)=>{
            callback("申请已提交");
        })
    },
    DaogetallComptaste(params,callback){
        dbpool.connect("select * from companytaste",params,(err,data)=>{
            callback(data);
        })
    },
    DaohuoquUsername(params,callback){
        dbpool.connect("select username from t_user where U_id=?",params,(err,data)=>{
            callback(data);
        })
    },
    DaopinglunVideo1(params,callback){
        dbpool.connect("insert into video_comment(U_id,Video_id,username,comment_time,comment_text) value(?,?,?,?,?)",params,(err,data)=>{
            callback("评论成功");
        })
    },
};

module.exports=zcModel;