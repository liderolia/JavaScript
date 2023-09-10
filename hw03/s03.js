/*Задание 1
Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/

console.log('Задание 1');
function cube(number) {
        return Math.pow(number, 3)
    }
console.log(cube(2) + cube(3)); //35

/*Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, 
необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит 
в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/

console.log('');
console.log('Задание 2');
function salary() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        alert('Значение задано неверно!');
        salary();
    } else {       
        console.log(`Размер заработной платы за вычетом налогов равен ${number * 0.87}`);
    }
}
salary();

/*Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
которая определяет максимальное значение среди этих чисел*/
console.log('');
console.log('Задание 3');
let numArray = [];
numArray[0] = prompt('Введите 1 число');
numArray[1] = prompt('Введите 2 число');
numArray[2] = prompt('Введите 3 число');
function maxValue(numArray) {
    return Math.max.apply(null, numArray)
}
console.log(`Максимальное значение: ${maxValue(numArray)}`);


/*Задание 4.
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа 
и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/
console.log('');
console.log('Задание 4');
console.log ('Сложение:');
function addition(a, b) {
    return (`${a} + ${b} = ${a + b}`)
}
console.log(addition(2, 10));

console.log ('Разность:');
function subtraction(a, b) {
    return (a >= b)? `${a} - ${b} = ${a - b}` : `${b} - ${a} = ${b - a}`;
}
console.log(subtraction(2, 10));
console.log(subtraction(10, 10));
console.log(subtraction(10, 2));

console.log ('Умножение:');
function multiplication(a, b) {
    return (`${a} * ${b} = ${a * b}`)
}
console.log(multiplication(10, 2));

console.log ('Деление:');
function division(a, b) {
    return (b !== 0)? (a >= b)? `${a} / ${b} = ${a / b}` : `${b} / ${a} = ${b / a}` : `На ${b} делить нельзя!`;
} //вариант с использованием условного (тернарного) оператора 

// function division(a, b) {
//     if (b !== 0) {
//         if (a >= b) {
//             return `${a} / ${b} = ${a / b}`
//         }
//         else {
//             return `${b} / ${a} = ${b / a}`
//         }
//     }
//     else {
//         return `На ${b} делить нельзя!`
//     }   
// }

console.log(division(10, 2));
console.log(division(2, 10));
console.log(division(10, 0)); //если не прописывать условаие, то результатом деления на 0 будет "Infinity". Прописала условие для вывода сообщения