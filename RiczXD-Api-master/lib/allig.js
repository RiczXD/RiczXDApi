const axios = require('axios');
const cheerio = require('cheerio');

async function igvideo(link) {
  return new Promise(async(resolve, reject) => {
    let config = {
      'url': link,
      'submit': ''
    }
      axios('https://downloadgram.org/video-downloader.php',{
        method: 'POST',
        data : new URLSearchParams(Object.entries(config)),
        headers: {
          "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
          }
        })
      .then(tod => {
        const $ = cheerio.load(tod.data)
        resolve({
          link: $('#downloadBox > a').attr('href')
      })
        })
        })
  }
 async function igfoto(link) {
    return new Promise(async(resolve, reject) => {
      let config = {
        'url': link,
        'submit': ''
      }
        axios('https://downloadgram.org/photo-downloader.php',{
          method: 'POST',
          data : new URLSearchParams(Object.entries(config)),
          headers: {
            "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
          })
        .then(tod => {
          const $ = cheerio.load(tod.data)
          resolve({
            link: $('#downloadBox > a').attr('href')
        })
          })
          })
    }
async function igtv(link) {
      return new Promise(async(resolve, reject) => {
        let config = {
          'url': link,
          'submit': ''
        }
          axios('https://downloadgram.org/igtv-downloader.php',{
            method: 'POST',
            data : new URLSearchParams(Object.entries(config)),
            headers: {
              "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
              }
            })
          .then(tod => {
            const $ = cheerio.load(tod.data)
            resolve({
              link: $('#downloadBox > a').attr('href')
          })
            })
            })
      }

async function servermc(negara) {
      return new Promise((resolve, reject) => {
        axios.get(`https://minecraftpocket-servers.com/country/${negara}/`).then( tod => {
        const $ = cheerio.load(tod.data)
        
        hasil = []
        
        $("tr").each(function(c, d) {
          ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '')
          port = '19132'
          versi = $(d).find("a.btn.btn-info.btn-sm").text()
          player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim()
          const Data = {
            author: '@only_cupz',
            ip: ip,
            port: port,
            versi: versi,
            player: player
          }
          hasil.push(Data)
        })
        resolve(hasil)
      }).catch(reject)
      })
    }

module.exports = { igtv, igfoto, igvideo, servermc }
