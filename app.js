const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    },
    getGuess: function() {
        let guess = window.prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        guess = parseInt(guess)
        while (typeof guess !== 'number' || guess === NaN) {
            guess = window.prompt(`Please try again. Enter a number between ${this.smallestNum} and ${this.biggestNum}`)
        }
        console.log(guess)
    },
  }

game.getGuess()