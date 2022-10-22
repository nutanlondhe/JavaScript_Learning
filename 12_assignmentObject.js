let teacher ={
fullName : "Vishal Patil",
age : 27,
city :"Mumbai",
state : "MH",
Education : "MBA",
}

delete teacher.age;

console.log(teacher);
console.log("1.Name of the teacher");
let tea = teacher.fullName
console.log(teacher.fullName);
console.log("**********02*********************");

let degree = {
    Engineering : "CSC",
    PHD : "Adv Computing",
    Sub : "Chemistry",
    

}
console.log("*******03.Add nested object certificate");

let certificate = {
    Certificate1 : "Hacker Rank Participation",
    Certificate2 : "Certificate in IFE Course",
    Certificate3 : "Certificate in Advance programing",

}
degree.profession = "Developer";
console.table(degree);
console.log("2.Degree of teacher");
let deg = degree.PHD
console.log(degree.PHD);

console.log("********04. add function as a value concat**********");

let output = {
    Engineering : "CSC",
    PHD : "Adv Computing",
    Sub : "Chemistry",
    certificate : {
        Certificate1 : "Hacker Rank Participation",
        Certificate2 : "Certificate in IFE Course",
        Certificate3 : "Certificate in Advance programing",
        
        },
        
        eat:function(){
            console.log("I love IT"); 
    
            
        },


        welcome:function(){
            console.log("Hacker Rank Participation");
        }

    
    }
    output.eat();
    output.welcome();
    output.certificate4 = "Certificate in Advance Excel";


    delete degree.Sub;

console.table(output);
console.log(typeof output);
console.log("************add**********");
console.log(output.certificate.Certificate3);

console.log("****07.Delete any one certificate from nested object********");
console.log(delete teacher.age);




