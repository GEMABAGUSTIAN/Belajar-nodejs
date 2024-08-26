function tambahangka(angka1, angka2) {
    return angka1 + angka2; // return ini memberikan nilai kedalam fungsi, bila tidak diberikan nilai
    // maka fungsi bernilai undefined
}
console.log(tambahangka(10,20))
console.log(tambahangka(20,20))
console.log(tambahangka(20,30))
console.log(tambahangka(50,50))

// contoh menambahkan looping didalam fungsi
function balikkata(kata){
    let balikkata = "";
    for (i = kata.length -1; i >= 0; i--){
        balikkata += kata[i];
    }
    return balikkata;
}

console.log(balikkata("kambing"))
console.log(balikkata("gajah"))
console.log(balikkata("kudanil"))
console.log(balikkata("naga"))

console.log('');

// contoh fungsi yg sering digunakan adalah menambahkan huruf besar setelah spasi

function kapital(kata){
    result = "";
    for (i = 0; i < kata.length; i++){
        if ((i === 0 || kata [i - 1] === ' ')) {
            result += kata[i].toUpperCase();
        } else{
            result += kata[i]
        }
    }
    return result;
}
console.log(kapital('gema bagustian'))
console.log(kapital("yang punya kebebasan"))
console.log(kapital("seluas lautan"))