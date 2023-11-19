const logModel=require('../Model/logModel.js');
const getData=async(req,res)=>{
const condition=req.body;
// console.log(JSON.stringify(condition));
console.log(condition);
try{
    const getData=await logModel.find(condition);
    res.status(200).json(getData);
}
catch(err){
    res.status(500).json({error:err.message});
}
}
const addData=async(req,res)=>{
const data=req.body;
try{
    const dataAdd=await logModel.insertMany(data);
    res.status(200).json(dataAdd);
}
catch(err){
    res.status(500).json({error:err.message});
}
}

module.exports={addData,getData};