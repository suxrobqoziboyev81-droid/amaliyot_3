// 2-masala. sozlarSoni(s) — berilgan gapdagi so'zlar sonini hisoblash.
// Yechim: Satr bo'ylab sikl aylanib, joriy belgi bo'sh joy bo'lmasa va undan oldingi belgi
// bo'sh joy bo'lsa (yoki satr boshi bo'lsa), yangi so'z boshlanganini aniqlab sanagichni oshiramiz.
function sozlarSoni(s) {
  let sanagich = 0;
  let sozIchidami = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (!sozIchidami) {
        sanagich++;
        sozIchidami = true;
      }
    } else {
      sozIchidami = false;
    }
  }

  return sanagich;
}

// Tekshiruvlar
console.log("2-masala natijalari:");
console.log(sozlarSoni("  Salom   veb   dunyo ")); // kutilgan: 3
console.log(sozlarSoni(""));                       // kutilgan: 0 (chegaraviy holat: bo'sh satr)
console.log(sozlarSoni("Urganch davlat universiteti Dasturiy injiniring")); // kutilgan: 5 (o'z misolim)
console.log(sozlarSoni("     "));                  // kutilgan: 0 (chegaraviy holat: faqat bo'sh joylar)
