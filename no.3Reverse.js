//Write a function to reverse a string

//method1
function reverseStr(str) {
  str = str.trim()
  if(str.length < 1){
    return "Enter some values inside string"
  }
  let revString = typeof str === "string" ? str?.split("")?.reverse()?.join(""): "Invalid String";
  return revString
}

console.log(reverseStr("waheed"))

//method2
// function revString(string){
//     let reversedString = ''
//     for(let i = string?.length-1 ;i>=0;i--){
//         console.log(string[i])
//         reversedString = reversedString + string[i]

//     }
//     return reversedString
// }
// console.log(revString("waheed"))
