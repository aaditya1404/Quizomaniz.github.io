const questions = [
    {

        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'HTTP',
        'c': 'LOGO',
        'd': 'SQL',
        'correct': 'a'
    },
    {

        'que': 'What is year was javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {

        'que': 'What does css stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading style sheets',
        'c': 'Jason object notation',
        'd': 'none of the above',
        'correct': 'a'
    }
];

let index = 0;
let total = questions.length;
let right = 0 , wrong =0;  
const quesBox =  document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if(index === total){
        return end();
    }
    reset();
    const data = questions[index]
    // console.log(data)
    quesBox.innerText=`${index+1}.${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz =()=>{
    const data = questions[index];
    const ans = getAns()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAns = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const end = () =>{
    document.getElementById("box").innerHTML = `
    <h3> Thank you </h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}


loadQuestion();