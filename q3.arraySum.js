function arraySum(arr) {
  if (Array?.isArray(arr)) {
    arr = arr?.flat(Infinity)
    if (arr?.length < 1) {
      return "please enter values inside array"
    }
    let arrayFiltler = arr?.filter((el) => typeof el == "number")
    let result = arrayFiltler?.reduce((acc, curr) => acc + curr)
    return result
  } else {
    return "Please enter array only"
  }
}

let arr = [1, 2, 3, 4, [3, 2]]
console.log(arraySum(arr))

//

// function sumArray(arr) {
//   let sum = 0;
//   if (Array?.isArray(arr)) {
//     arr = arr?.flat(Infinity);
//     if (arr?.length < 1) {
//       return "Please enter values inside array";
//     }
//     for (let i = 0; i < arr?.length; i++) {
//       if (typeof arr[i] === "number") {
//         sum = sum + arr[i];
//       }
//     }
//     return sum;
//   } else {
//     return "It accepts array only";
//   }
// }
// let arr3 = [1, 13, "sdd", 1];
// console.log(sumArray(arr3));
