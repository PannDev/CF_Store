//contoh array
/*
saya punya data buah-buahan diantaranya :
    - Anggur
    - Pisang
    - Jeruk
    - Semangka
    - Nanas
    - Pepaya

    1). ubahlah menjadi array! dan simpan dalam variable buah

    2). Tentukan lenght dari data array

    3). Kemudian ubah dengan urutan menjadi data seperti ini
        Anggur, Jeruk, Nanas, Pepaya, Pisang, Semangka
        dan simpan ke variable buah_sort

    4). Tambahkan data 
        Durian, Jambu ke varible buah_sort dan urutkan kembali
        kemudian tampilkan dengan console.log

    5) jika data sudah benar maka coba buang data dengan nama Jeruk dari variable_sort
    kemudian tampilkan di console log

    6)Check kembali dengan include apakah masih terdapat data Jeruk di variable_sort?

*/

var buah = ['Anggur', 'Pisang', 'Jeruk', 'Semangka', 'Nanas', 'Pepaya'];
console.log(buah.length);
console.log(buah.sort());

var buah_sort = buah.sort();
console.log(buah_sort);

buah_sort.push('Durian', 'Jambu');
console.log(buah_sort.sort());

buah_sort.splice(buah_sort.indexOf('Pisang'), 1);
console.log(buah_sort);

buah_sort.splice(buah_sort.indexOf('Nanas'), 2);
console.log(buah_sort);



