// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let result;
    if (num%2===0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
