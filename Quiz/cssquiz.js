const quizData = [
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color"
    },
    {
        question: "How do you select an element with id 'header'?",
        options: ["#header", ".header", "header", "header()"],
        answer: "#header"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        answer: "font-size"
    },
    {
        question: "What is the correct CSS syntax to change the font of an element?",
        options: ["font-family: Arial;", "font: Arial;", "font-size: Arial;", "font-style: Arial;"],
        answer: "font-family: Arial;"
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


document.getElementById('next-btn').addEventListener('click', loadQuestion);
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
});


loadQuestion();
