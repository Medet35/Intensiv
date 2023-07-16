// let catsAge = 5; //Number

// console.log("старый возраст", catsAge);

// catsAge = catsAge + 1;

// console.log("новый возраст", catsAge);

// let myName = "Medet"; //String

// //Boolean логичиский тип
// let isPositive = false;

// console.log(myName);

// let num = 10;

// if (num > 0) {
//   console.log("Ура! Число положительное!");
// }

// let btn = document.querySelector(".btn-test");

// btn.addEventListener("click", function () {
//   if (btn.innerHTML == "ON") {
//     btn.style.backgroundColor = "red";
//     btn.innerHTML = "OFF";
//   } else {
//     btn.style.backgroundColor = "green";
//     btn.innerHTML = "ON";
//   }
// });

let btn = document.querySelector(".btn-switch");
let sky = document.querySelector(".sky");
let sun = document.querySelector(".sun");

btn.addEventListener("click", function () {
  if (btn.innerHTML == "Включить Луну") {
    sky.style.backgroundImage =
      "url(https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_noch_derevo_117028_1920x1080.jpg)";
    sky.style.backgroundRepeat = "no-repeat";
    sky.style.backgroundSize = "100% 100%";

    sun.style.background = "#e3f2c2";
    btn.innerHTML = "Включить Солнце";
  } else {
    sun.style.background = "#f5e555";
    sky.style.backgroundImage = "linear-gradient(to bottom, #65a9f0, #ebb2b1)";
    btn.innerHTML = "Включить Луну";
  }
});
