const express = require('express');
const router = express.Router();
const axios = require('axios')

const {
  metroTV, 
  CNN, 
  iNewsTV, 
  Kumparan, 
  Tribun, 
  DailyNews, 
  DetikNews, 
  Okezone, 
  CNBC, 
  KoranFajar, 
  Kompas, 
  KoranSindo, 
  TempoNews, 
  IndoZone, 
  AntaraNews, 
  Republika,
  BBC,
  VIVA,
  Kontan,
  Merdeka
} = require('../lib/news');

const {
  customGfx,
  customGfx2,
  triggerRouter,
  affectRouter,
  beautifulRouter,
  bedRouter,
  kissRouter,
  deleteRouter,
  distractedRouter,
  jailRouter,
  spankRouter,
  shitRouter,
  slapRouter,
  faceRouter,
  trashRouter,
  hitlerRouter,
  wantedRouter,
  jokerRouter,
  rainbowRouter,
  ripRouter,
  wastedRouter,
  welcome,
  leave,
  welcome2,
  leave2,
  welcome3,
  leave3,
  Promote,
  Demote,
  kaneki,
  loli,
  sadboy,
  girlNeko,
  rem,
  zombieRouter,
  Verification,
  Rank,
  LevelUp,
  Xnxx,
  Instagram,
  Spongebob,
  Patrick
} = require('../controllers/canvas');
var {
    fetchJson
} = require('../lib/fetcher.js')
const path = require('path');
const {
    tmpdir
} = require('os');
const { ephoto } = require('../lib/ephoto')
const { sosmed12 } = require('../lib/sosmed')
const { wikiSearch } = require('../lib/wiki')
const covid = require('../lib/covid')
const Crypto = require("crypto")
const {
    readFileTxt,
    readFileJson
} = require('../lib/function');
const {
    ytMp4,
    ytMp3,
    ytPlay
} = require('../lib/youtube');
const { photooxy } = require('../lib/poto');
const {
    servermc,
    igfoto,
    igvideo,
    igtv
} = require('../lib/allig');
const { 
    merdeka, 
    metro, 
    wikipedia, 
    corona, 
    gempa
} = require('../lib/info');
const {
    cekKey,
    limitAdd,
    isLimit
} = require('../database/db');
const {
    youtubePlay,
    youtubeMp4,
    youtubeMp3
} = require('../controllers/yt');
const {
    twitter2,
    facebook2,
    pindl
} = require('../lib/facebook2');
const { styletext } = require('../lib/styletext');
const {
    cakLontong,
    bijak,
    quotes,
    fakta,
    ptl,
    motivasi,
    cerpen,
    dare,
    truth,
    dareen,
    truthen,
    gombal,
    cinta,
    pantun,
    receh,
    pquotes
} = require('../controllers/randomtext');
const {
    photoOxy
} = require('./oxy');
const {
  xnxxsearch,
  xnxxdl
} = require('../lib/xnxx')
const {
  pinterest,
  zerochan,
  happymod
} = require('../lib/search')
const {
  happymoddl,
  android1,
  sfiledown,
  goredl,
  zippydl
} = require('../lib/alldl')

const { ghstalkv2 } = require('../lib/ghstalkv2');
const { igstalkv3 } = require('../lib/igstalk');

var cupz = require("cupz");
var creatorList = ['@𝘰𝘯𝘭𝘺_𝘤𝘶𝘱𝘻'];
var fetch = require('node-fetch');
var fs = require('fs');
const cheerio = require('cheerio')
const { spawn, exec } = require('child_process')
const request = require('request')
const qs = require("qs");
const FormData = require("form-data")
const { fromBuffer } = require('file-type');
const maker = require('Open-APIs');
const hx = require('cupz-clone');

