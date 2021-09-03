/* 5. Operator Bitwise 
Nilai operator di ubah menjadi 32 bit angka, yang hasilnya nanti di kembalikan ke tipe number js
Operator bitwise merupkan operator yang digunakan untuk operasi berdasarkan bit (biner).

Nama Operator	               Simbol
AND	                            &
OR	                            |
XOR	                            ^
Negasi/kebalikan	              ~
Left Shift	                    «
Right Shift	                    »
Left Shift (unsigned)	          «<
Right Shift (unsigned)	        »>
*/



var x = 5;
var y = 1;
var z = "";
// operator bitwise and
z = x & y; //1

// operator bitwise or
z = x | y; //5

// operator bitwise xor
z = x ^ y; //10

// operator negasi
z = ~x; //4

// operator bitwise right shift >>
z = x >> y; //2

// operator bitwise right shift <<
z = x << y; //10

// operator bitwise right shift (unsigned) >>>
z = x >>> y; //2