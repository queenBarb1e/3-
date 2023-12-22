var N = parseFloat(prompt("Введите значение N (больше одного): "));
console.log("Введите значение N (больше одного):  " + N);

// Проверка, что N больше одного
if (N <= 1 || isNaN(N)) {
  console.log("FALSE");
} else {
  // Запрос ввода набора из N чисел
  var numbers = [];
  for (var i = 0; i < N; i++) {
    var num = parseFloat(prompt("Введите число " + (i + 1) + ":  "));
    console.log("Введите число " + (i + 1) + ":  " + num);
    numbers.push(num);
  }

  // Проверка, является ли набор чисел возрастающей последовательностью
  var isIncreasing = true;
  for (var i = 1; i < N; i++) {
    if (numbers[i] <= numbers[i - 1]) {
      isIncreasing = false;
      break;
    }
  }

  // Вывод результата
  if (isIncreasing) {
    console.log("TRUE");
  } else {
    console.log("FALSE");
  }
}