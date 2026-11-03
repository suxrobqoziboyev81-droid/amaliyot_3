// 3-masala. sozlarUzunligi(arr) — so'zlar massividagi har bir so'zning uzunligidan yangi massiv hosil qilish.
// Yechim: for...of sikli yordamida massivning har bir so'zini ko'rib chiqib, uning .length
// xossasini yangi uzunliklar massiviga push() orqali qo'shib boramiz.
function sozlarUzunligi(arr) {
  const uzunliklar = [];

  for (const soz of arr) {
    uzunliklar.push(soz.length);
  }

  return uzunliklar;
}

// Tekshiruvlar
console.log("3-masala natijalari:");
console.log(sozlarUzunligi(["veb", "html", "css"]));            // kutilgan: [3, 4, 3]
console.log(sozlarUzunligi([""]));                              // kutilgan: [0] (chegaraviy holat: bo'sh satrli massiv)
console.log(sozlarUzunligi(["dasturlash", "algoritm", "kod"])); // kutilgan: [10, 8, 3] (o'z misolim)
console.log(sozlarUzunligi([]));                                // kutilgan: [] (chegaraviy holat: bo'sh massiv)
