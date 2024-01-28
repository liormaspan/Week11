// Exercise 1 : Giphy API
// async function gif(){
//     const res=await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//     console.log(res);
//     if(res.ok){
//         const data=await res.json()
//         console.log(data.data);
//     }else{
//         console.log(Error);
//     }
// }
// gif()

// Exercise 2 : Giphy API

// async function gif(){
//     const res = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//     console.log(res);
//     if(res.ok){
//         const data=await res.json()
//         if(data.data.length>=10){
//             const team=data.data.slice(2,12)
//             console.log(team);
//         }else{
//             console.log("THIS GIF ITS NOT FIND");
//         }
//     }else{
//         console.log(error);
//     }
// }
// gif()


// Exercise 3 : Async Function

// async function some(){
//     try{ 
//     const res=await fetch("https://www.swapi.tech/api/starships/9/")
//     console.log(res);
//     if(res.ok){
//         const data=await res.json()
//         console.log(data.result.properties);
//     }else{
//         console.log("error");
//     }
//     }catch(e){
//         console.log(e);
//     }
  
// }
// some()


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();