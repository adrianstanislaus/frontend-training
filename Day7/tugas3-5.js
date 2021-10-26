// 3. Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, Sita tersimpan dalam variabel bernama b, dan Ayut ersimpan dalam variable bernama c.
const foo = ['Budi','Sita','Ayu'] 
const [a,b,c] = foo;
console.log(a,b,c);

//4. Kalian memiliki sebuah variabel berikut (let bdays = [’10-17′,’05-19′,’20-19′]). Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi [ ’10/17′, ’05/19′, ’20/19′ ]
let bdays = ['10-17','05-19','20-19'];
console.log(bdays.map(element => element.slice(0,2)+"/"+element.slice(3)));

//5.Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam array tersebut dengan dua. Sehingga, ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]
let value = [1,2,3,4,5,6];
value = value.map(element => element*2);
console.log(value);

//6.Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) Bulatkan ke atas variable tersebut sehingga output yang dihasilkan adalah [ 2, 3, 6, 13 ]
let arr = [1.5, 2.56,5.1, 12.33]
console.log(arr.map(x => Math.ceil(x)));