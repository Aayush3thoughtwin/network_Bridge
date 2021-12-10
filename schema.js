
const mongoose = require('mongoose');

const bridgeContractDb = new mongoose.Schema({

    fromToken:{
        type:String,required:true
    },

    toToken:{
        type:String,required:true
    },
    fromAddress:{
        type:String,required:true
    },
    toAddress:{
        type:String,required:true
    },
    amount:{
        type:Number,required:true
    },
    nonce: {
        type:Number,required:true
    },
});

const User = mongoose.model('trasnferToken',bridgeContractDb);

module.exports  = User;