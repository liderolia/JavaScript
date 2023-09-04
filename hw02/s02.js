/*Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.*/

console.log('Задание 1');
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
(num1 <= 1)? console.log(`Число ${num1} меньше или равно 1`) : console.log(`Число ${num1} больше 1`);
(num2 >= 3)? console.log(`Число ${num2} больше или равно 3`) : console.log(`Число ${num2} меньше 3`);

/*Задание 2
Перепишите код к тернарному оператору

let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}*/
console.log('');
console.log('Задание 2');
let test = true;
(test === true) ? console.log('+++') : console.log('---');

/*Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31.
Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
console.log('');
console.log('Задание 3');
let day = prompt("Введите дату от 1 до 31 ")

if (day <= 10) {
    console.log(`${day} день относится к первой декаде`);
}
else if (day <= 20) {
    console.log(`${day} день относится ко второй декаде`);
}
else {
    console.log(`${day} день относится к третьей декаде`);
}

/*Задание 4.
*/
console.log('');
console.log('Задание 4');
let number = prompt("Введите положительное целое число");
let units = number % 10;
let tens = ~~(number % 100 / 10);
let hundreds = ~~(number % 1000 / 100);
console.log(`Число ${number} состоит из: 
разряда сотен: ${hundreds} 
разряда десятков: ${tens}
разряда единиц: ${units}`);
