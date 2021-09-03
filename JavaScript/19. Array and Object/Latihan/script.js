//contoh array
/*
saya punya data buah-buahan diantaranya :
    - Apple
    - Banana
    - Kiwi
    - Water Melon
    - Orange
    - Avocado
    ubahlah menjadi array! 

    yang akan dipelajari pada kali ini diantaranya :
    1.menghitung panjang karakter array atau total data array
        method = perintah yang bisa digunakan :

        array.length(); 

    2.Mengecek data berdasarkan index
        method yang bisa digunakan array[]

    3.menambah dan menghapus data yang ada di array
        method yang bisa digunakan push, pop, shift, unshift

    4.menyalin/menduplikat elemen berdasar posisi index tertentu
        - slice()
        - slice(start)
        - slice(start,end)

    5.Menentukan index berdasarakan element/value
        fruits.indexOf("value")
    
    6.Mengubah isi Array
        array[i] = "data yang baru"
    
    7.Menghapus elemen berdasar posisi index
        fruits.splice("value")

    8.Pengulangan array
    
    array.forEach(function (item, index, array) {
        console.log(item, index);
    });

    - Apple
    - Banana
    - Kiwi
    - Water Melon
    - Orange
    - Avocado

*/

var fruits = ['Apple', 'Banana', 'Kiwi', 'Water Melon', 'Orange', 'Avocado'];
 

//cara-cara menampilkan array
console.log(fruits.length); //6

console.log(fruits[0]); //6 Apple
console.log(fruits[3]); //6 Water Melon

//slice mengambil data dari array dengan ketentuan seperti berikut :
// slice(star);
// slice(start, end)


var fruits2 = fruits.slice(1, 3);

console.log(fruits2);



// Menambahkan elemen pada bagian akhir sebuah Array

var newLength = fruits.push("Grape");
console.log(fruits);
console.log(newLength);



// Menghapus elemen di akhir sebuah Array

var last = fruits.pop(); // remove Orange (from the end)
console.log(fruits);

// Menghapus elemen di awal sebuah Array

var first = fruits.shift(); // remove Apple from the front
console.log(fruits);

// manambahkan element di bagian awal 
var newLength = fruits.unshift("Strawberry"); // add to the front
console.log(fruits);


// Mencari (nomor) index elemen pada sebuah Array

fruits.push("blueBerry");
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf("Banana");
console.log(pos);
// 1
// Menghapus elemen berdasar posisi index

var removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Mango"]
// Menduplikat sebuah Array
console.log(fruits);

var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]

console.log(shallowCopy);