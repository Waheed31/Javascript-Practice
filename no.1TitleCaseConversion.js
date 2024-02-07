function titleCaseConversion(sentence) {
  try {
    if (typeof sentence !== "string") {
      throw Error("This program only accepts string only")
    }
    if (sentence?.trim()?.length < 1) {
      throw Error("please enter the values inside the string")
    }
    let wordSplit = sentence?.split(" ")
    let capitalise = wordSplit?.map(
      (ele) => ele?.charAt(0)?.toUpperCase() + ele?.slice(1)
    )
    let result = capitalise?.join(" ")

    return result
  } catch (error) {
    return error?.message
  }
}
console.log(titleCaseConversion("have a nice day"))

function tcaseconversation(sentence){
  let splitsen = sentence.split(' ')
  let capital = splitsen.map(
    (el)=>el.charAt(0).toUpperCase() + el.slice(1))
let result = capital.join(" ")
return result
}

console.log(tcaseconversation("hello how are you "))

