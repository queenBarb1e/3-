var n = parseInt(prompt("Введите целое число N (>0):"));
console.log("Введите целое число N (>0): " + n);
var sum = 0;
var factorial = 1;
for (var i = 1; i <= n; i++) {
    factorial *= i;
    sum += factorial;
}
console.log("Сумма факториалов от 1! до", n + "!", "равна:", sum);