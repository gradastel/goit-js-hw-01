"use strict";

const total = 100;
const ordered = 50;
//const ordered = 20;
//const ordered = 80;
//const ordered = 130;
const canOrder = ordered < total;

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
}
if (ordered === 0) {
  console.log("Неккоректное выражение");
} else if (canOrder === true) {
  console.log("Заказ оформлен, с вами свяжется менеджер.");
}

// if (ordered > total) {
//   console.log("На складе недостаточно товаров!");
// }
// else {
//   console.log("Заказ оформлен, с вами свяжется менеджер.");
// }
//"Заказ оформлен, с вами свяжется менеджер."
//"На складе недостаточно товаров!"
