const nama = "Gabriel";
let usia = 11;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        // ini adalah  kondisi pertama
        generasi = " saya masih generasil remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "saya masih generasil dewasa";
    } 
    else if (usia >= 30) {
        generasi = "saya masih generasil tua"
    }
    else if (usia > 2 && usia <= 10) {
        generasi = "saya masih generasil anak anak"
    }
    else {
        // kondisi tidak terpenuhi
        generasi = "saya masih generasil bayi"
    }


    return biodata.innerHTML = generasi;

}


console.log(nama);
console.log(usia);
 
generateBiodata();

