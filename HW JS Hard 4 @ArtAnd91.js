let age = prompt ('Сколько тебе лет?', 18);
function check_3(age) {
    if (!age.trim() || isNaN(age)) {
        alert ("Введите число");
    } else if (age < 18) {
        alert ("You don’t have access cause your age is " + age + " It’s less then");
    } else if (age>=60) {
        alert ("Keep calm and look Culture channel");
    } else if (age>=18 && age<60) {
        alert ("Welcome!");
    } else {
        alert ("Technical work");
    }
    }
    check_3(age);