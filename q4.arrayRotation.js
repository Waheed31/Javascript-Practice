function arrayRotation(arr, positions) {
  if(typeof positions !== "number"){
    return "Please enter the number of positions"
  }
   if (Array?.isArray(arr) ) {
    arr = arr?.flat()
    if (arr?.length < 1) {
      return "please enter values inside array";
    }
    let filtererdArray = arr?.filter((el)=> typeof el == 'number' )
    console.log(filtererdArray)

    for(let i = 0 ;i<positions;i++){
      let rightElement = filtererdArray?.pop()
      filtererdArray?.unshift(rightElement)
   }
   return filtererdArray
  }     
  else{
    return "It accept array only"
  }
 }
let array = [1,2,5,9,10]
console.log(arrayRotation(array,2));

  // if (positions <= 0 || positions > positions?.length) {
  //   return "Enter a valid number of positions";
  // }


 
  
