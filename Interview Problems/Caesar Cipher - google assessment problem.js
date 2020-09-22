/*
Given a string (str) return a string that represents the next letters in the alphabet. 

input = "crazy"
output = "dsbaz"

input = "bqzyx"
output = "crazy"
*/

function nextAlphabetLetter(str) {
    let arr = [];
    let str1 = "";
    
    for (let i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i) + 1;
      if (arr[i] > 122) {arr[i] = 97;}
      let str2 = String.fromCharCode(arr[i]);
      str1 += str2;
    }
    
    return str1
  }
  
  console.log(nextAlphabetLetter("bqzyx"));
  
  