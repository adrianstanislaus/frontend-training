// Load the full build.
var _ = require('lodash');

const anggota_kelas = ["budi","sita","ayu","rena","omen"];
let mengumpulkan_tugas = ["rena","omen"];

console.log("-----------------No.1.a--------------------")
let belum_kumpul = _.difference(anggota_kelas,mengumpulkan_tugas);
console.log(belum_kumpul);


console.log("-----------------No.1.b--------------------")
let anggota_kelas_dua = _.chunk(anggota_kelas,[size=2]);
console.log(anggota_kelas_dua);

console.log("-----------------No.1.c--------------------")
let gabungstring = _.join(anggota_kelas,[separator='-']);
console.log(gabungstring);

console.log("-----------------No.1.d--------------------")
let tanpapertama = _.drop(anggota_kelas);
console.log(tanpapertama);

console.log("-----------------No.1.e--------------------")
let kebalik = _.reverse(anggota_kelas);
console.log(kebalik);

console.log("-----------------No.2.--------------------")
const carilembah =
    function(x) {
        let posisiNow = 0;
        let posisiBef = 0;
        let lembah = 0
        _.forEach(x, x => {
            if(x === "D") {
                posisiBef = posisiNow;
                posisiNow -= 1;
                if (posisiBef === 0){
                    lembah += 1;
                }
            }else {
                posisiBef = posisiNow;
                posisiNow +=1;
            }
        });
        return lembah;
    }; 
console.log(carilembah("DDUUDDUDUUUD"));
console.log(carilembah("UDDDUDUU"));
console.log(carilembah("DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"));

console.log("-----------------No.3.--------------------")
class Orang {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    perkenalanDiri(){
        return `Halo, saya ${this.nama}. ${this.umur>17? "Saya sudah dewasa" : "Saya masih di bawah umur"}`
    }
}

class Pelajar extends Orang{
    constructor(nama,umur){
        super(nama,umur);
        this.pekerjaan = "Siswa/Mahasiswa"
    }
    perkenalanDiri(){
        return `Halo, saya ${this.nama}. Saya belum bekerja.`
    }
}

class Pekerja extends Orang{
    constructor(nama,umur,pekerjaan){
        super(nama,umur);
        this.pekerjaan = pekerjaan
    }
    perkenalanProfesi(){
        return `Hi, Saya seorang ${this.pekerjaan}`
    }
}

const ana = new Orang('Ana',10);
const ini = new Pelajar('Ini',10);
const budi = new Pekerja('Budi',28,'koki');

console.log(ana.perkenalanDiri())
console.log(ini.perkenalanDiri())
console.log(ini.pekerjaan)
console.log(budi.perkenalanDiri())
console.log(budi.perkenalanProfesi())
console.log(budi.pekerjaan)

console.log("-----------------No.4.--------------------")
//dom.js

console.log("-----------------No.5.--------------------")
