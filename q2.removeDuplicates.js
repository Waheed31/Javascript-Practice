function removeDuplicates(arr) {
  
  if (Array?.isArray(arr)) {
    arr = arr?.flat(Infinity)
 
    let filteredResult = arr?.filter(
      (ele) =>
        typeof ele == "number" ||
        (typeof ele == "string" && ele?.trim() )
    )
    if(filteredResult?.length<1){
      return 'Please enter some values in array'
    }
    console.log(filteredResult)
    let result = filteredResult?.map((ele)=> typeof ele === 'string' ? ele.trim() : ele )
    console.log(result)
    let finalResult = Array?.from(new Set(result));
    return finalResult
  } else {
    return "Please enter array only";
  }
}


let arr = ["word",'word',[12],12,"abd","abd","ba"]
console.log(removeDuplicates(arr));












