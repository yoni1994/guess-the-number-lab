const game = {
    title: 'Guess the Number!',
    biggestNum: null,
    smallestNum: null,
    secretNum: null,
    prevGuesses: [],
    play: function() {
        this.setRange()
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        do {
            this.prevGuesses.push(this.getGuess())

        } 
        while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
        alert('you won')
    },
    getGuess: function() {
        let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
            guess = prompt(`Please try again. Enter a number between ${this.smallestNum} and ${this.biggestNum}.`)
        }
        return guess
    },
    setRange: function() {
        while (this.smallestNum === null || isNaN(this.smallestNum)) {
            this.smallestNum = parseInt(prompt('Pleae enter a number. This will be the bottom of the guessing range.'))
        }
        while (this.biggestNum === null || isNaN(this.biggestNum) || this.biggestNum < this.smallestNum + 2) {
            this.biggestNum = parseInt(prompt(`Please enter a number equal to or higher than ${this.smallestNum + 2}. This will be the top of the guessing range.`))
        }
    },
    render: function() {
        if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
            alert(`Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length = 1 ? 'guess' : 'guesses'}`)
        }
    }
  }

game.play()