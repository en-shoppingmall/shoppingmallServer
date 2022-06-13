const express=require('express');
const customerRoute=require('./routes/customer');
const orderRoute=require('./routes/order');
const productRoute=require('./routes/product');
const app=express();
const port=3000;

app.use(express.json({
    limit:'50mb'
}));

app.post('/',function(req,res){
    console.log(req.body.param);
    res.send(req.body.param);
})

app.listen(port,()=>{
    console.log("excute");
});

app.use('/customer',customerRoute);
app.use('/order',orderRoute);
app.use('/product',productRoute);