var creator = creatorList[Math.floor(Math.random() * creatorList.length)];
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
_ = require('lodash')
__path = process.cwd();
const temp = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0,6).toString(36)}`)

let is = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        "cookie": "pll_language=en; PHPSESSID=58578e38aa296f5a12a495fc5e5f0c2e"
    }
}

function _token(host) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: host, method: 'GET', headers: {
                "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
                "cookie": "pll_language=en; PHPSESSID=58578e38aa296f5a12a495fc5e5f0c2e"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let token = $('#token').attr('value')
            resolve(token)
        })
    })
}

async function pacebok(url) {
    return new Promise(async (resolve, reject) => {
        let host = 'https://aiovideodl.ml/'
        let form = { data: { 'url': url, 'token': (await _token(host)) } }
        axios.post(host + 'wp-json/aio-dl/video-data/', qs.stringify(form.data), { headers: is.headers })
            .then(({ data }) => {
                if (data == 'error') return resolve({ message: 'Error!' })
				resolve(data)
				console.log(data)
			})
    })
}

async function ucupygy(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://getstickerpack.com/stickers?query=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const source = [];
                const link = [];
                $('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
                    source.push($(b).attr('href'))
                })
                axios.get(source[Math.floor(Math.random() * source.length)])
                    .then(({
                        data
                    }) => {
                        const $$ = cheerio.load(data)
                        $$('#stickerPack > div > div.row > div > img').each(function(c, d) {
                            link.push($$(d).attr('src').replace(/&d=200x200/g,''))
                        })
                        result = {
                            status: 200,
                            author: '@RiczXD',
                            title: $$('#intro > div > div > h1').text(),
                            sticker_url: link
                        }
                        resolve(result)
                    })
            }).catch(reject)
    })
}

async function carigc(nama) {
          return new Promise((resolve, reject) => {
		axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=' + nama + '&searchby=name')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data);
				const result = [];
				const lnk = [];
				const nm = [];
				$('div.wa-chat-title-container').each(function(a, b) {
					const limk = $(b).find('a').attr('href');
					lnk.push(limk)
				})
				$('div.wa-chat-title-text').each(function(c, d) {
					const name = $(d).text();
					nm.push(name)
				})
				for (let i = 0; i < lnk.length; i++) {
					result.push({
						nama: nm[i].split('. ')[1],
						link: lnk[i].split('?')[0]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

async function Joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin/web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({
                data
            }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                        .then(({
                            data
                        }) => {
                            const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                            hasil.push({
                                lagu: res.msong,
                                album: res.malbum,
                                penyanyi: res.msinger,
                                publish: res.public_time,
                                img: res.imgSrc,
                                mp3: res.mp3Url
                            })

                            axios.get('http://api.joox.com/web-fcgi-bin/web_lyric?musicid=' + ids[i] + '&lang=id&country=id&_=' + time)
                                .then(({
                                    data
                                }) => {
                                    const lirik = JSON.parse(data.replace('MusicJsonCallback(', '').replace('\n)', '')).lyric
                                    const buff = new Buffer.from(lirik, 'base64')
                                    const ash = buff.toString('utf-8')
                                    result.push({
                                        result: ash
                                    })
                                    Promise.all(promoses).then(() => resolve({
                                        status: 200,
                                        result: hasil
                                    }))
                                }).catch(reject)
                        }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}
loghandler = {
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    noemote: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter emote'
    },
    query: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter query'
    },
    nousername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notype: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter type'
    },
    domain: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter domain'
    },
        nozodiak: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter zodiak'
    },
    nomor: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nomor'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    },
    img: {
        status: false,
        creator: `${creator}`,
        message: 'Silahkan Masukan Url Image'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
        noshio: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter query'
    },
    noname: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nama'
    },
    noname2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nama2'
    },
    username: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    mimpi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter mimpi'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
}
const {
    whois,
    ttdownloader,
    Tiktok2,
    TiktokStalk,
    ghStalk,
    Simi,
    WPUser,
    Emoji,
    KBBI,
    igStory,
    tebakGambar,
    otakuDesuOngoing,
    emojiScraper,
    genPassword,
    herodetails,
    asahotak,
    susunkata,
    siapakah,
    family100
} = require("../function/lainya");
const { ff } = require('../lib/game');
const { RandomCerpen, cuaca } = require('../lib/scraper')
const {
  getSticker
} = require("../lib/getsticker");
const {
    igStalk,
    igDownload
} = require("../function/ig");
const {
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
} = require("../function/primbon");
const {
    yDonlod,
    yPlay,
    ySearch
} = require("../function/yt");
const { tahta } = require("../lib/tahta");
const facebook1 = require("../lib/facebook");
const {
  pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly,
  pNeons,
  pFlaming,
  pWanted
} = require('../lib/phxy');

router.get('/susunkata', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  susunkata()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/twitter', async(req, res, next) => {
  const apikey = req.query.apikey;
const url = req.query.url;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  twitter2(url)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/pindl', async(req, res, next) => {
  const apikey = req.query.apikey;
const url = req.query.url;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  pindl(url)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/carigc', async(req, res, next) => {
  const apikey = req.query.apikey;
const url = req.query.query;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  carigc(url)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/heromldetails', async(req, res, next) => {
        query = req.query.q
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
       if (!query) return res.json({ status: 404, msg: 'Masukan Paran hero'})
  try {
   herodetails(`${query}`)
  .then(data =>{ res.send(data)})
  } catch {
       res.json({ status: 404, msg: 'Server Error'})
          }
})

router.get('/siapakah', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  siapakah()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/family100', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  family100()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/ceknickepep', async(req, res, next) => {
  const apikey = req.query.apikey;
  const id = req.query.id;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter id"
    })
  ff(id)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/servermc', async(req, res, next) => {
  const apikey = req.query.apikey;
  const id = req.query.negara;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
    if (!id) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter negara"
    })
  servermc(id)
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})
router.get('/asahotak', async(req, res, next) => {
  const apikey = req.query.apikey;
        if (apikey === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter apikey`
        });
        let limit = await isLimit(apikey);
        if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
        const check = await cekKey(apikey);
        if (!check) return res.status(403).send({
          status: 403,
          message: `apikey ${apikey} not found, please register first!`
      });
      limitAdd(apikey);
  asahotak()
  .then(data =>{ res.send(data)})
  .catch(err=>{
  console.log(err)
  res.send('error')
  })
})

