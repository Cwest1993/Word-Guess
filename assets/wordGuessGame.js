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
    noGuess: [],
    
    pickWord: function(){
        this.word = this.wAns[Math.floor(Math.random()*this.wAns.length)]
        console.log(this.word)
    },

    rebuildWord: function(){
        let rebuiltWord = this.word.w
        .split("")
        .map(function(key){
            if(key===" "){
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
    },

    guessesLeft: function(){
        this.guesses = this.word.w.length+2
        document.getElementById("guessLeft").innerText = "Guesses left: "+this.guesses
    },

    checkLetter: function(key){
        this.correctLetter(key);
        this.incorrectLetter(key);
    },

    correctLetter: function(key){
        if(this.yesGuess.indexOf(key)===-1&&
            this.word.w.indexOf(key)>-1){
            this.yesGuess.push(key)
            console.log("right letters: "+this.yesGuess)

        }
        else{
            
        }
    },

    incorrectLetter: function(key){
        if(this.word.w.indexOf(key)===-1&&
           this.noGuess.indexOf(key)===-1){
            this.noGuess.push(key)
            console.log("wrong letters: "+this.noGuess)
        }
        else{
            
        }
    },


}


wGame.pickWord();
wGame.rebuildWord();
wGame.guessesLeft();

document.onkeydown = function(e){
    let key =e.key
    if(wGame.alphabet.includes(key)){
        console.log(key)
        wGame.checkLetter(key);

        
    }
    else{
        document.getElementById("wrongGuess").innerText = "Please select a valid letter"
    }
}
