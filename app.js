const express=require('express');
const customerRoute=require('./routes/customer');
const orderRoute=require('./routes/order');
const productRoute=require('./routes/product');
const bucketRoute=require('./routes/bucket');
const cors=require('cors');
const app=express();
const session=require('express-session');
const port=3000;
app.use(cors());
app.use(session({
    secret:'secret code',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:true,
        maxAge:1000*60*60
    }
}))

app.use(express.json({
    limit:'50mb'
}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/daum_address.html")
})

app.listen(port,()=>{
    console.log("excute");
});

app.use('/customer',customerRoute);
app.use('/order',orderRoute);
app.use('/product',productRoute);
app.use('/bucket',bucketRoute);