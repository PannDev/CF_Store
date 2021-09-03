/* 1. Operator Aritmatik
   operator yang digunakan untuk operasi 
   penjumlahan, pengurangan, pembagian, perkalian dsb.
*/

// -Penjumlahan 

//inisialisasi var //
var a, b, c;

a = 5;
b = 3;
c = a + b; //8
console.log(c);

c = '5' + '3'; //53
console.log(c);

c = "a" + 3; //a3
console.log(c);

console.log('c = a + b');
console.log('\n');

// pengurangan
c = a - b; //2

// Perkalian
c = a * b; //15

// pemangkatan
c = a ** b; //125

// Pembagian
c = a / b; //1.6667

// Modulus
c = a % b; //2


// bonus //
var d, e, f; //string

d = "5";
e = "3";

f = d + e; //hasill????
f = d + " dan " + e; //hasill????


d = "Aku";
e = "Kamu";

f = d + " dan " + e; //hasill????



// Contoh Tambahan cara print atau ouput dengan console.log

console.log(`${a} * ${b} =`, a * b); //gunakan tanda kutip yang ada di tombol kiri nomor 1 keyboard
// atau cara kedua
console.log(a + ' *' + b + '=', a * b);