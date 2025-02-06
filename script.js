const checkBtn = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  if(!str){
    alert("Please input a value");
  }
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr===reversedStr ? `${str} is a palindrome` : `${str} is not a palindrome`;
}

checkBtn.addEventListener("click", ()=>{
  const value = inputText.value;
  result.innerText = isPalindrome(value);
} );