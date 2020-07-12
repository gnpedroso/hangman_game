var wordContainer = [
	"dog",
	"bottle",
	"wallet",
	"table",
	"cellphone",
	"control",
	"car",
	"knife",
	"engineer",
	"marketing",
	"blonde",
	"paper",
	"pencil",
	"book"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = wordContainer[Math.floor(Math.random() * wordContainer.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if(answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkIfGameWon();
    } else if(answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangmanPicture();
    }
}

function guessedWord(){
    wordStatus = answer.split('').map(_letter => (guessed.indexOf(_letter) >= 0 ? _letter: " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus

}





randomWord();
generateButtons();
guessedWord();



