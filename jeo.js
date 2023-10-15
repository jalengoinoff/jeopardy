
//Jeopardy question and answers
const jeopardyCategories = [
  {
    genre: "WHERE",
    questions: [
      {
        question: "Where was WW1 started",
        answers: ['Serbia', 'Sarajevo'],
        correct: 'Sarajevo',
        level: 'easy',
      },
      {
        question: "Where was WW1 mostly fought",
        answers: ['Russia', 'Europe'],
        correct: 'Europe',
        level: 'medium',
      },
      {
        question: "Where was Pearl Harbor located",
        answers: ['Serbia', 'Hawaii'],
        correct: 'Hawaii',
        level: 'hard',
      },
      {
        question: "Where was no man's land",
        answers: ['in the trenches', 'in buildings'],
        correct: 'in the trenches',
        level: 'very hard',
      },
    ]
  },
  {
    genre: "WHO",
    questions: [
      {
        question: "Who bombed Pearl Harbor in 1941",
        answers: ['Japanese Navy', 'Russian Navy'],
        correct: 'Japanese Navy',
        level: 'easy',
      },
      {
        question: "Who was president in 1941",
        answers: ['Franklin D. Roosevelt', 'Donald Trump'],
        correct: 'Franklin D. Roosevelt',
        level: 'medium',
      },
      {
        question: "Who started World War 1",
        answers: ['Americans', 'Austria-Hungary'],
        correct: 'Austria-Hungary',
        level: 'hard',
      },
      {
        question: "Who led Germany in WW1",
        answers: ['Kaiser Wilhelm II', 'Adolf Hitler'],
        correct: 'Kaiser Wilhelm II',
        level: 'very hard',
      },
    ]
  },
  {
    genre: "WHEN",
    questions: [
      {
        question: 'When did WW1 end',
        answers: ['1918', '1932'],
        correct: '1918',
        level: 'easy',
      },
      {
        question: "When did WW1 start",
        answers: ['1914', '1910'],
        correct: '1914',
        level: 'medium',
      },
      {
        question: "When was the Treaty of Versailles signed",
        answers: ['1919', '1924'],
        correct: '1919',
        level: 'hard',
      },
      {
        question: "When did WW2 start",
        answers: ['1945', '1939'],
        correct: '1939',
        level: 'very hard',
      },
    ]
  },
  {
    genre: "WHAT",
    questions: [
      {
        question: "What is WW1 also known as",
        answers: ['the Great War', 'the World War'],
        correct: 'the Great War',
        level: 'easy',
      },
      {
        question: "What is the capital of Japan",
        answers: ['Tokyo', 'Osaka'],
        correct: 'Tokyo',
        level: 'medium',
      },
      {
        question: "What type of bomb was dropped in 1945",
        answers: ['atomic bomb', 'water bomb'],
        correct: 'atomic bomb',
        level: 'hard',
      },
      {
        question: "What was the flamethrower called",
        answers: ['Fire-man', 'Flammenwerfer'],
        correct: 'Flammenwerfer',
        level: 'very hard',
      },
    ],
    
  },
    {
      genre: "How many",
      questions: [
        {
          question: "how many soldiers died during ww1",
          answers: [' 8,500,000 ', '5,000,000'],
          correct: ' 8,500,000 ',
          level: 'easy',
        },
        {
          question: "how many citizens died during ww1",
          answers: [' 13,000,000', '18,000,000'],
          correct: 'Tokyo',
          level: 'medium',
        },
        {
          question: "how many countries fought in ww1",
          answers: ['20', 'Over 30'],
          correct: 'Over 30',
          level: 'hard',
        },
        {
          question: "how many years ww1 last",
          answers: ['2 yearsn', ' four years '],
          correct: ' four years ',
          level: 'very hard',
        },
      ],
     
  },
  {
  genre: "Bouns",
  questions: [
    {
      question: 'The youngest British soldier in WW1 was how old',
      answers: ['12 years old', '9 years old'],
      correct: '12 years old',
      level: 'easy',
    },
    {
      question: "Plastic surgery was invented because of WW1",
      answers: ['true', 'false'],
      correct: 'true',
      level: 'medium',
    },
    {
      question: " How many letters were delivered to the frontline every week",
      answers: ['8 million', '12 million'],
      correct: '12 million',
      level: 'hard',
    },
    {
      question: "An explosion on the battlefield in France was heard where",
      answers: ['isiarl' ,'England'],
      correct: 'England',
      level: 'very hard',
    },
  ]
},

];

function shuffleArray() {
  for (let i = jeopardyCategories.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [jeopardyCategories[i], jeopardyCategories[j]] = [jeopardyCategories[j], jeopardyCategories[i]];
  }
}

const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);
const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restartGame);
 let gameStarted = false; // Track if the game has started

