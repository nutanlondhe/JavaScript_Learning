function my_function(){
    console.log("I love Dancing and Travelling");
    console.log("Prabhu deva and Remo D'souza");
}

my_function();
console.log("===============================================");

function dance_india(){
    console.log("Hello Everyone");
    console.log("Good Morning");
    console.log("Good Evening")
}
dance_india();
console.log("===============================================");
 
function swap_values(arg1,arg2){
    console.log("=======================Befor Swap=======================");
    console.log(arg1,arg2);
    var temp =arg1;
    arg1=arg2;
    arg2=temp;
    console.log("=======================After Swap=======================");
    console.log(arg1,arg2);
}
swap_values ("Virat","Anushka");
swap_values (1000,2000);

console.log("================Addition Values==============");
//Add the three number or string and return
function add_three_number(arg5,arg6,arg7){
    console.log("===================");
    var add = arg5+arg6+arg7;
    console.log("Addition of three number is =" +add);
    return add;
}

add_three_number(10,20,30);
add_three_number(40,50,60);
add_three_number("Hello" ,"Good" ,"Morning");
