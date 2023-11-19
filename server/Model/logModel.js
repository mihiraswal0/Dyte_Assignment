const mongoose=require('mongoose');

const logModel=mongoose.Schema({
    level:{
        type:'String',
        required: true
    },
    message:{
        type:'String',
        required: true
    }, resourcId:{
        type:'String',
        required: true
    }, timestamp:{
        type:'String',
        required: true
    }, traceId:{
        type:'String',
        required: true
    }, spanId:{
        type:'String',
        required: true
    }, commit:{
        type:'String',
        required: true
    },
    metadata_parentResourceId:{
        type:'String',
        required: true
    }
},{timestamp:true});

module.exports=mongoose.model('logs',logModel);