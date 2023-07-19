import * as readline from 'readline';

const GREETING_NUMBER = 7;
const NAME_TO_COMPARE = "Вячеслав";
const GREETING_NUMBER_MESSAGE = "Привет";
const WRONG_NUMBER_MESSAGE = `Число меньше ${GREETING_NUMBER}, я не скажу ${GREETING_NUMBER_MESSAGE}`;
const GREETING_NAME_MESSAGE = `Привет, ${NAME_TO_COMPARE}`;
const WRONG_NAME_MESSAGE = "Нет такого имени";
const ARRAY_KEY = "массив";
const MULTIPLE = 3;
const ENTER_ARRAY_VALUE_MESSAGE = `Введите значения массива через пробел (например: 2 3 7 9), и я покажу числа, кратные ${MULTIPLE}`;
const SPACE = " ";

function app() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log(`Если ввести число больше ${GREETING_NUMBER}, то я скажу ${GREETING_NUMBER_MESSAGE}`);
    console.log(`Если ввести ${NAME_TO_COMPARE}, то я скажу ${GREETING_NAME_MESSAGE}`);
    console.log(`Для ввода массива введите "${ARRAY_KEY}"`);
    console.log('Для выхода нажмите ctrl + C');

    rl.on('line', input => {
        if (isNumber(input)) {
            if (parseInt(input) > GREETING_NUMBER) {
                console.log(GREETING_NUMBER_MESSAGE);
            } else {
                console.log(WRONG_NUMBER_MESSAGE);
            }
        } else if (input === ARRAY_KEY) {
            console.log(ENTER_ARRAY_VALUE_MESSAGE);
            rl.once('line', arrayInput => 
                printNumbersAreMultiples(arrayInput.split(SPACE), MULTIPLE));
        } else {
            if (input === NAME_TO_COMPARE) {
                console.log(GREETING_NAME_MESSAGE);
            } else {
                console.log(WRONG_NAME_MESSAGE);
            }
        }
    });

    rl.on('SIGINT', () => {
        console.log('Программа завершена.');
        process.exit();
    });
}

function isNumber(input) {
    return !isNaN(parseInt(input));
}

function printNumbersAreMultiples(arr, multiple) {
    console.log(`Числа кратные ${multiple}: ${arr.filter(number => number % multiple === 0).join(SPACE)}`);
}

app();