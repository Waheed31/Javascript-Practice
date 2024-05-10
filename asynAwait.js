 const pro = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("i returned a value")
    },10000)
    
 })

 async function handlePromise(){
    console.log("heyy")
    const val = await pro;
    console.log("hello")
    console.log(val)
    const val1 = await pro;
    console.log("hello world")
    console.log(val1)
 }
 handlePromise()