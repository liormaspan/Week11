const getChuck=()=>{
    fetch("https://api.chucknorris.io/jokes/random?category=music")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("error")
        }
    })
    .then((joke)=>{
    console.log(joke.value);
}).catch((e)=>{
    console.log(e);
})
}

getChuck()  