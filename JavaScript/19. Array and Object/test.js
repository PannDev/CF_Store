// - Apple
//     - Banana
//     - Kiwi
//     - Water Melon
//     - Orange
//     - Avocado

var fruits = ['Apple', 'Banana', 'Kiwi', 'Water Melon', 'orange', 'Avocado'];

console.log(fruits.length); //6
console.log(fruits); // Array (6)
console.log(fruits[0]); //apple
console.log(fruits[5]); //avocado

// push pop shift unshift


// pop mengeluarkan data terakhir
// shift mengeluarkan data pertama
// unsift menambahkan data pertama
// push menambahkan data terakhir

fruits.push('Berry');
console.log(fruits);

fruits.pop();
fruits.shift();
fruits.unshift("Apple");

console.log(fruits.indexOf("Kiwi"));

fruits[2] = "data yang baru";
