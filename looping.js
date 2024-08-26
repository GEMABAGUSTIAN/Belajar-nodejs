// dalam perulangan itu ada 2 sintaks dimana for dan while

// contoh while loop pertambahan/kekanan
// let i = 0;
// while (i < 5){
//     console.log(i)
//     i++
// }

// contoh while loop pengurangan/kekiri
// let i = 5;
// while (i >= 0){
//     console.log(i)
//     i--
// }

// contoh infinite loop itu karena kita salah melooping yang seharusnya penjumlahan malah pengurangan dan sebaliknya
// let i = 5;
// while (i >= 0){
//     console.log(i)
//     i++
// }

// contoh for loop
// for (let i = 0; i < 5; i++){
//     console.log(i)
// }
// Sama seperti while namun for bisa langsung di bungkus, heheh bhungkus bang

// let name = "Gema";

// for (let i = 0; i < name.length; i++){
//     console.log(name[i])
// }

// ada yg namanya length method untuk tipe data string dan array
// ada yg namanya indexing dimana index itu berawal dari 0

// contoh mengambil nilai dengan indexing
// console.log (name[0] + name[3])


// contoh kasus untuk membalikan kata tanpa menggunakan method reverse
// let name = "0xGema";
// let result = "";

// for (let i = name.length - 1; i >=0; i--){
//     result += name[i];
// }
// console.log(result)

// contoh nested loop
for ( let i = 0; i <= 5; i++){
    for (let j = 0; j <= i; j++){
        console.log(j)
    }
    console.log('')
}
console.log('selesai')

