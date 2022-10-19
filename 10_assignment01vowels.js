console.log(`01.Count the total number vowels using includes() for string → "Good Morning IT Champ"`);
function vowels(str) {
  var myString = "Good Morning IT Champ";

  var vowelLowerCase = "aeiou";
  var vowelUpperCase = "AEIOU";
  var vowelcount=0;
  for (let index=0; index < myString.length; index++){
    var char = myString.charAt(index);
     var isLowerCaseAvailable = vowelLowerCase.includes(char);
     var isUpperCaseAvailable = vowelUpperCase.includes(char);
     if ( isLowerCaseAvailable || isUpperCaseAvailable){
      vowelcount = vowelcount + 1;
}
}
console.log(`Total Vowels Count :${vowelcount}`);
}
vowels();
console.log("*************************************************");
console.log(`02. Count the total number vowels using includes() for string →"I Love Javascript"`);

function countVowels(str1) {
  var str = " I Love Javascript";
  var vowelLowerCase = "aeiou";
  var vowelUpperCase = "AEIOU";
  var vowelCount = 0;

   
  for (let index = 0; index < str.length; index++){
    var char = str.charAt(index);
    var isLowerCaseAvailable = vowelLowerCase.includes(char);
    var isUpperCaseAvailable = vowelUpperCase.includes(char);



    if (isLowerCaseAvailable || isUpperCaseAvailable){
        vowelCount = vowelCount + 1;
    }
  }
  console.log(`Total Vowels Count : ${vowelCount}`);
}
countVowels();

console.log("************************************************");
console.log(`03. write a  function expression to sum all numbers from 1 to 10`);
var count = 0;
for (let index= 0; index<=10 ; index++){
  count = count + index;

  
}
console.log(`Adition is : $ {count}`);
console.log("********************Question-04******************");
console.log(`04. write a function to get the sum of square number from 1 to 5 :`);
function additionSquare (){
  var num = 0;
  for (let index=1; index <= 5;index++){
    var square = index*index;
    num = num + square;
  }
  console.log(`the sum of square numbers from 1 to 5 : ${num}`);

}
additionSquare();
console.log("*************Question-05****************");
console.log(`05.1 log only even positioned chars on console and do not consider empty spaces`);
var str1 ="Hard Work Always Pays Back";
var str2 ="Soon i will be IT Champ";
function evenPositionChar(str) {
  var result = " ";
  for(let index=0; index< str.length; index++) {
    if  (index % 2 == 0 &&  str.charAt(index) != " "){
      result = result + str.charAt(index);
    }
  }
  return result;

}
var ans = evenPositionChar(str1);
var result1 = evenPositionChar(str2);
console.log(ans);
console.log(result1);
console.log("**************Question05************************")
console.log(`05.2 log only odd positioned chars on console and do not consider empty spaces`);
var str = "Hard Work Always Pays Back";
var str2 ="Soon i will be IT Champ";
function oddpositionChar (str){
  var result = " ";
  for (let index = 0; index < str.length; index++){
  if (index % 2 !=0 && str.charAt(index) !=" "){

    result = result + str.charAt(index);
  }

}
return result;
}
var ans = oddpositionChar(str1);
var result1 =oddpositionChar(str2);
console.log(ans);
console.log(result1);


