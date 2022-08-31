const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");

async function artiMimpi(mimpi) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`
      )
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const cek = $("#body > font > i").text();
        const adaga = /Tidak ditemukan/g.test(cek) ? false : true;
        if (adaga) {
          const isi = $("#body")
            .text()
            .split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1]
            .replace(/\n\n\n\n\n\n\n\n\n/gi, "\n");
          const result = {
            author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
            result: isi.replace(/\n/gi, "").replace("       ", "").replace("\"        ", "")
          };
          resolve(result);
        } else {
          const result = {
            result: `Arti mimpi ${mimpi} tidak di temukan`
          };
          resolve(result);
        }
      })
      .catch(reject);
  });
};

async function artiNama(nama) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`
      )
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const isi = $("#body").text().split("Nama:")[0];
        const result = {
          author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
          result: isi.replace(/\n/gi, "").replace("ARTI NAMA", "").replace("                                ", "")
        };
        resolve(result);
      })
      .catch(reject);
  });
};

async function ramalJodoh(nama1, nama2) {
  return new Promise((resolve, reject) => {
    axios
    .get(`https://www.primbon.com/kecocokan_nama_pasangan.php?nama1=${nama1}&nama2=${nama2}&proses=+Submit%21+`)
    .then(({ data }) => {
     const $ = cheerio.load(data);
     const thumbnail = 'https://www.primbon.com/'+$('#body > img').attr('src');
     const res = $('#body').text().split(nama2)[1].replace('< Hitung Kembali','').split('\n')[0];
     const positif = res.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ','')
     const negatif = res.split('Sisi Negatif Anda: ')[1]
     const result = {
          author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
          namaKamu: nama1,
          namaPasangan: nama2,
          thumbnail: thumbnail,
          positif: positif,
          negatif: negatif
     }
     resolve(result);
    })
    .catch(reject);
  });
};

