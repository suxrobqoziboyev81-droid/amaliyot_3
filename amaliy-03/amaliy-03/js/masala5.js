// 5-masala. ortachagaNisbatan(arr) — massiv elementlarini o'rtacha qiymatdan kichik (past)
// va o'rtachaga teng yoki katta (yuqori) guruhlarga ajratib obyekt qaytarish.
// Yechim: Avval barcha sonlar yig'indisini topib, massiv uzunligiga bo'lib o'rtacha qiymatni
// hisoblaymiz, keyin ikkinchi siklda elementlarni solishtirib past va yuqori massivlariga joylaymiz.
function ortachagaNisbatan(arr) {
  const past = [];
  const yuqori = [];

  if (arr.length === 0) {
    return { past, yuqori };
  }

  let yigindi = 0;
  for (const son of arr) {
    yigindi += son;
  }

  const ortacha = yigindi / arr.length;

  for (const son of arr) {
    if (son < ortacha) {
      past.push(son);
    } else {
      yuqori.push(son);
    }
  }

  return { past, yuqori };
}

// Tekshiruvlar
console.log("5-masala natijalari:");
console.log(ortachagaNisbatan([4, 10, 6, 2, 8]));    // kutilgan: { past: [4, 2], yuqori: [10, 6, 8] }
console.log(ortachagaNisbatan([-10, 0, 10, 20]));    // kutilgan: { past: [-10, 0], yuqori: [10, 20] } (o'z misolim)
console.log(ortachagaNisbatan([7]));                 // kutilgan: { past: [], yuqori: [7] } (chegaraviy holat: bitta element)
console.log(ortachagaNisbatan([]));                  // kutilgan: { past: [], yuqori: [] } (chegaraviy holat: bo'sh massiv)
