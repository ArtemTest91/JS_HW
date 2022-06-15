// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
let age;
function check_2(age) {
    if (!age.trim() || isNaN(age)) {
        console.log ("Введите число");
    } else if (age < 18) {
        console.log ("You don’t have access cause your age is " + age + " It’s less then");
    } else if (age>=18 && age<60) {
        console.log ("Welcome!");
    } else if (age>=60) {
        console.log ("Keep calm and look Culture channel");
    } else {
        console.log ("Technical work");
    }
    }
    check_2('2');
    check_2('slovo');
    check_2('slovo2');