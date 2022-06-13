module.exports={
    customerList: 'select * from customer',
    customerData: 'select * from customer where ID= ? and PW=?',
    //signUp
    addCustomer:"insert into customer set ?",
    idCheck:"select CUST_NUM from customer where ID=?",
    phoneCheck:"select CUST_NUM from customer where PHONE=?",
    //revise
    reviseCustomer:"update customer set ? where CUST_NUM=?",
    //delete
    findCustomer:"select * from customer where CUST_NUM=?",
    deleteBucket:"delete from bucket where CUST_NUM=?",
    deleteCustomer:"delete from customer where CUST_NUM=?",

    //product
    setList:"select SET_NAME,PRICE,PROD_COUNT,DEFAULT_PRODUCT as DEFAULT_PRODUCT from epimint.set where PAGE='SET'",
    flavorList:"select SET_NAME,PRICE,PROD_COUNT,PRODUCT_NAME as DEFAULT_PRODUCT FROM epimint.set,product where PAGE='FLAVOR' and DEFAULT_PRODUCT=PRODUCT_NUM",
    productList:"select * from product"

}