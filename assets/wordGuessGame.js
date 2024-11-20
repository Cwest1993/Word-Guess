let wGame = {
    wAns: [
        {w: "adele", 
         s: "assets/audio/AdeleTheme.mp3",
         i: "assets/images/Adele.webp"   
        },

        {w: "kinesis", 
         s: "assets/audio/KinesisTheme.mp3",
         i: "assets/images/Kinesis.webp"  
        },

        {w: "kaling", 
         s: "assets/audio/KalingTheme.mp3",
         i: "assets/images/Kaling.webp"    
        },

        {w: "kalos", 
         s: "assets/audio/KalosTheme.mp3",
         i: "assets/images/Kalos.webp"     
        },

        {w: "black mage", 
         s: "assets/audio/BlackMageTheme.mp3",
         i: "assets/images/BlackMage.webp"   
        }
    ],

    wCounter: 0,
    lCounter: 0,
    guesses: 0,
    word: null,
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    yesGuess: [],
    
    pickWord: function(){
        this.word = this.wAns[Math.floor(Math.random()*this.wAns.length)]
        console.log(this.word)
    },

    rebuildWord: function(){
        let rebuiltWord = this.word.w
        .split("")
        .map(function(key){
            if(key===""){
                return "\xa0";
            }
            else if(wGame.yesGuess.indexOf(key)>-1){
                return key
            }
            else{
                return " _ "
            }
        })
        .join("")
        document.getElementById("guessWord").innerText = rebuiltWord;
    }
}


wGame.pickWord();
wGame.rebuildWord();

document.onkeydown = function(e){
    let key =e.key
    if(wGame.alphabet.includes(key)){
        console.log(key)
    }
    else{
        document.getElementById("wrongWord").innerText = "Please select a valid letter"
    }
}