console.log('Its inside the quiz javascript file');
let website= 'https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple&token=df8aa604d4a0f947a75a4fe0a101322195d754a18b6a213e982b754ef428215a';

let question=document.getElementById('question');
let a= document.getElementById('A')
let b= document.getElementById('B')
let c= document.getElementById('C')
let d= document.getElementById('D')

var ab;

a.addEventListener('click', ()=> check(a))
b.addEventListener('click', ()=> check(b))
c.addEventListener('click', ()=> check(c))
d.addEventListener('click', ()=> check(d))

let array;
let arrayItem=[a,b,c,d];


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




function getQuestion() {
    question.textContent=array.results[0].question;
    let int=Math.floor(Math.random()*4);
    arrayItem[int].textContent+=array.results[0].correct_answer;
    arrayItem.splice(int,1);
    for (let i = 0; i < arrayItem.length; i++) {
        arrayItem[i].textContent+=array.results[0].incorrect_answers[i];
    }
}

function check(element) {
    console.log(element, 'from the check function');
    ab= element;
    if (element.textContent=== element.id+':'+array.results[0].correct_answer) {
        alert('you are right bro oh yo')
    }
} 


// df8aa604d4a0f947a75a4fe0a101322195d754a18b6a213e982b754ef428215a  ---yourToken
