module.exports={
    customerList: 'select * from customer',
    customerData: 'select * from customer where ID= ? and PW=?',

    addCustomer:"insert into customer set ?"
}