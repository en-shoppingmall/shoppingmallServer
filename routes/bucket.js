const express=require('express');
const bucket=express.Router();
const mysql=require('../mysql/index.js');

bucket.use(express.json({
    limit:'50mb'
}));

module.exports=bucket;