const game = {
    title: 'Guess the Number!',
    biggestNum: null,
    smallestNum: null,
    secretNum: null,
    prevGuesses: [],
    play: function() {
        //have the player set the range
        this.setRange()

        //randomly assign the secret numer within the range
        this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

        //have guess checked
        do {

            //ask for new guesses and add them to a previous guesses array
            this.prevGuesses.push(this.getGuess())

            //reset the range using the user's most recent input as the new high/low number
            this.resetRange()

            //alert the user about the status of their guess
            this.render()
        }

        //stop playing once the user guessed correctly
        while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
    },
    //have the user input a guess
    getGuess: function() {
        //ask for a guess
        let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))

        //make sure the guess is a number within the range
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
            guess = prompt(`Please try again. Enter a number between ${this.smallestNum} and ${this.biggestNum}.`)
        }
        return guess
    },
    //have the user set the range they want to playt with
    setRange: function() {
        //set the smallest number
        while (this.smallestNum === null || isNaN(this.smallestNum)) {
            this.smallestNum = parseInt(prompt('Pleae enter a number. This will be the bottom of the guessing range.'))
        }
        //set the largest number
        while (this.biggestNum === null || isNaN(this.biggestNum) || this.biggestNum < this.smallestNum + 2) {
            this.biggestNum = parseInt(prompt(`Please enter a number equal to or higher than ${this.smallestNum + 2}. This will be the top of the guessing range.`))
        }
    },
    //tell the user how they're doing
    render: function() {
        //tell the user they won if the guess matches
        if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
            alert(`Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length === 1 ? 'guess' : 'guesses'}!`)
        }

        //tell the user their guess is too low and that their guess is the new low end of the range
        if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
            alert(`${this.prevGuesses[this.prevGuesses.length - 1]} is too low. You can now only guess numbers above ${this.prevGuesses[this.prevGuesses.length - 1]} 
            \nPrevious guesses: ${this.prevGuesses.join(", ")}`)
        }

        //tell the user their guess is too high and that their guess is the new high end of the range
        if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
            alert(`${this.prevGuesses[this.prevGuesses.length - 1]} is too high. You can now only guess numbers below ${this.prevGuesses[this.prevGuesses.length - 1]} 
            \nPrevious guesses: ${this.prevGuesses.join(", ")}`)
        }
    },
    //have the range reset to within the user's guesses
    resetRange: function() {
        //reset the high number to the user's too high guess
        if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
            this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1]
        }

        //reset the low number to the user's too low guess
        else {
            this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
        }
    }
  }
//invoke the play method to run the game
game.play()