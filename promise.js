let div=document.querySelector("div")
let cmt=prompt(" your are good or not ")
let solve = (cmt)=>{
  return new Promise((resolve ,reject)=>{
    console.log("Wait for your result...")
    setTimeout(()=>{
    if(cmt=="good"){
      resolve()
    }

    else{
reject()
    }
  },3000);
  })
}
async function main(){
  try{
   await solve(cmt);
  div.innerText="Good habit :)"
  
  }
  catch{
    div.innerText="improve your life style"
  }
  
}
main();