router.get('/emoji', async (req, res, next) => {
    const emoji = req.query.emo
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!emoji) return res.json(loghandler.noemote)
    emojiScraper(emoji)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})

router.get('/otakudesu', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    otakuDesuOngoing()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})

router.get('/tebakgambar', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    tebakGambar()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})

router.get('/kbbi', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    const kata = req.query.text || req.query.q;
    if (!kata) return res.json(loghandler.nottext);
    require('../lib/kbbi')(kata)
        .then((data) => {
            res.send({
                status: 200,
                result: data
            });
        })
        .catch((err) => {
            res.status(404).send({
                status: 200,
                result: null,
                log: err
            });
        });
});
router.get('/happymoddl', async (req, res, next) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.invalidlink)
    happymoddl(url)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/goredl', async (req, res, next) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.invalidlink)
    goredl(url)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/igstory', async (req, res, next) => {
    const username = req.query.username
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!username) return res.json(loghandler.nousername)
    hx.igstory(username)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/igtv', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.invalidlink)
    igtv(url)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/igfoto', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.invalidlink)
    igfoto(url)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/igvideo', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.invalidlink)
    igvideo(url)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/android1', async (req, res, next) => {
    const query = req.query.q
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!query) return res.json(loghandler.query)
    android1(query)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/happymod', async (req, res, next) => {
    const query = req.query.q
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!query) return res.json(loghandler.query)
    happymod(query)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/facebook', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter url"
    })
    pacebok(url)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/twitter', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter url"
    })
    hx.twitter(url)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/zerochan', async (req, res, next) => {
    const query = req.query.q
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!query) return res.json(loghandler.query)
    zerochan(query)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/pinterest', async (req, res, next) => {
    const query = req.query.q
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!query) return res.json(loghandler.query)
    pinterest(query)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.send('error')
        })
})
router.get('/tiktokdl', async (req, res, next) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.url)
    sosmed12(url)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/ytsearch', async (req, res, next) => {
    const query = req.query.q
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!query) return res.json(loghandler.query)
    ySearch(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/snaptik', async (req, res, next) => {
    const query = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!query) return res.json(loghandler.invalidlink)
    cupz.snaptik(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/igdl', async (req, res, next) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.invalidlink)
    require('../lib/ig').igdl(url)
        .then((data) => {
            if (data.error) return res.status(500).send({
                status: 500,
                result: null,
                message: data.error
            })
            res.send({
                status: 200,
                result: data
            });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/whois', async (req, res, next) => {
    const domain = req.query.domain
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!domain) return res.json(loghandler.domain)
    whois(domain)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/xnxxsearch', async (req, res, next) => {
    const query = req.query.q
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!query) return res.json(loghandler.query)
    xnxxsearch(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/xnxxdl', async (req, res, next) => {
    const url = req.query.url
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!url) return res.json(loghandler.invalidlink)
    xnxxdl(url)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/generatepw', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    genPassword()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/aesthetic', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    hem = ''
    link = 'https://source.unsplash.com/random'
    axios.get(link).then(async (result) => {
        hem = result.request.res.responseUrl
        baper = await fetch(hem).then(v => v.buffer())
        res.type('png')
        res.send(baper)
    })
})


