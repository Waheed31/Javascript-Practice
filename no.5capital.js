// let letter = "hello how are you"
// let newe = letter.split(" ")
// let lett = newe.map((ele)=> ele.charAt(0).toUpperCase() + ele.slice(1))
// let ad = lett.join(" ")
// console.log(ad)

//
function capitalWord(str){
    if(typeof str === 'string' && str?.trim()){
        let wordSplit = str?.split(" ")
        let capitalise = wordSplit?.map((ele)=> ele?.charAt(0)?.toUpperCase() + ele?.slice(1)) ?? "error"
        let result = capitalise?.join(" ") 
        return result
    }
    else{
        return "Please enter valid string"
    }
    }
console.log(capitalWord(""))

