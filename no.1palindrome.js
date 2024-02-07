//Write a function to check if a given string is a palindrome

function palindrome(string) {
  if (typeof string === "string" ) {
    let givenString = string?.trim()?.toLowerCase();

    if (givenString?.length < 2) {
      return "Please enter a string contains atleast two letters"
      
    }
    let revString = givenString?.split("")?.reverse()?.join("");
    if (givenString === revString) {
      return `The given string ${string} is a palindrome`
    } else {
      return`The Given string ${string} is not a palindrome`
    }
  } else {
    return "Invalid String"
  }
}
console.log(palindrome("M"))
