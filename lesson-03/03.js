// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    let result;
    if (num1>=num2 && num1>=num3) {
        result = num1;
    } else if (num2>=num1 && num2>=num3) {
        result = num2;
    } else if (num3>=num1 && num3>=num2) {
        result = num3;
    }
    return result;
}
