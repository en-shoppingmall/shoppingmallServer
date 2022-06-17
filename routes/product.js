const express=require('express');
const product=express.Router();
const mysql=require('../mysql/index.js');

product.use(express.json({
    limit:'50mb'
}));
//set메뉴 메뉴명,가격,이미지
product.get("/set",async(req,res)=>{
    try{
        const result=await mysql.query('setList',req.body.param);
        res.send(result);
    }catch(err){
        res.send("DB Connect Error");
    }
});
//flavor메뉴 메뉴명,가격,이미지
product.get("/flavor",async(req,res)=>{
    try{
        const result=await mysql.query('flavorList',req.body.param);
        res.send(result);
    }catch(err){
        res.send("DB Connect Error");
    }
});
//상품 이름 가져오기
product.get("/productList",async(req,res)=>{
    try{
        const result=await mysql.query('productList',req.body.param);
        res.send(result);
    }catch(err){
        res.send("DB Connect Error");
    }
});
//set메뉴 공통 이미지
product.get("/set/Detail",async(req,res)=>{
    try{
        const result=await mysql.query('setDetail',req.body.param);
        res.send(result);
    }catch(err){
        res.send("DB Connect Error");
    }
});
//flavor메뉴 공통 이미지
product.get("/flavor/Detail",async(req,res)=>{
    try{
        const result=await mysql.query('flavorDetail',req.body.param);
        if(!result[0]){
            res.send("Can't find flavor");
        }else{
            res.send(result);
        }
    }catch(err){
        res.send("DB Connect Error");
    }
});
//공통 이미지 
product.get("/common/Detail",async(req,res)=>{
    try{
        const result=await mysql.query('commonDetail',req.body.param);
        res.send(result);
    }catch(err){
        res.send("DB Connect Error");
    }
});
module.exports=product;