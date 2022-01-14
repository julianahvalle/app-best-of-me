const questions = [
    "o que aprendi hoje?",
    "o que me deixou aborrecida? e o que você pode fazer para melhorar?",
    "o que me deixou feliz hoje?",
    "quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
    console.log(answers)
    process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    
    Bacana Ju!

    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu hoje foi:
    ${answers[1]}

    O que te deixou feliz hoje foi:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!!
    
    Volte amanhã para novas reflexões S2
    
    `)
})