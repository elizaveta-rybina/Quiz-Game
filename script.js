import { quizQuestions } from './data.js'
// DOM Elements

// Variables for Screens
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')

// Variables for Start Screen
const startButton = document.getElementById('start-btn')

// Variables for Quiz Screen
const questionText = document.getElementById('question-text')
const answersContainer = document.getElementById('answers-container')
const currentQuestionElement = document.getElementById('current-question')
const totalQuestionsElement = document.getElementById('total-question')
const scoreElement = document.getElementById('score')
const progressBar = document.getElementById('progress')

// Variables for Result Screen
const finalScoreElement = document.getElementById('final-score')
const maxScoreElement = document.getElementById('max-score')
const resultMessageElement = document.getElementById('result-message')
const restartButton = document.getElementById('restart-btn')

// Quiz State Variables
let currentQuestionIndex = 0
let score = 0
let answersDisabled = false

totalQuestionsElement.textContent = quizQuestions.length
maxScoreElement.textContent = quizQuestions.length

// Event Listeners
startButton.addEventListener('click', startQuiz)
restartButton.addEventListener('click', restartQuiz)

function startQuiz() {
	currentQuestionIndex = 0
	scoreElement.textContent = 0
	score = 0
	startScreen.classList.remove('active')
	quizScreen.classList.add('active')

	showQuestion()
}

function restartQuiz() {
	resultScreen.classList.remove('active')

	startQuiz()
}

function showQuestion() {
	// reset state
	answersDisabled = false
	const currentQuestion = quizQuestions[currentQuestionIndex]
	currentQuestionElement.textContent = currentQuestionIndex + 1

	const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100
	progressBar.style.width = `${progressPercent}%`

	questionText.textContent = currentQuestion.question

	answersContainer.innerHTML = ''
	currentQuestion.answers.forEach(answer => {
		const button = document.createElement('button')
		button.textContent = answer.text
		button.classList.add('answer-btn')
		button.dataset.correct = answer.correct

		button.addEventListener('click', selectAnswer)
		answersContainer.appendChild(button)
	})
}

function selectAnswer(event) {
	// optimization check
	if (answersDisabled) return
	answersDisabled = true

	const selectedButton = event.target
	const isCorrect = selectedButton.dataset.correct === 'true'

	Array.from(answersContainer.children).forEach(button => {
		if (button.dataset.correct === 'true') {
			button.classList.add('correct')
		} else if (button === selectedButton) {
			button.classList.add('incorrect')
		}
	})

	if (isCorrect) {
		score++
		scoreElement.textContent = score
	}

	setTimeout(() => {
		currentQuestionIndex++
		if (currentQuestionIndex < quizQuestions.length) {
			showQuestion()
		} else {
			showResults()
		}
	}, 1000)
}

function showResults() {
	quizScreen.classList.remove('active')
	resultScreen.classList.add('active')

	finalScoreElement.textContent = score

	const percentage = (score / quizQuestions.length) * 100

	if (percentage === 100) {
		resultMessageElement.textContent = 'Perfect! You are a genius!'
	} else if (percentage >= 80) {
		resultMessageElement.textContent = 'Great job! You know your stuff!'
	} else if (percentage >= 60) {
		resultMessageElement.textContent = 'Good effort! Keep learning!'
	} else if (percentage >= 40) {
		resultMessageElement.textContent = 'Not bad! Try again to improve!'
	} else {
		resultMessageElement.textContent = 'Keep studying! You will get better!'
	}
}
