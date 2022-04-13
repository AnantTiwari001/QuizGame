console.log('Its inside the quiz javascript file');
let website= 'https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple';

let question=document.getElementById('question');
let a= document.getElementById('A');
let b= document.getElementById('B');
let c= document.getElementById('C');
let d= document.getElementById('D');
let container= document.getElementById('show');

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
    setTimeout(
        start(), 1000
    )
}
function rough() {
    console.log('hi boys it is good rough')
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
    question.textContent=array.results[0].question;
    int=Math.floor(Math.random()*4);
    arrayItem[int].textContent+=array.results[0].correct_answer;
    correctAnswer= arrayItem.splice(int,1);
    correctAnswer[0].setAttribute('data-bs-target', '#exampleModal');   //data-bs-target="#exampleModal"
    for (let i = 0; i < arrayItem.length; i++) {
        arrayItem[i].textContent+=array.results[0].incorrect_answers[i];
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


// df8aa604d4a0f947a75a4fe0a101322195d754a18b6a213e982b754ef428215a  ---yourToken
