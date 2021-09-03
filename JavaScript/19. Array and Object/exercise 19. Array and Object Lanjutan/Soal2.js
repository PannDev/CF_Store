//contoh array
/*
saya punya data pemain sepak bola :
    - Ronaldo
    - Keylain Mbape
    - Messi
    - Neymar
    - M.Salah
    - Ramos
    - Pogba
    1). ubahlah menjadi array! dan simpan dalam variable Player
    2). Tentukan lenght dari data array
    3). Kemudian ubah dengan urutannya Sesuai Alfabet, dan simpan ke data Player_sort
    4). Saya mencoret atau menghilangkan beberapa pemain karna cidera diantaranya
        Messi, Neymar dan Ramos
        data yang dibuang di bagian variable player_sort

    5) jika data sudah benar maka coba tampilkan data player dengan console.log

    6)Check kembali dengan include apakah masih terdapat data Messi,Neymar dan Ramos di variable_sort?
    Jika sudah tidak ada coba cetak dgn console.log

    7). Ternyata Messi sudah sembuh dari Cidera, jadi saya ingin menambahkan kembali messi kedalam daftar pemain
        silakan tambahkan messi di player_sort 
        dan coba cetak dengan data yang sudah di urutkan kembali

*/

var Player = ['Ronaldo', 'Keylain Mbape', 'Messi', 'Neymar', 'M.Salah', 'Ramos', 'Pogba'];
console.log(Player.length); //7

var Player_sort = Player.sort();
console.log(Player_sort);

Player_sort.splice(Player_sort.indexOf('Messi'), 1);
Player_sort.splice(Player_sort.indexOf('Neymar'), 1);
Player_sort.splice(Player_sort.indexOf('Ramos'), 1);
console.log(Player_sort);


console.log(Player_sort.includes('Neymar'));
console.log(Player_sort.includes('Ramos'));
console.log(Player_sort.includes('Messi'));

Player_sort.push('Messi');
console.log(Player_sort);