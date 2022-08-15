let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
let defoltMin = -999;
let defoltMax = 999;

minValue = (minValue < -1000) ?
minValue = defoltMin:
minValue = minValue;

maxValue = (maxValue > 1000) ?
maxValue = defoltMax:
maxValue = maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumberField.innerText = 1;
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    
    minValue = (minValue < -1000) ?
    minValue = defoltMin:
    minValue = minValue;

    maxValue = (maxValue > 1000) ?
    maxValue = defoltMax:
    maxValue = maxValue;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    gameRun = true;
    //minValue = 0;
    //maxValue = 0;
    //orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}`:
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            const questionRandom = Math.round( Math.random() * 3);
            answerField.innerText = (questionRandom === 1) ?
                 `Ахалай-Махалай это число ${answerNumber}? \n\u{1F9D9}`:
            answerField.innerText = (questionRandom === 2) ?
                 `Я понял... Это число ${answerNumber}! \n\u{1F44A}`:
                 `Я понял... Это число ${answerNumber}! \n\u{1F44A}`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}`:
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            const questionRandom = Math.round( Math.random() * 3);
            answerField.innerText = (questionRandom === 1) ?
                 `Возможно это число ${answerNumber}? \n\u{1F914}`:
            answerField.innerText = (questionRandom === 2) ?
                 `Тогда это число ${answerNumber}! \n\u{1F63C}`:
                 `Или может ${answerNumber}? \n\u{1F640}`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const endRandom = Math.round(Math.random() * 3);
        endPhrase = (endRandom === 1) ?
            `Я сегодня на коне!\n\u{1F918}`:
        endPhrase = (endRandom === 2) ? 
            `Я был создан для этого!\n\u{1F643}`:
            `Я мастер ментализама!\n\u{1F60E}\n\u{1F9D9}`;
        
    answerField.innerText = endPhrase;
    gameRun = false;
    
}

})
