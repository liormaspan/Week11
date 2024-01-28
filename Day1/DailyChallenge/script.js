// 1rst Daily Challenge

// const newWord=(["hello","my","name","is","lior"])

// function makeAllCaps(word){
//     return new Promise((resolve,reject)=>{
//         const str=word.every((word)=>typeof word==="string")
//         if(str){
//             const bigLetter=word.map((word)=>word.touppercase())
//             resolve(bigLetter)
//         }else{
//             reject("SORRY THE LETTER ARE SMALL")
//         }

//     })
// }
// // makeAllCaps()

//     function sortWords(arr){
//         return new Promise((resolve,reject)=>{
//             if(arr.length >= 5){
//                 newArr=arr.sort()
//                 resolve(newArr);
//             }else{
//                 reject("SORRY THE LENGTH IS MORE THEN 5")
//             }
//         })
//     }

//     makeAllCaps(newWord)
//     .then((res)=>{
//         console.log(res);
//         return sortWords
//     })
//     .then((disArr)=>{
//         console.log(disArr);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })



    // 2nd Daily Challenge
const contain=document.getElementById("contain")
    const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`


        const toJo=()=>{
        return new Promise((resolve,reject)=>{
            let oppObj=JSON.parse(morse)
            if(!oppObj){
                reject("that a problem")
            }else{
                resolve(oppObj)
            }
        })
      }
      toJo()
      .then((res)=>{
        // console.log(res);
        return toMorse(res)
      })
      .then((newDate)=>{
        console.log(newDate);
      })
      .catch((e)=>{
        console.log(e);
      })
    
      const toMorse=(obj)=>{
        return new Promise((resolve,reject)=>{
          let word=prompt("ENTER A WORD")
          let arrLetter=word.split("") 
          
          let morseArr=arrLetter.map((letter)=>{
            if(letter.toLowerCase() in obj){
                return obj[letter.toLowerCase()]
            }else{
                reject(`${letter} IS NOT IN THE OBJECT`)
            }
          })
          resolve([morseArr,word])
        })
         }
         const joinWord =(transArr)=>{
            let joined=transArr[0].join(`
            `)
            contain.innerText=`${transArr[1]}trans to ${joined}`
            console.log(joined);
        }
     