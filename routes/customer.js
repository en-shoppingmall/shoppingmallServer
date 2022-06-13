const express=require('express');
const customer=express.Router();
const mysql=require('../mysql/index.js');

customer.use(express.json({
    limit:'50mb'
}));

//whole search
customer.get("/inquire/",async(req,res)=>{
    console.log("in");
    const customers=await mysql.query('customerList');
    console.log(customers);
    res.send(customers);
});

//login
customer.get("/login",async(req,res)=>{
    const customers=await mysql.query('customerData',req.body.param);
    console.log(customers);
    res.send(customers);
});

//signUp
customer.post("/signUp/insert",async(req,res)=>{
    const customers=await mysql.query('addCustomer',req.body.param);
    console.log(customers);
    res.send(customers);
});

customer.get("/signUp/idCheck",async(req,res)=>{
    const customers=await mysql.query('addCustomer',req.body.param);
    console.log(customers);
    res.send(customers);
});

customer.get("/signUp/idCheck",async(req,res)=>{
    const customers=await mysql.query('addCustomer',req.body.param);
    console.log(customers);
    res.send(customers);
});
module.exports=customer;