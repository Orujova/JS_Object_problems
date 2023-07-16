// ---------------Object-----------------

// let product = [
//   {
//     name: "Samsung",
//     cost: "700",
//     category: "TV",
//   },
//   {
//     name: "LENOVO",
//     cost: "800",
//     category: "computer",
//   },
//   {
//     name: "IPHONE",
//     cost: "900",
//     category: "phone",
//   },
//   {
//     name: "TOSHIBA",
//     cost: "700",
//     category: "TV",
//   },
//   {
//     name: "MACBOOK",
//     cost: "800",
//     category: "computer",
//   },
//   {
//     name: "Samsung A32",
//     cost: "900",
//     category: "phone",
//   },
// ];

// -------------Daxil olunan kateqoriyaya gore mehsullarin tapilmasi.

// let enter = prompt("enter category");
// let newarray = product.filter(function (ctg) {
//   return ctg.category == enter;
// });
// console.log(newarray);

// ------------en baha | ucuz mehsulun adi

// let max = product.sort((a, b) => b.cost - a.cost)[0].name;
// let min = product.sort((a, b) => a.cost - b.cost)[0].name;
// console.log(`en baha - ${max} en ucuz - ${min}`);

// -------------mehsullarin ucuzdan bahaya siralanmasi

// product.sort((a, b) => Number(a.cost) - Number(b.cost));
// console.log("ascending", product);

// ----------------butun mehsullarin ad kateqoriya ve qiymetlerinin siyahisi

// console.table(product);

// --------promptdan daxil edilen soze gore axtarish
// let enter = prompt("enter category");
// product.map((item) => {
//   if (item.name.includes(enter)) {
//     console.log(item.name);
//   }
// });

// --------------2 olculu massivi kicikden boyuye siralayin (sort istifade etmeden)

// function massiv(m) {
//   for (let i = 0; i < m.length; i++) {
//     for (let j = 0; j < m[i].length; j++) {
//       for (let k = 0; k < m[i].length - j - 1; k++) {
//         if (m[i][k] > m[i][k + 1]) {
//           let t = m[i][k];
//           m[i][k] = m[i][k + 1];
//           m[i][k + 1] = t;
//         }
//       }
//     }
//   }

//   for (let i = 0; i < m.length; i++) {
//     for (let j = 0; j < m[i].length; j++) document.write(m[i][j] + " ");
//     document.write("<br/>");
//   }

//   return 0;
// }

// let m = [
//   [9, 8, 7, 1],
//   [7, 3, 4, 2],
//   [9, 5, 3, 2],
//   [6, 3, 1, 2],
// ];
// massiv(m);

// -----------------04-22-1999 -> novbeti dogum gunune qalan gun saat deq saniye--------------------------

// let today = new Date();

// let myMonth = prompt("What month were you born in?");
// let myDay = prompt("What day were you born on?");
// let myYear = prompt("What year were you born in?");

// let birthday = new Date(myYear, myMonth, myDay);

// let years = today.getFullYear() - birthday.getFullYear();
// let thisYearsBirthday = new Date(today.getFullYear(), myMonth, myDay);
// letnextBirthdayYear = today.getFullYear() + 1;
// if (today < thisYearsBirthday) {
//   nextBirthdayYear = today.getFullYear();
//   years = years - 1;
// }
// let nextBirthday = new Date(nextBirthdayYear, myMonth, myDay);
// let milliseconds = nextBirthday - today;
// let seconds = Math.floor((milliseconds / 1000) % 60);
// let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
// let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
// let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
// console.log(`${days} gun ${hours} saat ${minutes} deqiqe ${seconds} saniye`);

// -------------------------04-22-1999 ->hefte ici yoxsa heftesonu.------------------------------

// let date = prompt("");
// let tarix = new Date(date);
// var dayOfWeek = tarix.getDay();
// var isWeekend = dayOfWeek === 6 || dayOfWeek === 0;
// console.log(isWeekend);
// /hefte ici false hefte sonu true verir

