  function virat (){
    console.log ("Is an Indian Cricketer");
    console.log ("Plays very good");
    console.log ("Known as No.1 batsman in the world");

}
virat();

function value (firstName, lastName){
    console.log (firstName + lastName); 
}
value ("Vishal", "Patil");

function  swapValues (arg1 , arg2){
    console.log("Befor swap");
    console.log(arg1 , arg2);
    console.log("After swap");
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);


}
swapValues ("Virat", "Anushka");
swapValues ("1000", "2000");

function addThreeNumber  (arg1, arg2, arg3){
    console.log(arg1,arg2,arg3);
    var temp,add=arg1+arg2+arg3;
    return  temp,add;
    
    
}
 var temp=addThreeNumber(10,60,40);
 var add=addThreeNumber("Hello", "Good", "Morning");
console.log(temp);
console.log(add);

function pen (arg1,arg2,arg3){
    console.log(arg1,arg2,arg3);
    return arg1+arg2+arg3;
    
        }
         pen(10,20,30);
       pen("hello","good","night");
       console.log(pen(10,20,30));
       console.log(pen("hello","good","night"));

       function text(arg1,arg2,arg3) {
        console.log(arg1,arg2,arg3);
        return arg1+arg2+arg3;
        

       }
       text(40,220,30);
       console.log(text(40,220,30));




