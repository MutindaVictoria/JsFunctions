//Write a function that takes a string as input and returns the number of vowels in the string.
function countvowels(word){
    let vowels = ['a','e','i','o','u']
    let count = 0
    for (let char of word) {
      if (vowels.includes(char)) {
        count++
      }
    }
    return count
}
let word = "Jubilant"
console.log(countvowels(word));




//Write a function that takes an array of numbers as 
//input and returns the sum of all the numbers
    
function sumofnumbers(nums){
    addition= 0

    for(let i=0;i<nums.length;i++){
        addition+=nums[i]
    }
    return addition
}
console.log(sumofnumbers([12,1,2,3,10]));

//Write a function that takes two numbers as input and
// returns true if their sum is greater than 100, and false otherwise.
function addtwonumbers(num1,num2){
    let sum = num1+num2
if(sum>100){
    return true
}
else{
    return false
}
}
console.log(addtwonumbers(32,57));

//Write a function that takes in a array of numbers as a parameter and 
//returns the second largest number in the array
function secondlargest(arr) {
    let larger = arr[0];
    let secondLargest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > larger) {
        secondLargest = larger;
        larger = arr[i];
      } else if (arr[i] > secondLargest && arr[i] < larger) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  num=[20,3,5,8,12]
  result=secondlargest(num)
  console.log(result);
  
//Write a function that takes a string as a parameter and 
//returns true if the string is a palindrome and false otherwise 
function Palindrome (str) {
    reversedstr=str.split("").reverse().join("")
   return str===reversedstr
}
console.log(Palindrome("radar"))
