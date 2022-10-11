console.log("Hello");
console.log("Vishu");
// this is warning
 console.warn("i am not a Bad girl"); 

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
