const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "High Text Markup Language", "None of the above"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<css>", "<script>", "<styles>"],
        answer: "<style>"
    },
    {
        question: "Which element is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<h1>", "<heading>", "<h6>", "<h2>"],
        answer: "<h1>"
    },
    {
        question: "Which HTML attribute is used to specify an alternate text for an image?",
        options: ["src", "alt", "title", "longdesc"],
        answer: "alt"
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const quizContainer = document.getElementById('quiz-container');


function loadQuestion() {
    const { question, options } = quizData[currentQuestionIndex];
    questionElement.textContent = question;

    
    optionsElement.innerHTML = '';

    // Create options dynamically
    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(option); 
        optionsElement.appendChild(optionDiv); 
    });
}


function selectOption(selectedOption) {
    if (selectedOption === quizData[currentQuestionIndex].answer) score++;
    currentQuestionIndex++;
    currentQuestionIndex < quizData.length ? loadQuestion() : showResult();
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `${score} out of ${quizData.length}`;
}

// Restart the quiz
document.getElementById('next-btn').addEventListener('click', loadQuestion);
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
});


loadQuestion();