router.get('/triggered', triggerRouter)

router.get('/affect', affectRouter)

router.get('/beautiful', beautifulRouter)

router.get('/bed', bedRouter)

router.get('/delete', deleteRouter)

router.get('/distracted', distractedRouter)

router.get('/jail', jailRouter)

router.get('/joke', jokerRouter)

router.get('/spank', spankRouter)

router.get('/shit', shitRouter)

router.get('/slap', slapRouter)

router.get('/faceplam', faceRouter)

router.get('/rainbow', rainbowRouter)

router.get('/rip', ripRouter)

router.get('/trash', trashRouter)

router.get('/hitler', hitlerRouter)

router.get('/wasted', wastedRouter)

router.get('/wanted', wantedRouter)

router.get('/kiss', kissRouter)

router.get('/welcome', welcome)

router.get('/goodbye', leave)

router.get('/welcome2', welcome2)

router.get('/goodbye2', leave2)

router.get('/welcome3', welcome3)

router.get('/goodbye3', leave3)

router.get('/patrick', Patrick)

router.get('/spongebob', Spongebob)

router.get('/xnxxmaker', Xnxx)

router.get('/igmaker', Instagram)

router.get('/promote', Promote)

router.get('/demote', Demote)

router.get('/kaneki', kaneki)

router.get('/verification', Verification)

router.get('/rank', Rank)

router.get('/levelup', LevelUp)

router.get('/lolimaker', loli)

router.get('/sadboy', sadboy)

router.get('/girlneko', girlNeko)

router.get('/rem', rem)

router.get('/customlogo', customGfx)

router.get('/customlogo2', customGfx2)

router.get('/wanted', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    mim = req.query
    if (!mim.url) return res.json({
        status: 404,
        msg: 'Masukkan Param Url'
    })
    try {
        canva = await require('canvacord').Canvas.wanted(mim.url)
        res.type('png')
        res.send(canva)

    } catch {
        res.json({
            status: 404,
            msg: 'Server Error, Please Report To wa.me/6287846676690'
        })
    }
})
router.get('/google', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    yt = require('google-it')
    if (!req.query.q) return res.json({
        status: false,
        msg: 'Masukkan Parameter q'
    })
    ser = await yt({
        query: req.query.q
    })
    res.json({
        status: 'success',
        result: ser
    })
})
router.get('/darkjokes', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const asupan = JSON.parse(fs.readFileSync(__path + '/lib/data/darkjokes.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.image;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/dj.jpg', data)
    res.sendFile(__path + '/tmp/dj.jpg')
})
router.get('/loli', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const asupan = JSON.parse(fs.readFileSync(__path + '/lib/data/loli.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    data = await fetch(Asupan).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/dj.jpg', data)
    res.sendFile(__path + '/tmp/dj.jpg')
})
router.get('/asupan/loli', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const asupan = JSON.parse(fs.readFileSync(__path + '/lib/data/asupanloli.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    data = await fetch(Asupan).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/dj.mp4', data)
    res.sendFile(__path + '/tmp/dj.mp4')
})

router.get('/wasted', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    mim = req.query
    if (!mim.url) return res.json({
        status: 404,
        msg: 'Masukkan Param Url'
    })
    try {
        canva = await require('canvacord').Canvas.wasted(mim.url)
        res.type('png')
        res.send(canva)

    } catch {
        res.json({
            status: 404,
            msg: 'Server Error, Please Report To wa.me/6287846676690'
        })
    }
})