function startGame() {
  if(gameStarted){
    return;
  }

 gameStarted = true;

  // Hide the start screen
  const startScreen = document.getElementById('start-screen');
  startScreen.style.display = 'none';

  // Show the game board

game.style.display = 'flex';
jeopardyCategories.forEach(category => addCategory(category));
console.log(jeopardyCategories)
  // Check if all questions have been answered
  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card => card.addEventListener('click', flipCard))
  const unansweredCards = allCards.filter(card => !card.classList.contains('answered'));


  if (unansweredCards.length === 0) {
    gameOverPopUp();
    const restartButton = document.getElementById('restart-button');
    restartButton.style.display = 'block';

  }
 
}
function restartGame() {
  gameStarted = false;

  // Shuffle the categories and questions
  shuffleArray();
  
  questionsLoaded = 0;

  // Reload the categories and questions with shuffled data
  game.innerHTML = '';
  // Hide the game over popup
   // Remove the game over pop-up if it exists

   const gameOverPopUp = document.querySelector('.game-over-popup');
  if (gameOverPopUp) {
    gameOverPopUp.remove();
  }
  // Reset the score
  score = 0;
  scoreDisplay.innerHTML = score;

  // Show the start screen
  const startScreen = document.getElementById('start-screen');
  startScreen.style.display = 'flex';
  gameOverPopUp.style.display = 'none';
  // Enable the start button 
  const startButton = document.getElementById('start-button');
  startButton.disabled = false;
}
let score=0
let questionsLoaded = 0;
const totalQuestions = jeopardyCategories.reduce((count, category) => count + category.questions.length, 0);
function addCategory(category) {
  const column = document.createElement('div');
  column.classList.add('genre-column');

  const genreTitle = document.createElement('div');
  genreTitle.classList.add('genre-title');
  genreTitle.innerHTML = category.genre;
  column.appendChild(genreTitle);
  game.append(column);

  category.questions.forEach(question => {
    const card = document.createElement('div');
    card.classList.add('card');
    column.append(card);

    if (question.level === 'easy') {
      card.innerHTML = 100;
    }
    if (question.level === 'medium') {
      card.innerHTML = 200;
    }
    if (question.level === 'hard') {
      card.innerHTML = 300;
    }
    if (question.level === 'very hard') {
      card.innerHTML = 400;
    }
  
    //These attributes store information related to the question, answer options correct answer and value of the card.
    card.setAttribute('data-question', question.question);
    card.setAttribute('data-answers-1', question.answers[0]);
    card.setAttribute('data-answers-2', question.answers[1]);
    card.setAttribute('data-correct', question.correct);
    card.setAttribute('data-value', card.innerHTML);

    card.addEventListener('click', flipCard);
  });
}

// function, which is the event handler for the click event on the card elements.
function flipCard() { 
   if(!this.classList.contains('answered')) {

    this.innerHTML = "";
    this.style.fontSize = '15px';
    //retrieves the question, answer options, and correct answer from the card's attributes
    const question = this.getAttribute('data-question');
    const answer1 = this.getAttribute('data-answers-1');
    const answer2 = this.getAttribute('data-answers-2');
// creates three new elements
    const textDisplay = document.createElement('div');
    //This class can be used for fornt style or size for the text displayed on the card
    textDisplay.classList.add('card-text');
    textDisplay.innerHTML = question;

    const firstButton = document.createElement('button');
    const secondButton = document.createElement('button');
//These class names are be used for styling  buttons with CSS
    firstButton.classList.add('first-button');
    secondButton.classList.add('second-button');
  //innerHTML property is used to set the text content of the buttons. 
    firstButton.innerHTML = answer1;
    secondButton.innerHTML = answer2;

    firstButton.addEventListener('click', getResult);
    secondButton.addEventListener('click', getResult);

    this.append(textDisplay, firstButton, secondButton);
  } 

}

//function is called after every card is answered If they are equal it means all the cards have been answered
function checkGameOver() {
  const allCards = Array.from(document.querySelectorAll('.card'));
  const answeredCards = allCards.filter(card => card.classList.contains('answered'));
  if (answeredCards.length === allCards.length) {
    gameOverPopUp();
    const restartButton = document.getElementById('restart-button');
    restartButton.style.display = 'block';
    restartButton.addEventListener('click', restartGame);
  }
}
// The function starts by selecting all the cards on the game board using
function getResult() {
  //adds an event listener to each card using 
  const allCards = Array.from(document.querySelectorAll('.card'));
  allCards.forEach(card => card.addEventListener('click', flipCard));
  const cardOfButton = this.parentElement;
// ensures that the card has not been already answered to prevent multiple answers.
  if (!cardOfButton.classList.contains('answered')) {
    cardOfButton.classList.add('answered');
  // If the answer is correct, this line increments the score 
    if (cardOfButton.getAttribute('data-correct') === this.innerHTML) {

      score += parseInt(cardOfButton.getAttribute('data-value'));
      scoreDisplay.innerHTML = score;
      cardOfButton.classList.add('correct-answer');
      //block handles the case when the answer is incorrect
    } else {
      cardOfButton.classList.add('wrong-answer');
    }
    const correctAnswer = cardOfButton.getAttribute('data-correct');
    const answerDisplay = document.createElement('div');
    answerDisplay.classList.add('correct-answer');
    answerDisplay.innerHTML = `Correct Answer: ${correctAnswer}`;
    cardOfButton.removeEventListener('click', flipCard);
   
      cardOfButton.innerHTML = cardOfButton.getAttribute('data-value');
      cardOfButton.appendChild(answerDisplay);


  }
//This line removes the click event listener from the card element,
cardOfButton.removeEventListener('click', flipCard);

// Check if all questions have been answered
const unansweredCards = allCards.filter(card => !card.classList.contains('answered'));

if (unansweredCards.length === 0) {
  // Display the game over pop-up
  const gameOverPopUp = document.createElement('div');
  gameOverPopUp.classList.add('game-over-popup');
  gameOverPopUp.innerHTML = 'Game Over. Please reload.';
  document.body.appendChild(gameOverPopUp);
  console.log(gameOverPopUp)
  
}
}


