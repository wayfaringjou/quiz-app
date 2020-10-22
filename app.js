/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateStartPrompt() {
  return `
  <article>
  <section id="intro-box" class="halftone flex">
    <h2>A Quiz About the Periodic Table</h2>
  </section>
  <section id="start-box" class="halftone flex">
    <h3>Welcome User!</h3>
    <p>Start the quiz by pressing the button below_</p>
  </section>
  <section id="start-button-box" class="flex">
    <button type="button" id="start" class="halftone js-start">Start</button>
  </section>
 </article>`;
}

function generateQuestionCounter(currentQuestion) {
  const questionCount = store.questions.length;
  return `
  <h2>Question:</h2>
  <h3>${currentQuestion + 1} of ${questionCount}</h3>`;
}

function generateQuestion(currentQuestion) {
  const question = store.questions[currentQuestion].question;
  return `
  <p> ${question} </p>`;
}

function generateAnswerListElements(item) {
  return `
  <li>
    <input name="answer" id="${item}" type="radio" value="${item}" />
    <label for="${item}">${item}</label>
  </li>`;
}

function generateAswerList(currentQuestion) {
  const answers = store.questions[currentQuestion].answers.map((item) =>
    generateAnswerListElements(item)
  );
  // Add required attribute to prevent empty submission
  answers[0] = answers[0].replace("<input", "<input required");
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
    <form id="answers" class="js-quiz-form">
      <fieldset form="answers">
        <div id="form-wrapper" class="flex">
          <legend>Your Answer:</legend>
         <ol>
           ${generateAswerList(currentQuestion)}
         </ol>
          <aside id="score-box" class="halftone">
            <h3> Score: ${generateScoreCounter()}</h3>
          </aside>
         <button type="submit" id="submit-answer" class="halftone js-submit">Submit</button>
        </div>
      </fieldset>
    </form>
  </section>
</article>`;
}

function generateAnswerConfirmationPrompt(currentQuestion, currentResult) {
  return `
  <article>
  <section id="tidbit-box" class="halftone flex">
    <h3>${currentResult ? `Correct!` : `Wrong.`}</h3>
    <p>${store.questions[currentQuestion].tidbit}<p>
  </section>
  <section id="continue-box" class="flex">
   <aside id="score-box" class="halftone flex">
     <h3> Score: ${generateScoreCounter()}</h3>
   </aside>
   <button type="button" id="next" class="halftone js-next">Next</button>
  </section>
</article>`;
}

function generateScoreMsg() {
  const scorePercent = (store.score / store.questions.length) * 100;
  const scorePercentRounded = Math.round(
    ((scorePercent + Number.EPSILON) * 100) / 100
  );
  let congratsMsg = ``;

  if (scorePercentRounded === 100) {
    congratsMsg = `Perfect! Congratulations!`;
  } else if (scorePercentRounded > 75) {
    congratsMsg = `You did great! Congratulations!`;
  } else if (scorePercentRounded > 50) {
    congratsMsg = `Pretty good! Congratulations!`;
  } else if (scorePercentRounded > 25) {
    congratsMsg = `Not bad! Give it another go!`;
  } else {
    congratsMsg = `Try it again!`;
  }

  return `
  <p> That's
  <span id="score-percent">${scorePercentRounded}%</span>.
  ${congratsMsg}
  </p>
  `;
}

function generateResultsPrompt() {
  generateScoreMsg();
  return `
  <article>
  <section id="question-box" class="halftone flex">
    <h2>Your Score was: ${generateScoreCounter()}</h2>
    ${generateScoreMsg()}
  </section>
  <section id="start-box" class="halftone flex">
    <h3>You can play again!</h3>
    <p>Restart the quiz by pressing the button below_</p>
    </section>
    <section id="restart-button-box" class="flex">
    <button type="button" id="restart" class="halftone js-restart">Start again</button>
  </section>
 </article>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuizView() {
  const quizStarted = store.quizStarted;
  const currentQuestion = store.questionNumber;
  /* 
  - The original state of 'store.quizStarted' is 'false'
  - When the user clicks the start button it is changed to 'true'
  - After each submitted question the user is prompted to click a 'next' button
  - Each time 'next' is clicked 'store.questionNumber' goes up by '1'
  - When 'store.questionNumber' (+ 1 because it starts at 0) is equal
    to the length of 'store.questions'clicking next won't add to 
    'store.questionNumber' instead it will turn 'store.quizStarted' to false 
    */
  
    // Render question prompt when quiz is started and there are questions left
  if (quizStarted && currentQuestion < store.questions.length) {
    $("main").html(generateQuestionPrompt(currentQuestion, true));
    // Render results prompt when quiz is no longer started and
    // an answer has been submitted for all questions
  } else if (!quizStarted && currentQuestion + 1 === store.questions.length) {
    $("main").html(generateResultsPrompt());
    // Else render start prompt
  } else {
    $("main").html(generateStartPrompt());
  }
}

// This function renders the result after each answer submission
function renderAnswerConfirmationView(currentQuestion, currentResult) {
  $("main").html(
    generateAnswerConfirmationPrompt(currentQuestion, currentResult)
  );
}

/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

function quizStartState(state) {
  store.quizStarted = state;
}
// When 'Start' is clicked call quizStartState 
// with true as a parameter to store that value
// Then call the renderer
function handleStartClicked() {
  $("main").on("click", ".js-start", (e) => {
    quizStartState(true);
    renderQuizView();
  });
}

function storeScoreCount() {
  store.score++;
}
// When 'Submit' is clicked check if answer is correct, 
// add to store.score if that's the case 
// and call renderConfirmationView to show the user the result
// of their answer
function handleSubmitClicked() {
  $("main").on("submit", ".js-quiz-form", function (e) {
    e.preventDefault();
    const currentQuestion = store.questionNumber;
    const correctAnswer = store.questions[currentQuestion].correctAnswer;
    // serializeArray() returns an array with the data collected by the form
    // when 'Submit' (this) is clicked. In this case the selected radio button
    // to prevent an empty submission a 'required' attribute is added to the form
    const submittedAnswer = $(this).serializeArray()[0];
    let isCorrect = false;
    // Compare the value of 'answer' to correctAnswer 
    // for the current question in store
    if (submittedAnswer.value === correctAnswer) {
      isCorrect = true;
      storeScoreCount();
      renderAnswerConfirmationView(currentQuestion, isCorrect);
    }
    renderAnswerConfirmationView(currentQuestion, isCorrect);
  });
}

function storeQuestionCount() {
  store.questionNumber++;
}
// When 'next' is clicked call storeQustionCount() to
// add one to 'store.questionNumber'
// When the user has submitted an answer to the last question
// clicking 'next' will call quizStartState with false as a parameter
// to change store.quizStarted to that value
// Then call the renderer
function handleNextClicked() {
  $("main").on("click", ".js-next", (e) => {
    const currentQuestion = store.questionNumber;
    if (currentQuestion + 1 === store.questions.length) {
      quizStartState(false);
      renderQuizView();
    } else {
      storeQuestionCount();
      renderQuizView();
    }
  });
}

function zeroValues() {
  store.score = 0;
  store.questionNumber = 0;
}
// When 'Start Again' is clicked call zeroValues()
// to reset score and questionNumber and quizStartState()
// to change store.quizStarted to true
// Then call the renderer
function handleStartAgainClicked() {
  $("main").on("click", ".js-restart", (e) => {
    zeroValues();
    quizStartState(true);
    renderQuizView();
  });
}

function handleQuizApp() {
  renderQuizView();
  handleStartClicked();
  handleSubmitClicked();
  handleNextClicked();
  handleStartAgainClicked();
}

$(handleQuizApp);
