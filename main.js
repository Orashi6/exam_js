// Examen JavaScript Amaliy savollar


// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

//javob

// let num = 5
// let bolingan = num % 2
// let javob =  alert(`${bolingan}`)
// console.log(bolingan);





// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini


// javobi

// let randomSon = Math.ceil(Math.random()*10)
// alert(randomSon)




// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// javob

// let yaxlit = Math.floor(12.510)
// alert(yaxlit)






/*
4-savol function

"MARS IT SCHOOL" sozini nechta harfdan iboratligini  topib va alertga chiqaring!.

с помощью  найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

Javob:Kodini yozib bering
 */

 // javob

//  let matn = 'MARS IT SCHOOL'
//  let uzunlik = matn.length
//  alert(uzunlik)



// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// Javob

// let matn = 'MARS IT SCHOOL'

// for (let i = 0; i < 10 ; i++) {
//     console.log(matn);
// }




// 6-savol
// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

//javob

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
// console.log(harflar[0] + harflar[23] + harflar[7] + harflar[11] + harflar[8] + harflar[13] + harflar[12]);





// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// Javobi

//  let savol = prompt('yosh kiriting')
//  if (savol > 18 ) {
//     console.log("Siz balog'at yoshiga yetgansiz");
//  } else if (savol < 18) {
//     console.log("siz balog'at yoshiga yetmagansiz");
    
//  } else {
//     console.log(" balog'at yoshi muborak");
    
//  }




// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// Javob

//  let savol = prompt('ismingizni kiriting')
// console.log(savol.split('').reverse().join(''));







// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering

// const body = document.querySelector('body')
// const ism = document.createElement('h1')
// const yosh = document.createElement('h1')

// body.append(ism,yosh)

// ism.style.fontSize = "70px"
// ism.style.color = 'green'
// yosh.style.fontSize = "70px"
// yosh.style.color = 'red'

// let ismi = prompt('Ismingizni kiriting')
// let yoshi = prompt('yoshingizni kiriting')

// ism.innerHTML = `Ism:${ismi}`
// yosh.innerHTML = `Yosh:${yoshi}`






// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering

//javob

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const juft = []
for (let  i = 0;  i < arr.length;  i++) {
    const e = arr[i];

    if (e % 2) {
       
    } else {
        juft.push(e) 
    }
    
}

console.log(juft, 'juft sonlar');

