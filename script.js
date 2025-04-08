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


function nextQuestion() {               // eine function in der wir bestimmen was passiert sobald wir auf den Button nächste Frage drücken
    currentQuestion++;                  // die variable wird von 0 auf 1 erhöht so gehen wir in den nächsten JSON
    resetAnswerButton();                // die function um die farben zu entfernen
    showQuestion();                     // danach führen wir die function aus mit der wir uns unsere Fragen anzeigen lassen nun aber mit der geänderten variable also aus dem anderen JSON
    document.getElementById('next-button').disabled = true;  // wir machen nach dem laden der neuen Fragen den button wieder unbenutzbar, sodass man zuerst wieder die Frage beantworten muss um zur nächsten Frage zu gelangen
    

}


function resetAnswerButton() {                                                          // man könnte es rein thereotisch auch in die function nextqustion mit rein nehmen,  aber damit alles übersichtlicher bleibt lagern wir das ganze einfach aus
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');       // wir entfernen allen Elementen wieder die classen bg_danger und bg_success damit sie leer angezegit werden und man nicht weiß welche richtig und welche flasch ist
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
