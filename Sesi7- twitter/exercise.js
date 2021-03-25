console.log('SESI 8');

const arrayPertama = [
  'Math',
  'English',
  'Programming' // nilai yang sama
];

const arrayKedua = [
  'Geography',
  'Spanish',
  'Programming' // nilai yang sama
];

function cekNilaiYangSamaDariDuaArray(array1, array2) {
  // array1.forEach atau array1.map
  array1.forEach((nilaiDalamArray1, posisiNilaiDalamArray1) => {
    console.log(`Nilai ${nilaiDalamArray1} ada di posisi ${posisiNilaiDalamArray1}`);

    const nilaiDalamArray2 = array2[posisiNilaiDalamArray1];
    console.log(`nilai dalam array kedua ${nilaiDalamArray2}`);

    if (nilaiDalamArray1 === nilaiDalamArray2) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
};

cekNilaiYangSamaDariDuaArray(arrayPertama, arrayKedua);

/*
Buatlah sebuah data array yang berisi nama pada tim teman-teman.
Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
Tampilkan list data tersebut ke halaman HTML
hidden:
Cek built-in method Array
Bisa pakai slice() atau splice()
*/

const namaTim = [
  'Dwi - Leader',
  'Elmira - Anggota',
  'Danu - Leader',
  'Alvito - Anggota',
];

const timPertama = namaTim.slice(0, 2);
const timKedua = namaTim.splice(2);

console.log(`${timPertama[0]}, ${timPertama[1]}`);
console.log(`${timKedua[0]}, ${timKedua[1]}`);

// namaTim.forEach((data) => {
//   document.write(data);
// })

    

