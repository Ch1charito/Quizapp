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

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {                                          // wir schreiben eine bedinungen das solange die neuen fragen angezeigt werden wie es welche gibt und sobald es keine weiteren fragen mehr gibt wollen wir einen END Screen
        document.getElementById('endScreen').style = "";                                // wir greifen wieder auf die id zu und geben über style das inline style welches wir im html gemacht haben den wert"" was so viel heißt wie leer, wir nehmen also display non weg
        document.getElementById('questionBody').style ="display: none";                 // dieser id fügen wir über das inline style das style attribut disyplay none hinzu --> das heißt sobald das quiz beendet ist verschwinder der frage body und ein neuer body wird angezeigt
        
        document.getElementById('amount-of-questions').innerHTML = questions.length;    // wir greifen über das innerHtml zu und verändern den wert zu der gesamten länge unseres arrays
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;  // wir fügen die Variable die wir standardmäßig auf 0 gesetzt haben als wert ein --> wir müssen natürlich noch dafür sorgen das der Wert im bezug zu den richtig beantworteten fragen steht
        document.getElementById('header-img').src = './img/trophy.png';                   // wir ändern das bild im endscreen

    } else {
        // wir müssen auf currentQuestion + 1 draufrechnen weil wir ja sonst bei 0 starten und nicht bei der ersten Frage
        let percent = (currentQuestion + 1) / questions.length;                          // eine abfrage bei welcher frage wir sind also die aktuelle frage geteilt durch die gesamte länge der fragen
        percent = Math.round(percent * 100);                                            // da wir ja prozent nicht in 0, zahlen angezigt haben wollen sondern anstatt 0,2 zb 20 müssen wir den wert von percent mal 100 nehmen, ---> wenn wir ein ungerades ergebnis haben können wir durch Math.round(das Ergebnis), das Ergebnis so abrunden das wir keine nachkomma stellen haben
        document.getElementById('progress-bar').innerHTML = `${percent} %`;             // wir setzten den ermittelten wert über innerHTMl bei der id in der Progressbar ein
        document.getElementById('progress-bar').style = `width: ${percent}%`;           // wir ändern das style in der progressbar zu dem prozent wert den wir errechnet haben
        

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;  // wir greifen auf das element zu wo wir sagen bei welcher frage wir sind und geben das durch unsere variable wieder, da wir aber beim index 0 sind müssen wir + 1, machen damit es auch bei der ersten Frage anfängt
    
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
    
}



function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);               // in der variable wird der letzter buchstabe aus der variablen selection gespeichert (slice(-1) ist eine Methode mit der man sich den letzten Wert von einem string ausgeben lassen kann)
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('richtige antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');      // wir greifen durch selection und durch parent.Node auf das Element zu wenn das elemnt richtig ist wird die class bg success hinzugeüfgt und es wird grün angezeigt
        rightQuestions++;                                                               // sobald wir die frage richtig beantwortet haben erhöt sich der wert unserer variable den für den Endscreen brauchen
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


function restartGame() {                                                                // eine function mit der ich das game wieder neu starten kann
    document.getElementById('header-img').src = './img/card-background.jpg';            // wir ändern das Bild wieder zurück zum card-background
    document.getElementById('questionBody').style ="";                                  // question body wieder anzeigen lassen
    document.getElementById('endScreen').style ="display: none";                        // endscreen ausblenden 
    rightQuestions = 0;                                                                 // wir ändern die variable deswegen brauchen wir kein let und setzen die anzahl der richtigen und current questions wieder auf den anfangswert
    currentQuestion = 0;
    init();
}
