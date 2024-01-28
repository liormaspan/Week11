const Myform=document.forms[0]
const div=document.getElementById("ogContain")
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
Myform.addEventListener("submit",async(e)=>{
    e.preventDefault()
    try{
        const input=Myform.children[0].value 
        const res=await fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}&limit=1`)
        if(res.ok){
            const data=await res.json()
            const pic=document.createElement("image")
            const contain=document.createElement("div")
            const deleteBtn=document.createElement("button")
            deleteBtn.innerText=`delete ${input}`
            pic.src=data.data[0].images.original.url;
            pic.style.width = "200px";
            deleteBtn.addEventListener("click",()=>{
                contain.remove()
            })    
                contain.style="display:inline-block; width:300px; height:250px; display:flex; justify-content:center;align-items:center; border:1px solid black; margin:5px;flex-direction:column;";
                contain.append(pic,deleteBtn)
                div.append(contain)
            
        }else{
            throw new Error("SORRY THATS AN ERROR")
        }
    }catch(e){
        console.log(e);
    }
    const deleteAll=document.getElementById("deleteall")
    deleteAll.addEventListener("click",()=>{
        div.innerHTML=""
    })
})