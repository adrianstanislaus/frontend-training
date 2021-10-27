//1. Buatlah sebuah variabel bernama “nilai1” berupa array yang memiliki value integer. Kemudian buat sebuah variabel baru yang bernama “nilai2”  berisikan penjumlahan dari setiap value pada variable “nilai1”. Tampilkan hasil dari dari penjumlahan tersebut pada console. 
const a = [1,2,3,4,5,6];
const b = a.reduce((acc, cV) => acc + cV)
console.log(b)

//2. Kalian memiliki variable berikut var filterValue = [-4,3,2,-21,1] . melakukan filter pada variabel tersebut sehingga isinya hanya berupa angka positif ([ 3, 2, 1 ])
var filterValue = [-4,3,2,-21,1]
console.log(filterValue.filter(x => x>=0)) 

//3.
var data = [
    { name:'daniel',age:45},
    { name:'john',age:30},
    { name:'robert',age:null},
    { name:'jen',age:undefined},
    { name: null,age:undefined},
]

console.log(data.filter(x => (x.name !== null) && (x.age !== null && (x.age !== undefined)) ))

//4. Buatlah sebuah arrow function dengan nama konfersiMenit(number) yang menerima parameter berupa angka. Function akan me-return string dengan format “jam:menit”.
var konfersiMenit = (number) => (Math.floor(number/60)) + ":" + (number%60);
console.log(konfersiMenit(88))

//5. Ubah fungsi inputHarusGenap(angka) sehingga menghasilkan keluaran sesuai dengan yang ada pada gambar

function inputHarusGenap(angka){
    if (angka%2 !== 0) {
        throw new Error("Invalid")
    }
    return "Valid"
}

try {
    console.log(inputHarusGenap(7));
} catch(e) {
    console.log(e)
}

try {
    console.log(inputHarusGenap(4));
} catch (e) {
    console.log(e)
}

//6. Diberikan sebuah function perkalianUnik(array) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang  setiap nilainya merupakan hasil kali angaka lain yang bukan angka itu sendiri. 
//Contoh, jika arr adalah [1,2,3,4,5], maka function akan me-return [120,60,40,30,24], karena 120 adalah 2*3*4*5, 60 adalah 1*3*4*5, 40 adalah 1*2*4*5 dan seterusnya.
function perkalianUnik(arr){
    kaliTotal = arr.reduce((acc, cV) => acc*cV)
    var arrHasil = []
    for (let i = 0; i<arr.length;i++){
        arrHasil = [...arrHasil,(kaliTotal/arr[i])]
    }
    return arrHasil
}

console.log(perkalianUnik([2,4,6]))
console.log(perkalianUnik([1,2,3,4,5]))
console.log(perkalianUnik([1,4,3,2,5]))
console.log(perkalianUnik([1,3,3,1]))
console.log(perkalianUnik([2,1,8,10,2]))