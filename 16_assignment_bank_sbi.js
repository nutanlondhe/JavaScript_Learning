console.log("*******************************");
const bank_sbi = {
    Bank_name : "State Bank Of India",
    Manager_Name : "Shiva Reddy",
    Contact_no : 9090909090,
    Branch : "Mahape",
    Street : "Shabri Park",
    City: "Mumbai",
    Pin_code: "400701",
    }
console.table(bank_sbi);

console.log("*************Merge the object************************");
const bank_Hdfc = {

    home_loan_interest : "20%",
    personal_loan_interest: "12%",
    EMI_Interest:"14%",  
}
console.log(bank_Hdfc);
let merjedobject = Object.assign( {},bank_sbi, bank_Hdfc);
console.table(merjedobject);




