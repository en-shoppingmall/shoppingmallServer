const express=require('express');
const order=express.Router();
const mysql=require('../mysql/index.js');

order.use(express.json({
    limit:'50mb'
}));



module.exports=order;