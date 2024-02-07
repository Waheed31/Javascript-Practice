//
function palindrome(arr) {
  if (Array?.isArray(arr)) {
    arr = arr?.flat(Infinity);
    if (arr?.length < 1) {
      return "please enter the values inside the array";
    }
    let reverseArray = arr?.map((element) => {
      if (typeof element === "string" )  {
        let trimmedElement = element?.toLowerCase()?.trim()
        let reverse = trimmedElement?.split("")?.reverse()?.join("");
        return reverse;
      }
    });
    let palindrome = arr?.filter((el) => {
      if (typeof el === "string"){
        let trimmedElement = el?.toLowerCase()?.trim()
        let palindromeCheck = reverseArray?.includes(trimmedElement) 
        && typeof trimmedElement === "string" &&trimmedElement?.length > 2;
        return palindromeCheck;
      }
    });
    return palindrome;
   } else {
    return "It accepts only arrays with elements";
  }
}
console.log(palindrome(["hello","malayalam",'mom','code','daD']));


//
// let words = ["mom", "mame", "com", "malayalam"];
// let reversedWords = [];
// let matchingWords = [];

// let reverse = words?.map((el) => {
//   reversedWords.push(el?.toString().split("").reverse().join(""));
// });

// for (let i = 0; i < words.length; i++) {
//   for (let j = 0; j < words.length; j++) {
//     if (words[i] === reversedWords[j]) {
//       matchingWords.push(words[i]);
//     }
//   }
// }

// console.log("Palindromes ",matchingWords);


