//contoh array
/*
saya punya daftar nama diantaranya :
    - Rahmat
    - Januar
    - Yul
    - Novi
    - Lesti
    - Okto

    ubahlah menjadi array! 

    method array kali ini yang akan dipelajari adalah :
    1. Method filter();
    Method filter() berfungsi untuk menfilter atau menyaring data dari array.
    
    Parameter yang harus diberikan pada method filter() sama seperti method forEach(), yaitu: sebuah fungsi callback.

    2. Method includes()
        Method ini berfungsi untuk mengecek apakah sebuah data ada di dalam array atau tidak.
        Biasanya digunakan untuk melakukan pencarian untuk memastikan data sudah ada di dalam array.

     3. Method sort()
        Method sort() berfungsi untuk mengurutkan data pada array.



*/


/* 
- Rahmat
    - Januar
    - Yul
    - Novi
    - Lesti
    - Okto
*/




var names = ['Rahmat', 'Januar', 'Novi', 'Lesti', 'Okto'];

const filteredArray = names.filter((item) => {
    return item == "Novi";
});

console.log(filteredArray); //['Novi']

function checkName(a) {
    return a == "Lesti"; //['Lesti]
}

console.log(names.filter(checkName));


// include
var random = [11, 2, 2, 5, 50, 30, 5];

var selectNumber = random.includes(115);

console.log(selectNumber); // -> true






var fruits = ['Apple', 'Banana', 'Kiwi', 'Water Melon', 'Orange', 'Avocado'];
//kita masukan ke halaman web
document.write(fruits);

// ada perintah atau method lain yang bisa kita coba
// filrer

/*
 1. Method filter()
Method filter() berfungsi untuk menyaring data dari array.
Parameter yang harus diberikan pada method filter() sama seperti method forEach(), yaitu: sebuah fungsi callback.
*/
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Kita ambil data yang hanya habis dibagi dua saja
// const filteredArray = angka.filter((item) => {
//     return item % 2 === 0
// });

// console.log(filteredArray) // -> [2, 4, 6, 8]

/*
        2. Method includes()
        Method ini berfungsi untuk mengecek apakah sebuah data ada di dalam array atau tidak.
        Biasanya digunakan untuk melakukan pencarian untuk memastikan data sudah ada di dalam array. */
// kita akan coba-coba di console

var tanaman = ["Padi", "Kacang", "Jagung", "Kedelai"];

// apakah kacang sudah ada di dalam array tanaman?
var adaKacang = tanaman.includes("Kacang");

console.log(adaKacang); // -> true

// apakah bayam ada?
var adaBayam = tanaman.includes("Bayam");

console.log(adaBayam); // -> false


/*         Method sort()
 Method sort() berfungsi untuk mengurutkan data pada array.
 */

var alfabet = ['a', 'f', 'z', 'e', 'r', 'g'];
var angka = [3, 1, 2, 6, 8, 5];

console.log(alfabet.sort()); //->  ["a", "e", "f", "g", "r", "z"]
console.log(angka.sort()); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]