// 1-masala. juftRaqamlarSoni(n) — musbat butun sonning nechta raqami juft ekanini aniqlash.
// Yechim: Sonni 10 ga bo'lib qoldiq olish (%) orqali har bir raqamni ajratamiz va 2 ga qoldiqsiz
// bo'linishini tekshiramiz, so'ngra Math.floor(son / 10) bilan oxirgi raqamni olib tashlaymiz.
function juftRaqamlarSoni(n) {
  let qoldiqSon = Math.abs(n);
  let juftSoni = 0;

  do {
    const oxirgiRaqam = qoldiqSon % 10;
    if (oxirgiRaqam % 2 === 0) {
      juftSoni++;
    }
    qoldiqSon = Math.floor(qoldiqSon / 10);
  } while (qoldiqSon > 0);

  return juftSoni;
}

// Tekshiruvlar
console.log("1-masala natijalari:");
console.log(juftRaqamlarSoni(248135)); // kutilgan: 3
console.log(juftRaqamlarSoni(13579));  // kutilgan: 0
console.log(juftRaqamlarSoni(102040)); // kutilgan: 5 (o'z misolim: 0 ham juft raqam)
console.log(juftRaqamlarSoni(0));      // kutilgan: 1 (chegaraviy holat: 0 soni)
