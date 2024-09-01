/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
  let result = string[0].toUpperCase();

  for (let i = 1; i < string.length; i++) {
    if(string[i]!==' ') {
      result+= string[i];
    } else if(string[i]===' ') {
      result+= string[i] + string[i+1].toUpperCase()
      i++
    }
  }
  return result;
}


console.log(capitalizeWords("Hello World From JavaScript"));