router.get('/trigger', async (req, res, next) => {
    mim = req.query
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    if (!mim.url) return res.json({
        status: 404,
        msg: 'Masukkan Param Url'
    })
    try {
        canva = await require('canvacord').Canvas.trigger(mim.url)
        res.type('gif')
        res.send(canva)

    } catch {
        res.json({
            status: 404,
            msg: 'Server Error'
        })
    }
})
//Anime
router.get('/husbu', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const asupan = JSON.parse(fs.readFileSync(__path + '/lib/data/husbu.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.url;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/asupan.jpg', data)
    res.sendFile(__path + '/tmp/asupan.jpg')
})
router.get('/waifu', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const asupan = JSON.parse(fs.readFileSync(__path + '/lib/data/waifu.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.url;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/asupan.jpg', data)
    res.sendFile(__path + '/tmp/asupan.jpg')
})
router.get('/megumin', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    data = await fetchJson('https://api.waifu.pics/sfw/megumin')
    buff = await fetch(data.url).then(v => v.buffer())
    res.type('png')
    res.send(buff)
})
router.get('/poke', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    data = await fetchJson('https://api.waifu.pics/sfw/poke')
    buff = await fetch(data.url).then(v => v.buffer())
    res.type('gif')
    res.send(buff)
})
router.get('/kusonime', async (req, res, next) => {
    q = req.query.q
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    if (!q) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter q"
    })

    require('../lib/kusonime')(q)
        .then(data => {
            var result = data;
            res.json({
                author: 'Cupz',
                status: 200,
                result
            })
        })
        .catch(e => {
            res.status(404).send(e)
        })
})
router.get('/mediafire', async (req, res, next) => {
    if (!req.query.url) return res.send({
        status: 500,
        msg: 'Masukkan Parameter url'
    })
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    try {
        f = require('../lib/mediafire')
        res.json(await f(req.query.url))
    } catch {
        res.send('TerJadi Kesalahan, Mungkin Url Tidak Valid')
    }
})

