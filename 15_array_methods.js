let fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);

console.log("===========Q.1 display first & last console===========");
let first_element = fruits_seasonal[0];
console.log(first_element);

let last_element = fruits_seasonal[4];
console.log(last_element);

console.log("========Q.2 add element papaya befor the element banana and then log array on console==========");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log("==============Q.3 Remove Mango from the array============");
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log("==============Q.4 add element or insert an element pineapple at the last position============");
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);


console.log("==============Q.5 insert an element - Dragon fruit before Water Melon============");
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);

console.log("==============Q.6 Replace an element - 'Orange' with'Kiwi'============");
fruits_seasonal[2] = "Kiwi";
console.log(fruits_seasonal);

console.log("============== Q.7 Log the index starting from index 1 and 4 ============");
let start_index = fruits_seasonal.splice(1,4);
console.log(start_index);

console.log("==============Q.8  only select  last 3 element and log on console  use length property ============");
let last_three = fruits_seasonal[fruits_seasonal.length - 3];

console.log(last_three);