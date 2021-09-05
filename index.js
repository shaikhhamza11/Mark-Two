const readLine = require('readline-sync')
const chalk = require('chalk');
let questions = [
    {
        question: "What is the main character's full name?\n",
        answer: "Light Yagami"
    },
    {
        question: "Light Yagami was the first human in the anime to obtain a death note. Which shinigami dropped the death note he found?\n",
        answer: "Ryuk"
    },
    {
        question: "What is the favorite food of Light's Shinigami, Ryuk?\n",
        answer: "Apple"
    },
    {
        question: " Who was the first detective involved in the Kira case?\n",
        answer: "L"
    },
    {
        question: "Who is second Kira?(first name)\n",
        answer: "Misa"
    },
    {
        question: "Who killed L?\n",
        answer: "Rem"
    },
    {
        question: "Who did L always call an idiot?\n",
        answer: "Matsuda"
    },
    {
        question: "Who are the two kids that grew up in Wammy's House and were competing to become L's successor?\n",
        answer: "Mello and Near"
    },
    {
        question: "What was one way a shinigami could die from?\n",
        answer: "Falling in love with a human"
    },

]
let score = 0;
const name = readLine.question(chalk.black.bold('What is your name?\n'))

//userDetails
welcome = (name) => {
    console.log(chalk.blue.bold("Welcome " + name));
    console.log("-------------")
    console.log(chalk.blue.bold("Are you exicited to play the Death Note quiz?"));

}
game = () => {
    for (let i = 0; i < questions.length; i++) {
        let currentQuestion = questions[i]
        play(currentQuestion)
    }
}
play = ({ question, answer }) => {
    let quizAnswer = readLine.question(chalk.black.bold(question))
    if (quizAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.blue.bold("Correct Answer"))
        score += 1
    }
    else {
        console.log(chalk.red.bold("Wrong answer"))
        console.log("The right answer is " + answer)
    }
    console.log("Current Score: " + score)
    console.log("-------------")


}
showScores = () => {
    console.log(chalk.blue.underline.bold("Final Score:" + score))
    let askForHighScore = readLine.question(chalk.blue.bold('Do you want to the top scorers?(Yes/No)\n'))
    if (askForHighScore.toLowerCase() === "yes") {
        let highScores = [
            {
                name: "Eren Yeager",
                score: 10,
            },

            {
                name: "Levi Ackerman",
                score: 9,
            },
        ]

        highScores.forEach((score) => console.log(chalk.blue.bold(score.name + " : " + score.score)))
        console.log(chalk.red.inverse("Check out the high scores, if you should be there ping me and I'll update it\n"));
    }
}

welcome(name)
game()
showScores()
console.log(chalk.blue.bold("Thank you for participating"))