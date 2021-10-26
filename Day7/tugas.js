var a = 5;
let b = "kampus merdeka";
const nama = "budi";
let terdaftar = false;
let lengkap_arr =[a,b,nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
         " nomor urut " +
        a +
        " sekarang sedang mengikuti "+
        b +
        "berasal dari " +
        asal
    );
}

if (terdaftar === false) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
//nama = b;

console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = "+ b);


//1. 
//a.Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
console.log(lengkap_arr[2])

//b. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console. 
//Mengubah true menjadi false pada baris 21

//c. Lakukan pemanggilan untuk function perkenalan pada baris 31.
perkenalan()

//d. Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah
//


/*
2.
    a. jelaskan kenapa baris 21,22,23 tidak dapat tampil?
    Baris 21,22,23 tidak dapat tampil karena terdaftar == false.
    
    b. jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
    Karena "nama" adalah const yang tidak dapat dirubah isinya.
    
    
    c. dengan melakukan komen pada baris ke 26, apakah baris 29 dapat di eksekusi? jelaskan.
    Baris 29 tidak bisa dieksekusi karena baris 28 tidak bisa dieksekusi juga dikarenakan variabel asal merupakan variabel local dalam function



*/

// 3. Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, Sita tersimpan dalam variabel bernama b, dan Ayut ersimpan dalam variable bernama c. 
const [a,b,c] = foo;
console.log(a,b,c);