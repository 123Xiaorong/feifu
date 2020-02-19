const feiFuModel=require("../dao/feiFuDao");
const feiFuController={
    test(request,response){
        console.log(request.query.test);
        feiFuModel.test([request.query.test])
            .then(data=>{response.send(data)})
            .catch(error=>{response.send(error)});
    }
};
module.exports=feiFuController;