async function nomorHoki(nomor) {
  return new Promise((resolve, reject) => {
    var options = { method: 'POST',
      url: 'https://primbon.com/no_hoki_bagua_shuzi.php',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      form: { nomer: nomor, submit: ' Submit! ' } };

      request(options, function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body);
      const result = $('#body').text().split('POTENSI HOKI')[1].replace('\nMeningkatkan Keberuntungan Melalui Nomor Handphone (HP)\nNomor HP adalah gabungan kombinasi angka-angka yang sebenarnya memiliki arti, ada yang membawa pengaruh baik (hoki), biasa, atau bahkan dianggap kurang baik. Sebuah nomor HP bisa saja dianggap cantik, dijual sampai jutaan, bahkan puluhan juta rupiah, namun nomor tersebut belum tentu hoki. Aplikasi ini dibuat untuk mengecek seberapa jauh pengaruh energi suatu deret nomor HP berdasarkan algoritma Bagua Shuzi, yaitu metode China kuno yang sudah berusia ribuan tahun yang bertujuan untuk mengejar keberuntungan melalui pemilihan angka.\n\nBagua Shuzi menjelaskan pengaruh kombinasi angka yang berupa energi Kekayaan (Sheng Qi), Kesehatan (Tian Yi), Cinta/Relasi (Yan Nian), dan Kelancaran/Kestabilan (Fu Wei), sebagai energi positif. Sedangkan energi Perselisihan (Huo Hai), Kehilangan (Liu Sha), Malapetaka (Wu Gui), dan Kehancuran (Jue Ming), sebagai energi negatif. Sebuah nomor dikatakan baik atau hoki jika persentase energi positifnya lebih banyak dibanding energi negatifnya. Karena metode Bagua Shuzi menggunakan algoritma perhitungan yang cukup kompleks, maka tidak heran jika nomor hoki jumlahnya lebih terbatas dibanding nomor cantik.\n', '')
      resolve({
        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
        result: 'POTENSI HOKI'+result
      });
    });

  })
}

    async function zodiak(zodiak) {
        return new Promise((resolve, reject) => {
            axios.get(`https://primbon.com/zodiak/${zodiak}.htm`)
            .then(({ data }) => {
                let $ = cheerio.load(data)
                let fetchText =$('#body').text()
                let hasil
                try {
                    hasil = {
                        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                        status: true,
                        result: {
                            zodiak: fetchText.split('Nomor Keberuntungan:')[0].trim(),
                            nomor_keberuntungan: fetchText.split('Nomor Keberuntungan: ')[1].split('\n')[0],
                            aroma_keberuntungan: fetchText.split('Aroma Keberuntungan: ')[1].split('\n')[0],
                            planet_yang_mengitari: fetchText.split('Planet Yang Mengitari: ')[1].split('\n')[0],
                            bunga_keberuntungan: fetchText.split('Bunga Keberuntungan: ')[1].split('\n')[0],
                            warna_keberuntungan: fetchText.split('Warna Keberuntungan: ')[1].split('\n')[0],
                            batu_keberuntungan: fetchText.split('Batu Keberuntungan: ')[1].split('\n')[0],
                            elemen_keberuntungan:fetchText.split('Elemen Keberuntungan: ')[1].split('\n')[0],
                            pasangan_zodiak: fetchText.split('Pasangan Serasi: ')[1].split('\n')[0],
                            catatan: fetchText.split('\n\n\n\n\n\n\n\n\n\n\n')[1].split('<<< Kembali')[0].trim()
                        }
                    }
                } catch {
                    hasil = {
                        status: false,
                        result: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                    }
                }
                resolve(hasil)
            })
        })
    }

    async function shio(shio) {
        return new Promise((resolve, reject) => {
            axios.get(`https://primbon.com/shio/${shio}.htm`)
            .then(({ data }) => {
                let $ = cheerio.load(data)
                let fetchText= $('#body').text()
                let hasil
                try {
                    hasil = {
                        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                        status: true,
                        result: fetchText.split('<<< Kembali')[0].trim()
                    }
                } catch {
                    hasil = {
                        status: false,
                        result: 'Error, Mungkin Input Yang Anda Masukkan Salah',
                        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻'
                    }
                }
                resolve(hasil)
            })
        })
    }

    async function weton_jawa(tgl, bln, thn) {

        return new Promise((resolve, reject) => {

            axios({

                url: 'https://primbon.com/weton_jawa.php',
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(Object.entries({ "tgl": tgl, "bln": bln, "thn": thn, "submit": "  WETON JAWA »  " }))
            }).then(({ data }) => {
                let $ = cheerio.load(data)
                let fetchText = $('#body').text()
                let hasil
                try {
                    hasil = {
                        status: true,
                        result: {

                            author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                            tanggal: fetchText.split('Tanggal: ')[1].split('Jumlah Neptu')[0],
                            jumlah_neptu: fetchText.split('Jumlah Neptu')[1].split('Watak Hari (Kamarokam)')[0],
                            watak_hari: fetchText.split('Watak Hari (Kamarokam)')[1].split('Naga Hari')[0],
                            naga_hari: fetchText.split('.Naga Hari')[1].split('Jam Baik (Saptawara & Pancawara)')[0],
                            jam_baik: fetchText.split('Jam Baik (Saptawara & Pancawara)')[1].split('Watak Kelahiran')[0],
                            watak_kelahiran: fetchText.split('Watak Kelahiran')[1].split('< Hitung Kembali')[0]
                        }
                    }
                } catch {
                    hasil = {

                        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                        status: false,
                        result: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                    }
                }
                resolve(hasil)
            })
        })
    }

    async function sifat_karakter(nama, tgl, bln, thn) {
        return new Promise((resolve, reject) => {
            axios({
                url: 'https://primbon.com/sifat_karakter_tanggal_lahir.php',
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(Object.entries({ "nama": nama, "tanggal": tgl, "bulan": bln, "tahun": thn, "submit": " Submit! " }))
            }).then(({ data }) => {
                let $ = cheerio.load(data)
                let fetchText = $('#body').text()
                let hasil
                try {
                    hasil = {
                        status: true,
                        result: {

                            author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                            nama: nama,
                            tgl_lahir: fetchText.split('Tgl. Lahir : ')[1].split('GARIS HIDUP')[0],
                            garis_hidup: fetchText.split('GARIS HIDUP')[1].split('< Hitung Kembali')[0]
                        }
                    }
                } catch {
                    hasil = {

                        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                        status: false,
                        result: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                    }
                }
                resolve(hasil)
            })
        })
    }

    async function potensi_keberuntungan(nama, tgl, bln, thn) {
        return new Promise((resolve, reject) => {
            axios({
                url: 'https://primbon.com/potensi_keberuntungan.php',
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(Object.entries({ "nama": nama, "tanggal": tgl, "bulan": bln, "tahun": thn, "submit": " Submit! " }))
            }).then(({ data }) => {
                let $ = cheerio.load(data)
                let fetchText = $('#body').text()
                let hasil
                try {
                    hasil = {
                        status: true,
                        result: {

                            author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                            nama: nama,
                            tgl_lahir: fetchText.split('Tgl. Lahir : ')[1].split('Setiap orang')[0],
                            result: 'Setiap orang'+fetchText.split('Setiap orang')[1].split('< Hitung Kembali')[0]
                        }
                    }
                } catch {
                    hasil = {

                        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                        status: false,
                        result: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                    }
                }
                resolve(hasil)
            })
        })
    }

    async function memancing_ikan(tgl, bln, thn) {
        return new Promise((resolve, reject) => {
            axios({
                url: 'https://primbon.com/primbon_memancing_ikan.php',
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams(Object.entries({ "tgl": tgl, "bln": bln, "thn": thn, "submit": " Submit! " }))
            }).then(({ data }) => {
                let $ = cheerio.load(data)
                let fetchText = $('#body').text()
                let hasil
                try {
                    hasil = {
                        status: true,
                        result: {

                            author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                            tgl_mancing: fetchText.split('PRIMBON MEMANCING IKAN')[1].split('Maka hasilnya: ')[0].trim(),
                            result: fetchText.split('Maka hasilnya: ')[1].split('< Hitung Kembali')[0],
                            catatan: fetchText.split('< Hitung Kembali')[1].trim()
                        }
                    }
                } catch {
                    hasil = {

                        author: '@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻',
                        status: false,
                        result: 'Error, Mungkin Input Yang Anda Masukkan Salah'
                    }
                }
                resolve(hasil)
            })
        })
    }


module.exports = {
  artiNama,
  artiMimpi,
  ramalJodoh,
  nomorHoki,
  zodiak,
  shio,
  memancing_ikan,
  potensi_keberuntungan,
  sifat_karakter,
  weton_jawa
};
