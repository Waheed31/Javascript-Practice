function removeDuplicates(array) {
  try {
    if (Array?.isArray(array)) {
      array = array?.flat(Infinity);
      if (array?.length < 1) {
        throw new Error("Please enter some elements inside the array");
      }
      for (let i = 0; i < array?.length; i++) {
        if (!(typeof array[i] === "string" || typeof array[i] === "number")) {
          throw new Error("Only strings and numbers are allowed.");
        }
        if (typeof array[i] === "string") {
          array[i] = array[i]?.trim();
        }
      }
      let finalResult = Array?.from(new Set(array));
      return finalResult;
    } else {
      throw new Error("Please enter array only");
    }
  } catch (error) {
    return error;
  }
}

let array = ["abdul", 1, "word", 3, "word"];
console.log(removeDuplicates(array));
