module.exports={
    customerList: 'select * from customer',
    //login
    customerData: 'select * from customer where ID= ? and PW=?',
    findID: 'select ID from customer where NAME= ? and EMAIL=?',
    findPW: 'select PW from customer where ID=? and EMAIL=?',
    //signUp
    addCustomer:"insert into customer set ?",
    idCheck:"select CUST_NUM from customer where ID=?",
    phoneCheck:"select CUST_NUM from customer where CELLPHONE=?",
    
    //revise
    reviseCustomer:"update customer set ? where CUST_NUM=?",
    
    //delete
    findCustomer:"select * from customer where CUST_NUM=?",
    deleteBucket:"delete from bucket where CUST_NUM=?",
    deleteCustomer:"delete from customer where CUST_NUM=?",

    //product
    setList:"select set_name,image,price,saled_price,prod_count,default_product from epimint.set where PAGE='SET'",
    flavorList:"select set_name,epimint.set.image as image,price,saled_price,prod_count,PRODUCT_NAME as default_product FROM epimint.set,product where PAGE='FLAVOR' and DEFAULT_PRODUCT=PRODUCT_NUM",
    productList:"select PRODUCT_NAME from product",
    setDetail:"select image,gif from product",
    flavorDetail:"select image,gif from product where PRODUCT_NAME=?",
    commonDetail:"select * from commonimage"
}