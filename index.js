// implementation of different categories of quiz and images with a little touch up
let testing;
let difficulty= 'easy';
console.log('Its inside the quiz javascript file');
let website= `https://opentdb.com/api.php?amount=1&category=17&difficulty=${difficulty}&type=multiple`;
let question=document.getElementById('question');
let a= document.getElementById('A');
let b= document.getElementById('B');
let c= document.getElementById('C');
let d= document.getElementById('D');
let container= document.getElementById('show');
let modeCon= document.getElementById('modey');

var ab;
var int
var correctAnswer;

function startIt() {
    console.log('the restart of the game');
    console.log('inside the set timeout of restart');
    question.textContent='question'
    a.textContent='A:'
    b.textContent='B:'
    c.textContent='C:'
    d.textContent='D:'
    a.style.backgroundColor='#24a0ed'
    b.style.backgroundColor='#24a0ed'
    c.style.backgroundColor='#24a0ed'
    d.style.backgroundColor='#24a0ed'
    arrayItem=[a, b, c, d]
    correctAnswer[0].removeAttribute('data-bs-target');

    setTimeout(
        start(), 1000
    )
}
function rough() {
    console.log('hi boys it is good rough');
    testing='yo yo and it stores the thing on mutual script'
}

document.onload= start()

a.addEventListener('click', ()=> check(a))
b.addEventListener('click', ()=> check(b))
c.addEventListener('click', ()=> check(c))
d.addEventListener('click', ()=> check(d))

let array;
var arrayItem=[a,b,c,d];

function start() {
    console.log('the game has started')
    website= `https://opentdb.com/api.php?amount=1&category=17&difficulty=${difficulty}&type=multiple`;
    if (window.location.href.search(/quizPolitics.html/)>0){
        website= `https://opentdb.com/api.php?amount=1&category=24&difficulty=${difficulty}&type=multiple`;
    }else if (window.location.href.search(/quizMythology.html/)>0){
        website= `https://opentdb.com/api.php?amount=1&category=20&difficulty=${difficulty}&type=multiple`;
    }else if (window.location.href.search(/quizGeography.html/)>0){
        website= `https://opentdb.com/api.php?amount=1&category=22&difficulty=${difficulty}&type=multiple`;
    }else if (window.location.href.search(/quizSport.html/)>0){
        website= `https://opentdb.com/api.php?amount=1&category=21&difficulty=${difficulty}&type=multiple`;
    }else if (window.location.href.search(/quizHistory.html/)>0){
        website= `https://opentdb.com/api.php?amount=1&category=23&difficulty=${difficulty}&type=multiple`;
    }else if (window.location.href.search(/quizStart.html/)>0){
        website= `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple`;
    }
    fetch(website)
    .then((result) => {
        console.log('We have retrived the quiz data');
        console.log(result);
            result.json()
            .then(data=> {
                array= data;
                console.log('the array of the data retrived from the quiz api is',array);
                getQuestion();
            })
        }).catch((err) => {
            console.log(err);
            alert('Some error occured see console for more information');
        });
        
        
    }


function getQuestion() {
    question.innerHTML=array.results[0].question;
    int=Math.floor(Math.random()*4);
    arrayItem[int].innerHTML+=array.results[0].correct_answer;
    correctAnswer= arrayItem.splice(int,1);
    correctAnswer[0].setAttribute('data-bs-target', '#exampleModal');   //data-bs-target="#exampleModal"
    for (let i = 0; i < arrayItem.length; i++) {
        arrayItem[i].innerHTML+=array.results[0].incorrect_answers[i];
    }
}

function check(element) {
    console.log(element, 'from the check function');
    ab= element;
    correctAnswer[0].style.backgroundColor= 'green'
    if (element.textContent=== element.id+':'+array.results[0].correct_answer) {
        // alert('you are right bro oh yo');

    }else{
        ab.style.backgroundColor= 'red';
    }
} 

function mode() {
    if (modeCon.value==1) {
        modeCon.style.backgroundColor='#42ba96';
        console.log('It is easy')
        difficulty='easy';
        startIt();
    }
    if (modeCon.value==2) {
        modeCon.style.backgroundColor='#e0e01f';
        console.log('It is medium')
        difficulty='medium';
        startIt();
    }
    if (modeCon.value==3) {
        modeCon.style.backgroundColor='red';
        console.log('Its is hard')
        difficulty='hard';
        startIt();
    }
}

// df8aa604d4a0f947a75a4fe0a101322195d754a18b6a213e982b754ef428215a  ---yourToken
