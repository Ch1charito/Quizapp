let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3  
    },
    {
        "question": "Wer ist kein Musiker?",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Lady Gaga",
        "answer_4": "Justin Bieber",
        "right_answer": 2
    },
    {
        "question": "Was ist eine Programmier-Sprache?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "Javascript",
        "answer_4": "Spanisch",
        "right_answer": 3
    },
    {
        "question": "Wer ist über 50 Jahre alt?",
        "answer_1": "Manuel Neuer",
        "answer_2": "Luciano",
        "answer_3": "Arjen Robben",
        "answer_4": "Robbie Williams",
        "right_answer": 4
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}



function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);               // in der variable wird der letzter buchstabe aus der variablen selection gespeichert (slice(-1) ist eine Methode mit der man sich den letzten Wert von einem string ausgeben lassen kann)
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('richtige antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');      // wir greifen durch selection und durch parent.Node auf das Element zu wenn das elemnt richtig ist wird die class bg success hinzugeüfgt und es wird grün angezeigt
    } else {
        console.log('falsche antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');       // das selbe nur das wenn es flasch ist halt die class für falsch hinzugefügt wird und somit wird es rot angezeigt
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    
    document.getElementById('next-button').disabled = false;                            // durch disabled = false gebgen wir den button am ende dieser function frei und ist also benutzbar
    
}