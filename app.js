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

function generateStartPrompt() {
  return `
  <article>
  <section id="question-box" class="halftone flex">
    <h2>A Quiz About the Periodic Table</h2>
  </section>
  <section id="start-box" class="halftone flex">
    <h3>Welcome User!</h3>
    <p>Start the quiz by pressing the button below_</p>
    <button type="button" id="start">Start</button>
  </section>
 </article>`;
}

function generateQuestionCounter(currentQuestion) {
  const questionCount = store.questions.length;
  return `
 <h3>Question ${currentQuestion + 1} of ${questionCount}:</h3>`;
}

function generateQuestion(currentQuestion) {
  const question = store.questions[currentQuestion].question;
  return `
  <p> ${question} </p>`;
}

function generateAnswerListElements(item) {
  return `
  <li>
    <input name="answer" type="radio" value="${item}" />
    <label for="${item}">${item}</label>
  </li>`;
}

function generateAswerList(currentQuestion) {
  const answers = store.questions[currentQuestion].answers.map((item) =>
    generateAnswerListElements(item)
  );
  return answers.join("");
}

function generateScoreCounter() {
  return `
      <span id="score-counter">${store.score}</span>`;
}

function generateQuestionPrompt(currentQuestion) {
  return `
  <article>
  <section id="question-box" class="halftone flex">
    ${generateQuestionCounter(currentQuestion)}
    ${generateQuestion(currentQuestion)}
  </section>
  <section id="answers-box">
    <form>
      <ol>
      ${generateAswerList(currentQuestion)}
      </ol>
      <button type="submit" id="submit-answer">Submit</button>
    </form>
  </section>
  <section id="score-box" class="halftone flex">
    <h3> Score: ${generateScoreCounter()}</h3>
  </section>
</article>`;
}

function generateAnswerConfirmationPrompt(currentQuestion, currentResult) {
  return `
  <article>
  <section id="tidbit-box" class="halftone flex">
    <h3>${currentResult ? `Correct!`: `Wrong.` }</h3>
    <p>${store.questions[currentQuestion].tidbit}<p>
  </section>
  <section id="continue-box">
      <button type="button" id="next">Next</button>
  </section>
  <section id="score-box" class="halftone flex">
    <h3> Score: ${generateScoreCounter()}</h3>
  </section>
</article>`;
}

function generateResultsPrompt() {
  return `
  <article>
  <section id="question-box" class="halftone flex">
    <h2>Your Score was: ${generateScoreCounter()}</h2>
  </section>
  <section id="start-box" class="halftone flex">
    <h3>You can play again!</h3>
    <p>Restart the quiz by pressing the button below_</p>
    <button type="button" id="restart">Start again</button>
  </section>
 </article>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuizView() {
  console.log(`renderQuizView ${msg}`);
  store.quizStarted = true;
  store.currentQuestion = 0;
  store.score = 10;

  const quizStarted = store.quizStarted;
  const currentQuestion = store.currentQuestion;

  if (quizStarted && currentQuestion < store.questions.length) {
    $("main").html(generateAnswerConfirmationPrompt(currentQuestion,true));
  } else if (!quizStarted && currentQuestion === store.questions.length) {
    $("main").html(generateResultsPrompt());
  } else {
    $("main").html(generateStartPrompt());
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
