let wGame = {
    // wAns: [
    //     {w: "adele", 
    //      s:
    //      i:   
    //     },

    //     {w: "kinesis", 
    //      s:
    //      i:   
    //     },

    //     {w: "kaling", 
    //      s:
    //      i:   
    //     },

    //     {w: "kalos", 
    //      s:
    //      i:   
    //     },

    //     {w: "black mage", 
    //      s:
    //      i:   
    //     }
    // ],
    wCounter: 0,
    lCounter: 0,
    guesses: 0,
    word: null,
    alphabet: "abcdefghijklmnopqrstuvwxyz"
    

}

document.onkeydown = function(e){
    let key =e.key
    if(wGame.alphabet.includes(key)){
        console.log(key)
    }
    else{
        document.getElementById("wrongWord").innerText = "Please select a valid letter"
    }
}