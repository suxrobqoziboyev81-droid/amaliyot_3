// 4-masala. rimRaqamiga(n) — 1 dan 3999 gacha bo'lgan butun sonni Rim raqamiga aylantirish.
// Yechim: Rim raqamlari va ularning qiymatlarini kamayish tartibida massivda saqlaymiz.
// Sikl orqali son joriy qiymatdan katta yoki teng bo'lsa, mos Rim belgisini natijaga qo'shib, sondan ayiramiz.
function rimRaqamiga(n) {
  const rimJadvali = [
    { qiymat: 1000, belgi: "M" },
    { qiymat: 900, belgi: "CM" },
    { qiymat: 500, belgi: "D" },
    { qiymat: 400, belgi: "CD" },
    { qiymat: 100, belgi: "C" },
    { qiymat: 90, belgi: "XC" },
    { qiymat: 50, belgi: "L" },
    { qiymat: 40, belgi: "XL" },
    { qiymat: 10, belgi: "X" },
    { qiymat: 9, belgi: "IX" },
    { qiymat: 5, belgi: "V" },
    { qiymat: 4, belgi: "IV" },
    { qiymat: 1, belgi: "I" }
  ];

  let qoldiq = n;
  let rimSatri = "";

  for (const element of rimJadvali) {
    while (qoldiq >= element.qiymat) {
      rimSatri += element.belgi;
      qoldiq -= element.qiymat;
    }
  }

  return rimSatri;
}

// Tekshiruvlar
console.log("4-masala natijalari:");
console.log(rimRaqamiga(1994)); // kutilgan: "MCMXCIV"
console.log(rimRaqamiga(2026)); // kutilgan: "MMXXVI"
console.log(rimRaqamiga(444));  // kutilgan: "CDXLIV" (o'z misolim)
console.log(rimRaqamiga(1));    // kutilgan: "I" (chegaraviy holat: eng kichik qiymat)
console.log(rimRaqamiga(3999)); // kutilgan: "MMMCMXCIX" (chegaraviy holat: eng katta qiymat)
