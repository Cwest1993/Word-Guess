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
        this.rebuildWord();
        this.gameLoss();
    },

    correctLetter: function(key){
        if(this.yesGuess.indexOf(key)===-1&&
            this.word.w.indexOf(key)>-1){
            this.yesGuess.push(key)
            console.log("right letters: "+this.yesGuess)
            this.updateGuesses()

        }
        else{
            
        }
    },

    incorrectLetter: function(key){
        if(this.word.w.indexOf(key)===-1&&
           this.noGuess.indexOf(key)===-1){
            this.noGuess.push(key)
            console.log("wrong letters: "+this.noGuess)
            this.updateGuesses()

        }
        else{
            
        }
    },

    updateGuesses: function(){
        this.guesses--
        document.getElementById("guessLeft").innerText = "Guesses left: "+this.guesses

    },

    showHiddenImage: function(){
       let image = document.getElementById("wordImage");
       image.src = this.word.i;
       image.style.visibility = "hidden";
    },

    displayImage: function(){
        let image = document.getElementById("wordImage");
        image.src = this.word.i;
        image.style.visibility = "initial";
    },

    pauseSong: function(){
        let song = document.getElementById("wordSong");
        song.src = this.word.s;
        song.pause();
    },
    
    playSong: function(){
        let song = document.getElementById("wordSong");
        song.src = this.word.s;
        song.play();
    },

    displayScore: function(){
        document.getElementById("wGuess").innerText = "Wins: "+this.wCounter;
        document.getElementById("lGuess").innerText = "Losses: "+this.lCounter;
    },

    startGame: function(){
        this.pickWord();
        this.rebuildWord();
        this.guessesLeft();
        this.showHiddenImage();
        this.displayScore();

    },

    resetGame: function(){
        this.yesGuess = [];
        this.noGuess = [];
        this.pickWord();
        this.rebuildWord();
        this.showHiddenImage();
        this.guessesLeft(); 
    },

    gameLoss: function(){
        if(this.guesses===0){
            this.resetGame();
            this.lCounter++;
            this.displayScore();
            this.pauseSong();
        }
        else{

        }
    }
}


wGame.startGame();


document.onkeydown = function(e){
    let key =e.key
    if(wGame.alphabet.includes(key)){
        console.log(key)
        wGame.checkLetter(key);

        
    }
    else{
        document.getElementById("wrongGuess").innerText = "Please select a valid letter"
    }

    if(key==="z"){
        wGame.resetWord();
    }
    else{

    }

}
