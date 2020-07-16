"use strict";

let total = 0;

do {
  let input = prompt("Введите число");

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  input = Number(input);
  total += input;
} while (true);
