function chunkArray(array, chunkSize) {
  try {
    if (!Array?.isArray(array)) {
      throw new Error("It accepts only array")
    }
    if (array?.length < 1) {
      throw new Error("Please enter some elements inside the array")
    }
    if (chunkSize < 1 || chunkSize > array?.length) {
      throw new Error(
        "The chunk size should not be less than 1 or should not be greater than the size of the array"
      )
    }
    for (let element of array) {
      if (!(typeof element === "string" || typeof element === "number")) {
        throw new Error(
          "Invalid element found. Only strings and numbers are allowed."
        )
      }
    }
    const chunkedArray = []
    while (array?.length > 0) {
      let chunks = array?.splice(0, chunkSize);
      chunkedArray?.push(chunks)
      console.log(chunkedArray)
    }
    return chunkedArray;
  } catch (error) {
    return error
  }
}

const inputArray = [1, 2, 3, 4, 9, 10, 11]
const chunkSize = 3
console.log(chunkArray(inputArray, chunkSize))