router.get('/mediafire2', async (req, res, next) => {
    if (!req.query.url) return res.send({
        status: 500,
        msg: 'Masukkan Parameter url'
    })
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    try {
        f = require('../lib/mediafire2')
        res.json(await f(req.query.url))
    } catch {
        res.send('TerJadi Kesalahan, Mungkin Url Tidak Valid')
    }
})
router.get('/asupan', async (req, res, next) => {
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const asupan = JSON.parse(fs.readFileSync(__path + '/lib/data/asupan.json'));
    const Asupan = asupan[Math.floor(Math.random() * asupan.length)];
    let hasil = Asupan.asupan;
    data = await fetch(hasil).then(v => v.buffer())
    await fs.writeFileSync(__path + '/tmp/asupan.mp4', data)
    res.sendFile(__path + '/tmp/asupan.mp4')
})
router.get('/brainly', async (req, res, next) => {
    yt = require('brainly-scraper')
    const q = req.query.q;
    const apikey = req.query.apikey;
    if (q === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter q & apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    ser = await yt(req.query.q)
    res.json(ser)
})

router.get('/checkkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    res.send({
        status: 200,
        developer: 'RiczXD',
        apikey: apikey,
        limit: limit
    });
});
router.get('/tiny', async (req, res, next) => {
    const url = req.query.url;
    const apikey = req.query.apikey;
    if (url === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    request(`https://tinyurl.com/api-create.php?url=${url}`, function(error, response, body) {
        try {
            res.json({
                status: true,
                creator: `${creator}`,
                result: {
                    link: `${body}`,
                },
                message: `Jangan Lupa Bersyukur Hari Ini:)`
            })
        } catch (e) {
            console.log('Error :')
            res.json(loghandler.invalidlink)
        }
    })
})
router.get('/getsticker', async (req, res, next) => {
    q = req.query.q
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit is 0, reset every morning'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    if (!q) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter q"
    })

    fetch(encodeURI(`https://memekgede.herokuapp.com/api/getsticker?q=${q}`))
        .then(response => response.json())
        .then(data => {
            var result = data;
            res.json({
                author: '@RiczXD',
                status: 200,
                result
            })
        })
        .catch(e => {
            res.json(loghandler.error)
        })
})
router.get('/getsticker/v2', async (req, res, next) => {
    const apikey = req.query.apikey;
    const query = req.query.q;
    if (!query) return res.json(loghandler.query)
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    ucupygy(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get("/memegen", async (req, res, next) => {

    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    text = req.query.text;
    text2 = req.query.text2;
    img = req.query.img;
    if (!text) return res.json(loghandler.nottext)
    if (!text2) return res.json(loghandler.nottext)
    if (!img) return res.json(loghandler.img)
     {
        let hasil = 'https://memekgede.herokuapp.com/api/meme-gen?top=' + text + '&bottom=' + text2 + '&img=' + img + '&apikey=ar'
        data = await fetch(hasil).then(v => v.buffer())
        res.type('png')
        res.send(data)
    }
})
router.get("/memegen/v2", async (req, res, next) => {

    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
if (atas === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter atas`
    });
if (bawah === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter bawah`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    atas = req.query.atas;
    bawah = req.query.bawah;
    img = req.query.img;
 
    if (!img) return res.json(loghandler.img)
     {
        let hasil = 'https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${img}'
        data = await fetch(hasil).then(v => v.buffer())
        res.type('png')
        res.send(data)
    }
})
router.get('/playstore', async (req, res, next) => {
    const apikey = req.query.apikey;
    const query = req.query.query;
    if (!query) return res.json(loghandler.query)
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    hx.playstore(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/joox', async (req, res, next) => {
    const query = req.query.q;
    const apikey = req.query.apikey;
    if (query === undefined || apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query & apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    res.json(await Joox(req.query.q))
})

   router.get('/styletext', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)
    styletext(text)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

//Primbon
router.get('/artinama', async (req, res, next) => {
    nama = req.query.nama
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    if (!nama) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter nama"
    })
    require('../lib/artinama')(nama)
        .then(data => {
            var result = {
                status: 200,
                result: data.result.trim()
            }
            res.json(result)
        })
        .catch(e => {
            res.json(loghandler.error)
        })
})
router.get('/artimimpi', async (req, res, next) => {
    mimpi = req.query.mimpi
    apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    if (!mimpi) return res.json({
        status: false,
        creator: `${creator}`,
        message: "masukan parameter mimpi"
    })
    require('../lib/artimimpi')(mimpi)
        .then(data => {
            var result = data;
            res.json({
                status: 200,
                result: data.result.trim()
            })
        })
        .catch(e => {
            res.json(loghandler.error)
        })
})
router.get('/nomorhoki', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const nomor = req.query.nomor;
    if (!nomor) return res.json(loghandler.nomor)
    nomorHoki(nomor)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
router.get('/jodoh', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const nama1 = req.query.nama1;
    const nama2 = req.query.nama2;
    if (!nama1) return res.json(loghandler.noname)
    if (!nama2) return res.json(loghandler.noname2)
    ramalJodoh(nama1, nama2)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
router.get('/zodiak', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const nama1 = req.query.q;
    if (!nama1) return res.json(loghandler.nozodiak)
    zodiak(nama1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
   router.get('/shio', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const nama1 = req.query.q;
    if (!nama1) return res.json(loghandler.query)
    shio(nama1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
router.get('/memancingikan', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const tgl = req.query.tgl;
    const bln = req.query.bln;
    const thn = req.query.thn;
    if (!tgl) return res.json(loghandler.tgl)
        if (!bln) return res.json(loghandler.bln)
            if (!thn) return res.json(loghandler.thn)
    memancing_ikan(tgl, bln, thn)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
router.get('/wetonjawa', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const tgl = req.query.tgl;
    const bln = req.query.bln;
    const thn = req.query.thn;
    if (!tgl) return res.json(loghandler.tgl)
        if (!bln) return res.json(loghandler.bln)
            if (!thn) return res.json(loghandler.thn)
    weton_jawa(tgl, bln, thn)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
router.get('/sifatkarakter', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const nama = req.query.nama;
    const tgl = req.query.tgl;
    const bln = req.query.bln;
    const thn = req.query.thn;
        if (!nama) return res.json(loghandler.noname)
    if (!tgl) return res.json(loghandler.tgl)
        if (!bln) return res.json(loghandler.bln)
            if (!thn) return res.json(loghandler.thn)
    sifat_karakter(nama, tgl, bln, thn)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
router.get('/potensikeberuntungan', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    const nama = req.query.nama;
    const tgl = req.query.tgl;
    const bln = req.query.bln;
    const thn = req.query.thn;
        if (!nama) return res.json(loghandler.noname)
    if (!tgl) return res.json(loghandler.tgl)
        if (!bln) return res.json(loghandler.bln)
            if (!thn) return res.json(loghandler.thn)
    potensi_keberuntungan(nama, tgl, bln, thn)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});
//End Primbon

//TextPro
router.get('/textpro/neon', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)
    cupz
        .textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })
})
router.get('/textpro/matrix', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/joker', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)
    cupz
        .textpro("https://textpro.me/create-logo-joker-online-934.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })
})
router.get('/textpro/devil', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)
    cupz
        .textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/transformers', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)
    cupz
        .textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/thunder', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/graffiti', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    const text2 = req.query.text2;
    if (!text) return res.json(loghandler.nottext)
    if (!text2) return res.json (loghandler.nottext2)
    if (!text2) return res.json(loghandler.nottext2)
    cupz
        .textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
            text, text2
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })
})
router.get('/textpro/harry', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/3d', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/blackpink', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/lightglow', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/tiktok', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
    });
    const text = req.query.text;
    const text2 = req.query.text2;
    if (!text) return res.json(loghandler.nottext)
    if (!text2) return res.json (loghandler.nottext2)

    cupz
        .textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
            text, text2
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/rainbowequalizer', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/rainbow-equalizer-text-effect-902.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/futuristic', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/advancedglow', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/yellowjewelry', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/yellow-jewelry-text-effect-851.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/diamond', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/create-a-quick-sparkling-diamonds-text-effect-1077.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/glitter', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/gold-glitter-text-effect-836.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/pornhub', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    const text2 = req.query.text2;
    if (!text) return res.json(loghandler.nottext)
    if (!text2) return res.json (loghandler.nottext2)

    cupz
        .textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
            text, text2
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/ballon', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/gold-foil-balloon-text-effect-922.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/baddrug', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)

    cupz
        .textpro("https://textpro.me/plastic-bag-drug-text-effect-867.html", [
            text,
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/logowolf2', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    const text2 = req.query.text2;
    if (!text) return res.json(loghandler.nottext)
    if (!text2) return res.json (loghandler.nottext2)

    cupz
        .textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
            text, text2
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/textpro/layered', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    const text2 = req.query.text2;
    if (!text) return res.json(loghandler.nottext)
    if (!text2) return res.json (loghandler.nottext2)
    if (!text2) return res.json (loghandler.nottext2)

    cupz
        .textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html", [
            text, text2
        ])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })

})
router.get('/ephoto', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const text = req.query.text;
    if (!text) return res.json(loghandler.nottext)
 
    ephoto("https://ephoto360.com/tao-cover-anh-bia-game-among-us-online-932.html",
       [text])
        .then((data) => {
            var urlnya = data
            download(urlnya, './tmp/pubg.jpg', function() {
                res.sendFile(path.resolve('./tmp/pubg.jpg'))
            })
        })
})
//EndTextPro
router.get('/ytplay', youtubePlay);

