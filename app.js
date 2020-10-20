/**
 * Example store structure
 */
/*
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
*/

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/* TEMP STUFFF */
const msg = "ran succesfully.";
function StoreState() {
  console.log(`********************************`);
  console.log(`Loaded ${store.questions.length} questions`);
  console.log(
    `Score: ${store.score}, Quiz started state: ${store.quizStarted}, Current question: ${store.score}`
  );
}

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateStartPrompt() {}
function generateQuestionPrompt() {}
function generateAnswerConfirmationPrompt() {}
function generateResultsPrompt() {}
function generateScoreCounter() {}
function generateQuestionCounter() {}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuizView() {
  console.log(`renderQuizView ${msg}`);
  store.quizStarted = false;
  store.currentQuestion = 26;
  startPrompt = `<section id="start-box" class="halftone flex">
  <h3>Welcome User!</h3>
  <p>Start the quiz by pressing the button below_</p>
  <button type="button" id="start">Start</button>
</section>`;

  questionPrompt = `<article>
  <section id="question-box" class="halftone flex">
    <h3>Question 1 of 20:</h3>
    <p>
      What number will you find at the bottom of each element on the
      periodic table?
    </p>
  </section>
  <section id="answers-box">
    <form>
      <ol>
        <li>
          <input name="answer" type="radio" value="Atomic Number" />
          <label for="Atomic Number">Atomic Number</label>
        </li>
        <li>
          <input name="answer" type="radio" value="Mass Number" />
          <label for="Mass Number">Mass Number</label>
        </li>
        <li>
          <input name="answer" type="radio" value="Weight Number" />
          <label for="Weight Number">Weight Number</label>
        </li>
        <li>
          <input name="answer" type="radio" value="Proton Number" />
          <label for="Proton Number">Proton Number</label>
        </li>
      </ol>
      <button type="submit" id="submit-answer">Submit</button>
    </form>
  </section>
  <section id="score-box" class="halftone flex">
    <h3>Score: <span id="score-counter">0</span></h3>
  </section>
</article>`;

  resultsPrompt = `<section id="question-box" class="halftone flex"><h3>Thanks for Playing</h3></section>`;

  const quizStarted = store.quizStarted;
  const currentQuestion = store.currentQuestion;

  if (quizStarted && currentQuestion < store.questions.length) {
    $("main").html(questionPrompt);
  } else if (!quizStarted && currentQuestion === store.questions.length) {
    $("main").html(resultsPrompt);
  } else {
    $("main").html(startPrompt);
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartClicked() {
  console.log(`handleStartClicked ${msg}`);
}
function storeQuestionCount() {
  console.log(`storeQuestionCount ${msg}`);
}
function storeScoreCount() {
  console.log(`storeScoreCount ${msg}`);
}
function handleSubmitClicked() {
  console.log(`handleSubmitClicked ${msg}`);
}
function handleNextClicked() {
  console.log(`handleNextClicked ${msg}`);
}
function handleStartAgainClicked() {
  console.log(`handleStartAgainClicked ${msg}`);
}

function handleQuizApp() {
  console.log(`handleQuizApp ${msg} Loading renderer and handlers:`);
  renderQuizView();
  handleStartClicked();
  handleSubmitClicked();
  handleNextClicked();
  handleStartClicked();
}

$(handleQuizApp);

/* TEMP */
$(StoreState);
