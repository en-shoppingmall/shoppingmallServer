const express=require('express');
const customer=express.Router();
const mysql=require('../mysql/index.js');

customer.use(express.json({
    limit:'50mb'
}));

//whole search
customer.get("/inquire/",async(req,res)=>{
    console.log(req.body);
    const result=await mysql.query('customerList');
    res.send(result);
});

//login
customer.post("/login",async(req,res)=>{
    console.log(req.body);
    try{
        const result=await mysql.query('customerData',req.body.param);
        if(result[0]){
            res.send("OK");
        }else{
            res.send("User Not Exist");
        }
    }catch(err){
        res.send("DB Connect Error");
    }
});

customer.post("/find/ID",async(req,res)=>{
    console.log(req.body);
    try{
        const result=await mysql.query('findID',req.body.param);
        if(result[0]){
            res.send(result);
        }else{
            res.send("User Not Exist");
        }
    }catch(err){
        res.send("DB Connect Error");
    }
});

customer.post("/find/PW",async(req,res)=>{
    console.log(req.body);
    try{
        const result=await mysql.query('findPW',req.body.param);
        if(result[0]){
            res.send(result);
        }else{
            res.send("User Not Exist");
        }
    }catch(err){
        res.send("DB Connect Error");
    }
});


//signUp
customer.post("/signUp/insert",async(req,res)=>{
    console.log(req.body);
    try{
        await mysql.query('addCustomer',req.body.param);
        //res.status(200).send();
        res.send("OK");
    }catch(err){//need to check overlap exception
        //res.status(400).send();
        res.send("DB Connect Error");
    }
});
//아이디 중복확인
customer.get("/signUp/idCheck",async(req,res)=>{
    console.log(req.body);
    try{
        const result=await mysql.query('idCheck',req.body.param);
        if(result[0]){
            res.send("Existed User");
        }else{
            res.send("OK");
            //res.status(200).send();
        }
    }catch(err){
        res.send("DB Connect Error");
    }
});
//휴대폰 중복확인
customer.get("/signUp/phoneCheck",async(req,res)=>{
    console.log(req.body);
    try{
        const result=await mysql.query('phoneCheck',req.body.param);
        if(result[0]){
            res.send("Existed User");
        }else{
            res.send("OK");
            //res.status(200).send();
        }
    }catch(err){
        res.send("DB Connect Error");
    }
});

//revise
customer.put("/revise",async(req,res)=>{
    console.log(req.body);
    try{
        await mysql.query('reviseCustomerr',req.body.param);
        res.send("OK");
    }catch(err){//need to check overlap exception
        res.send("DB Connect Error");
    }
});

//delete
customer.delete("/delete",async(req,res)=>{
    console.log(req.body);
    try{
        const result=await mysql.query('findCustomer',req.body.param);
        if(result[0]){
            await mysql.query('deleteBucket',req.body.param);
            await mysql.query('deleteCustomer',req.body.param);
            res.send("OK");
        }else{
            res.send("User Not Exist");
        }
    }catch(err){
        res.send("DB Connect Error");
    }
});

module.exports=customer;