router.get('/ytmp4', youtubeMp4);

router.get('/ytmp3', youtubeMp3);

router.get('/caklontong', cakLontong);

router.get('/quotes', quotes);

router.get('/fakta', fakta);

router.get('/bijak', bijak);

router.get('/motivasi', motivasi);

router.get('/oxy/:tema', photoOxy);

router.get('/dare', dare);

router.get('/truth', truth);

router.get('/truthen', truthen);

router.get('/dareen', dareen);

router.get('/gombal', gombal);

router.get('/pantun', pantun);

router.get('/cinta', cinta);

router.get('/receh', receh);

router.get('/pquotes', pquotes);


router.get('/cerpen', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    RandomCerpen()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
//Info
router.get('/merdeka', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    merdeka()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/cnn', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    CNN()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/corona', async (req, res, next) => {
    const apikey = req.query.apikey;
const negara = req.query.negara;
if (negara === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter negara`
    });
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
   covid(negara)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/gempa', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    gempa()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/wikipedia', async (req, res, next) => {
    const apikey = req.query.apikey;
    const query = req.query.query;
    if (!query) return res.json(loghandler.query)
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    wikiSearch(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/metro', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    metroTV()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/tempo', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    TempoNews()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/antara', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    AntaraNews()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/republika', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
   Republika()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/BBC', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    BBC()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/tribun', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    Tribun()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/CNBC', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    CNBC()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/indozone', async (req, res, next) => {
    const apikey = req.query.apikey;

    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    IndoZone()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/kumparan', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    Kumparan()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/inews', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
   iNewsTV()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/kontan', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    Kontan()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/kompas', async (req, res, next) => {
    const apikey = req.query.apikey;

    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    Kompas()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/detik', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    DetikNews()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/daily', async (req, res, next) => {
    const apikey = req.query.apikey;

    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    DailyNews()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/koranfajar', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    KoranFajar()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/koransindo', async (req, res, next) => {
    const apikey = req.query.apikey;

    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    KoranSindo()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/okezone', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    Okezone()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/viva', async (req, res, next) => {
    const apikey = req.query.apikey;

    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    VIVA()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/koranfajar', async (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    KoranFajar()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
//Stalk
router.get('/ghstalk', async (req, res, next) => {
    const apikey = req.query.apikey;
    const query = req.query.username;
    if (!query) return res.json(loghandler.nousername)
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    ghstalkv2(query)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.get('/tahta', async (req, res, next) => {
    const text = req.query.text;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!text) return res.json(loghandler.nottext)
         var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    const apa = 'HARTA\nTAHTA\n' + hartatahtaapa.toUpperCase()
      var result = process.cwd() + '/tmp/' +  'hartatahta-after.jpg'
    spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        __path + '/lib/font/tahta.ttf',
        '-pointsize',
        '200',
        '-tile',
        __path + '/tmp/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        apa,
        '-wave',
        '10x175',
        __path + '/tmp/hartatahta-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: '@RiczXD', status: 500, message: 'Error. Internal Server Error'})
    })
    .on('exit', () => {
        res.sendFile(path.resolve(__path + '/tmp/hartatahta-after.jpg'))
    })
})
router.get('/customtahta', async (req, res, next) => {
    const text = req.query.text;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!text) return res.json(loghandler.nottext)
    var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    spawn('convert', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        __path + '/lib/font/tahta.ttf',
        '-pointsize',
        '200',
        '-tile',
        __path + '/tmp/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        hartatahtaapa,
        '-wave',
        '10x175',
        __path + '/tmp/hartatahta-after.jpg'
    ])
    .on('error', () => {
        res.status(500).json({ By: '@RiczXD', status: 500, message: 'Error. Internal Server Error'})
    })
    .on('exit', () => {
        res.sendFile(path.resolve(__path + '/tmp/hartatahta-after.jpg'))
    })
})
router.get('/bukukiri', async (req, res, next) => {
    const text = req.query.text;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!text) return res.json(loghandler.nottext)
         const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')

									spawn('convert', [
									__path + '/tmp/nuliskiri-before.jpg',
									'-font',
									__path + '/lib/font/nulis.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									__path + '/tmp/nuliskiri-after.jpg'
									]) 
   .on('error', () => {
        res.status(500).json({ By: '@RiczXD', status: 500, message: 'Error. Internal Server Error'})
    })
    .on('exit', () => {
        res.sendFile(path.resolve(__path + '/tmp/nuliskiri-after.jpg'))
    })
})
router.get('/bukukanan', async (req, res, next) => {
    const text = req.query.text;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!text) return res.json(loghandler.nottext)
         const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									__path + '/tmp/nuliskanan-before.jpg',
									'-font',
									__path + '/lib/font/nulis.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									__path + '/tmp/nuliskanan-after.jpg'
									])
   .on('error', () => {
        res.status(500).json({ By: '@RiczXD', status: 500, message: 'Error. Internal Server Error'})
    })
    .on('exit', () => {
        res.sendFile(path.resolve(__path + '/tmp/nuliskanan-after.jpg'))
    })
})
router.get('/foliokiri', async (req, res, next) => {
    const text = req.query.text;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!text) return res.json(loghandler.nottext)
         const splitText = text.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									__path + '/tmp/foliokiri-before.jpg',
									'-font',
									__path + '/lib/font/nulis.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									__path + '/tmp/foliokiri-after.jpg'
									])
   .on('error', () => {
        res.status(500).json({ By: '@RiczXD', status: 500, message: 'Error. Internal Server Error'})
    })
    .on('exit', () => {
        res.sendFile(path.resolve(__path + '/tmp/foliokiri-after.jpg'))
    })
})
router.get('/foliokanan', async (req, res, next) => {
    const text = req.query.text;
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    limitAdd(apikey);
    if (!text) return res.json(loghandler.nottext)
                                    const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									__path + '/tmp/foliokanan-before.jpg',
									'-font',
									__path + '/lib/font/nulis.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									__path + '/tmp/foliokanan-after.jpg',
									])
   .on('error', () => {
        res.status(500).json({ By: '@RiczXD', status: 500, message: 'Error. Internal Server Error'})
    })
    .on('exit', () => {
        res.sendFile(path.resolve(__path + '/tmp/foliokanan-after.jpg'))
    })
})
router.get("/ssweb", async (req, res, next) => {
    apikey = req.query.apikey;
    url = req.query.url;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'your limit is 0, please buy premium apikey.'
    });
    limitAdd(apikey);
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
     {
        let hasil = 'https://rya-kun.herokuapp.com/api/ssweb?link='+ url +''
        data = await fetch(hasil).then(v => v.buffer())
        res.type('png')
        res.send(data)
    }
})
//page error
router.use(function(req, res) {
	res.status(404)
		.set("Content-Type", "text/html")
		.sendFile(__path + '/views/InvalidKey.html');
});

module.exports = router;
