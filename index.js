
const quizDB = [
    {
        question: "Q1. Which one of the following river flows between Vindhyan and Satpura ranges?",
        a: "Narmada",
        b: "Mahanadi",
        c: "Son",
        d: "Netravati",
        ans: "ans1"
    },
    {
        question: "Q2. The Central Rice Research Station is situated in?",
        a: " Chennai",
        b: "Cuttack",
        c: "Bangalore",
        d: "Quilon",
        ans: "ans2"
    },
    {
        question: "Q3. Which among the following headstreams meets the Ganges in last?",
        a: " Alaknanda",
        b: "Pindar",
        c: "Mandakini",
        d: " Bhagirathi",
        ans: "ans4"
    },
    {
        question: "Q4. Patanjali is well known for the compilation of –",
        a: "Yoga Sutra",
        b: "Panchatantra",
        c: "Brahma Sutra",
        d: "Ayurveda",
        ans: "ans1"
    },
];



const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');


let questionCount = 0;


const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;



    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();






let score = 0;
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


const getCheckAnswer = (curAnsElem) => {
    let answer;

    answers.forEach(() => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}




const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    })
}






submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);






    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };


     questionCount++;   //effect on  underline

     deselectAll();
    if(questionCount< quizDB.length){
        loadQuestion();
    }
    else {
        showScore.innerText =`
            <h3> You Scored ${score}/${quizDB.length} </h3>
            <button class="btn onclick="location.reload"> </button>
            `;
            showScore.classlist.remove('scoreArea');
    }
})



