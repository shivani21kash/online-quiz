const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;

document.getElementById("calculateScore").addEventListener("click", calculateScore);

function calculateScore() {
    const questions = document.getElementsByClassName("question");
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const options = questions[i].querySelectorAll("input[type=radio]");

        for (let j = 0; j < options.length; j++) {
            if (options[j].checked && options[j].value === "correct") {
                score++;
                break; // Break the loop once an option is checked
            }
        }
    }

    document.getElementById("score").textContent = score;
}























const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false }
        ]
    },
    {
        question: 'what is 4*3?',
        answers: [
            { text: '12', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '8', correct: false }
        ]
    },






    // Add more questions here
];

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    // Check if the selected answer is correct
    const correct = answer.correct;
    if (correct) {
        // Add your scoring or feedback logic here
    }
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        // Quiz is finished, you can show a summary or result
    }
}

nextButton.addEventListener('click', nextQuestion);

// Start the quiz
showQuestion(questions[currentQuestionIndex]);
