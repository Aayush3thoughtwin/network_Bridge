const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bridgeContractDb',{useNewUrlParser: true},(err)=>
{
    if(!err){console.log('Mongodb connected')}
    else{
        console.log('Error'+err);
}
});

const User = require('./schema.js');