// ----------------//04-22-1999
//22 Nisan 1999 Persembe---------------------------

// let date = prompt("");
// let tarix = new Date(date);
// let text = tarix.toString();
// console.log(text);

// ------------------helllo------------------

// let text = prompt("enter text");
// let newtext = "";
// let newtext1 = "";
// for (let i = 0; i < text.length; i++) {
//   newtext += text.charAt(i);
//   console.log(newtext);
// }
// for (let i = text.length - 1; i >= 0; i--) {
//   newtext1 = text.slice(0, i);
//   console.log(newtext1);
// }

// ---------------------------------------

// let person = [
//   {
//     name: "Nermin",
//     yas: 25,
//     veziyet: "isli",
//     maas: 3000,
//   },
//   {
//     name: "Leyla",
//     yas: 12,
//     veziyet: "issiz",
//   },
//   {
//     name: "Punhan",
//     yas: 18,
//     veziyet: "issiz",
//   },
//   {
//     name: "Arzu",
//     yas: 70,
//     veziyet: "isli",
//     maas: 800,
//   },
//   {
//     name: "Meryem",
//     yas: 51,
//     veziyet: "issiz",
//     maas: 2500,
//   },
//   {
//     name: "Saleh",
//     yas: 25,
//     veziyet: "issiz",
//   },
//   {
//     name: "veli",
//     yas: 55,
//     veziyet: "issiz",
//     maas: 500,
//   },
// ];

// ------------------  Insanlar obyekti verilir onlarin icerisinden yasi 25 olanlari ve işləyənləri tapin----------

// let newarray = person.filter(function (a) {
//   return a.yas == 25 && a.veziyet === "isli";
// });
// console.log(newarray);

// --------------------Yasi 50+ ve maasi 700+ olanlari tapin

// let newarray = person.filter(function (a) {
//   return a.yas > 50 && a.maas > 700;
// });
// console.log(newarray);

// -----------------------Verilen insanlar icerisinden adi A ile baslayanlari tapin

// let newarray = person.filter(function (a) {
//   return a.name.charAt(0) === "A";
// });
// console.log(newarray);

// -------------------- Verilen insanlar icerisinden yaslarinin cemini tapin

// let sum = 0;
// let newarray = person.filter(function (a) {
//   return (sum += a.yas);
// });
// console.log(sum);

// --------------------------------

// let products = [
//   {
//     id: 1,
//     name: "Iphone 14",
//     colors: [2, 3],
//   },
//   {
//     id: 2,
//     name: "Samsung",
//     colors: [3],
//   },
//   {
//     id: 3,
//     name: "Xiaomi",
//     colors: [1, 3],
//   },
// ];

// let colors = [
//   {
//     id: 1,
//     name: "red",
//   },
//   {
//     id: 2,
//     name: "black",
//   },
//   {
//     id: 3,
//     name: "white",
//   },
// ];

// products.map((product) => {
//   colors.map((i) => {
//     if (product.colors.includes(i.id)) {
//       console.log(`${product.name}  | ${i.name} `);
//     }
//   });
// });

// first /////////////

// fetch(
//   "https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json"
// )
//   .then((res) => res.json())
//   .then((products) => {
//     products.map((product) => {
//       console.log(`${product.title} `);
//     });
//   });
// .catch((err) => {
//     console.error(err);
//   });

// second//////////////////

// fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON")
//   .then((res) => res.json())
//   .then((products) => {
//     products.map((product) => {
//       console.log(`${product.Title} `);
//     });
//   });

// const btn = document.getElementById("btn");
// const span = document.getElementById("span");
// let count = 1;
// let loop = true;
// btn.addEventListenersdf("click", () => {
//   span.textContent = loop ? count++ : count--;
//   if (count === 10) {
//     loop = false;
//   } else if (count === 0) {
//     loop = true;
//   }
// });
