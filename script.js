const adviceId = document.getElementById('advice-num'),
diceBtn = document.querySelector('.dice-container'),
advice = document.querySelector('.txt');

async function getAdvice(){
    const data = await fetch('https://api.adviceslip.com/advice');
    const result  = await data.json();
    adviceId.textContent = '#'+ result.slip.id;
    advice.textContent=result.slip.advice;
}

getAdvice();

diceBtn.addEventListener('click', getAdvice);
