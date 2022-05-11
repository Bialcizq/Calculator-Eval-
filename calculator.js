const buttonValues = document.querySelectorAll('.button')

const firstScreenResult = document.querySelector('.firstScreen');
const secondScreenResult = document.querySelector('.secondScreen');

const operation = [];
let fontSize = 35;

buttonValues.forEach(button=>{
    button.addEventListener('click', ()=> {

        const cantBeFirst = ['*', '/', '=', '.', '+'];
        const cantBeNextTo = ['+', '-', '*', '/', '.', '=']

        if (cantBeNextTo.includes(button.textContent) && cantBeNextTo.includes(operation[operation.length - 1])) {
            operation[operation.length - 1] = button.textContent;
        } else {
            operation.push(button.textContent)
            console.log(operation, 'tablicaDziałania');
        }

        firstScreenResult.textContent = operation.join('');
        console.log(firstScreenResult);

        if (cantBeFirst.includes(operation[0])) {
            operation.splice(0, operation.length);
            firstScreenResult.textContent = '';
        }

        if (button.textContent === 'DEL') {
            operation.splice(operation.length - 2, 2)
            firstScreenResult.textContent = operation.join('');
            console.log(firstScreenResult, 'tablicaPoDelu');
        } 

        if (button.textContent === '=') {
            const operationToDo = operation.splice(0, operation.length - 1)
            console.log(operationToDo, 'tablicaBez=');
            let result = eval(operationToDo.join(''));
            secondScreenResult.textContent = result;
            console.log(result);
        } 
        
        if (button.textContent === 'C') {
            fontSize = 35;
            firstScreenResult.style.fontSize = fontSize + 'px';
            operation.splice(0, operation.length);
            firstScreenResult.textContent = '';
            secondScreenResult.textContent = '';
            console.log(operation, 'tablicaPoClear')
        }

        if (operation.length > 1 && (operation.length) % 15 === 0) {
            fontSize = fontSize * 0.8;
            firstScreenResult.style.fontSize = fontSize + 'px';
        }

        // if (button.textContent === 'DEL') {
        //     console.log(operation, 'tablicaPrzezSplice')
        //     operation.splice(0, operation -2);
        //     console.log(operation, 'tablicaPoSplice');
        //     firstScreenResult.textContent = operation.join('');
        // }

    })})
        