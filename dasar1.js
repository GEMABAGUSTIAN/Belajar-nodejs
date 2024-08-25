// ini namanya variabel
// variabel bisa menggunakan var, let, const
let angka1 = 10
let angka2 = 20

// ini untuk menampilkan hasil variabel dengan aritmatika
console.log(angka1 + angka2); // penjumlahan
console.log(angka1 - angka2); // pengurangan
console.log(angka1 * angka2); // perkalian
console.log(angka1 / angka2); // pembagian
console.log(angka1 % angka2); // modulus (nilai tengah)

// ini sintaks untuk membungkus variabel didalam variabel
let mengisivariabel = angka1 + angka2;
console.log(mengisivariabel);
mengisivariabel = angka1 - angka2;
console.log(mengisivariabel);
mengisivariabel = angka1 * angka2;
console.log(mengisivariabel);
mengisivariabel = angka1 / angka2;
console.log(mengisivariabel);
mengisivariabel = angka1 % angka2;
console.log(mengisivariabel);

// ini contoh sintaks untuk tipe data string/huruf
let firstname = 'gema';
let lastname = 'bagustian';
let fullname = firstname + lastname; // ini membungkus di dalam 1 variabel sehingga kalian
// bisa memanggilnya hanya dengan 1 variabel saja

console.log(firstname + lastname); // contoh yg tidak di bungkus dalam 1 variabel
console.log(fullname); // contoh yg membungkus
console.log(firstname + ' ' + lastname); // ini untuk memberi jarak/spasi pada setiap variabel
// PERLU DI INGAT BAHWA VARIABEL TIPE DATA STRING HANYA BISA DI JUMLAHKAN
// JIKA SELAIN PENJUMLAHAN MAKA HASILNYA AKAN MENJADI NaN

// contoh merubah variabel
let number = 20;
console.log(number + 30); // Hasilnya 50
number = 50; // lalu disini isi dari variabel number kita ubah
console.log(number + 50); // hasilnya 100 karena si number sudah berubah menjadi 50

// APASIH BEDANYA let dan const?
// contoh
// const hewan = 'kambing';
// console.log(hewan);
// hewan = 'ayam';
// console.log(hewan);
// kode tersebut akan eror karena untuk variabel const itu tidak dapat di ubah seperti let
// itulah dia perbedaan antara let dan const, lalu bagaimana dengan var bang?
// var sama seperti dengan let namun hanya saja

// var dapat di deklarasikan di seluruh script
// sedangkan let hanya dapat diakses di dalam blok {} tempat variabel tersebut dideklarasikan.