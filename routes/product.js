const express=require('express');
const product=express.Router();
const mysql=require('../mysql/index.js');

product.use(express.json({
    limit:'50mb'
}));

product.get("/set",async(req,res)=>{
    try{
        const result=await mysql.query('setList',req.body.param);
        res.send(result)
    }catch(err){
        res.send("DB Connect Error");
    }
});

product.get("/flavor",async(req,res)=>{
    try{
        const result=await mysql.query('flavorList',req.body.param);
        res.send(result)
    }catch(err){
        res.send("DB Connect Error");
    }
});

product.get("/product",async(req,res)=>{
    try{
        const result=await mysql.query('productList',req.body.param);
        res.send(result)
    }catch(err){
        res.send("DB Connect Error");
    }
});
module.exports=product;