function largestNumber(arr) {
  if (Array?.isArray(arr)) {
    arr = arr?.flat(Infinity)
    const numbersArray = arr?.filter((ele) => typeof ele === "number")
    console.log(numbersArray?.length)
    if (numbersArray?.length< 1) {
      return "please enter the number values inside the array "
    }
    let result = numbersArray?.reduce((acc, curr) => Math?.max(acc, curr));
    return result;
  } else {
    return "Enter a proper array"
  }
}
let arr = [1,2,3,9898]
console.log(largestNumber(arr))


//
// function numberLargest(arr1){
//   let max = 0;
//   for( let i = 0; i < arr1.length;i++){
//     if(arr1[i]>max){
//       max = arr1[i]
//     }
    
//   }
//   return max
// }
// console.log(numberLargest([9,1,2,3,11]))

